import React, { useEffect, useState } from 'react';
import { useDesignsStore } from '../store/useDesignsStore';
import { apiListVersions, DesignSummary, VersionSummary } from '../utils/designsClient';

interface Props {
  onBack: () => void;
}

function relativeDate(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (diff === 0) return 'today';
  if (diff === 1) return 'yesterday';
  return `${diff} days ago`;
}

function DesignCard({ design, onOpen, onDelete, onLoadVersion, onRename }: {
  design: DesignSummary;
  onOpen: () => void;
  onDelete: () => void;
  onLoadVersion: (versionNumber: number) => void;
  onRename: (newName: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [versions, setVersions] = useState<VersionSummary[]>([]);
  const [versionsLoading, setVersionsLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState(design.name);

  const toggleVersions = async () => {
    if (!expanded && versions.length === 0) {
      setVersionsLoading(true);
      try {
        const { items } = await apiListVersions(design.id, 100, 0);
        setVersions(items);
      } finally {
        setVersionsLoading(false);
      }
    }
    setExpanded(e => !e);
  };

  const commitRename = () => {
    const trimmed = draftName.trim();
    if (trimmed && trimmed !== design.name) onRename(trimmed);
    else setDraftName(design.name);
    setEditing(false);
  };

  return (
    <div style={{
      background: 'var(--chrome-surface)',
      border: '1px solid var(--chrome-border)',
      borderRadius: 8,
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      transition: 'border-color 0.15s',
    }}
    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--chrome-text-faint)')}
    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--chrome-border)')}
    >
      <div>
        {editing ? (
          <input
            autoFocus
            className="chrome-input"
            style={{ fontWeight: 500, fontSize: 13 }}
            value={draftName}
            onChange={e => setDraftName(e.target.value)}
            onBlur={commitRename}
            onKeyDown={e => {
              if (e.key === 'Enter') commitRename();
              if (e.key === 'Escape') { setDraftName(design.name); setEditing(false); }
            }}
          />
        ) : (
          <p
            style={{
              fontWeight: 500,
              fontSize: 13,
              color: 'var(--chrome-text)',
              marginBottom: 4,
              cursor: 'pointer',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            title="Click to rename"
            onClick={() => setEditing(true)}
          >
            {design.name}
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={toggleVersions}
            style={{
              fontSize: 11,
              color: 'var(--accent)',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {design.versionCount} version{design.versionCount !== 1 ? 's' : ''} {expanded ? '▲' : '▼'}
          </button>
          <span style={{ fontSize: 11, color: 'var(--chrome-text-faint)' }}>
            {relativeDate(design.updatedAt)}
          </span>
        </div>
      </div>

      {expanded && (
        <div style={{
          borderTop: '1px solid var(--chrome-border)',
          paddingTop: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}>
          {versionsLoading && <p style={{ fontSize: 11, color: 'var(--chrome-text-faint)' }}>Loading…</p>}
          {versions.map(v => (
            <div key={v.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: 'var(--chrome-text-muted)' }}>
                v{v.versionNumber} · {relativeDate(v.createdAt)}
              </span>
              <button
                onClick={() => onLoadVersion(v.versionNumber)}
                style={{
                  fontSize: 11,
                  color: 'var(--accent)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  padding: 0,
                }}
              >
                Load
              </button>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: 6, marginTop: 'auto' }}>
        <button
          onClick={onOpen}
          className="chrome-btn chrome-btn-primary"
          style={{ flex: 1, justifyContent: 'center', fontSize: 12 }}
        >
          Open latest
        </button>
        <button
          onClick={onDelete}
          className="chrome-btn chrome-btn-danger"
          style={{ fontSize: 12, padding: '4px 10px' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export function MyDesignsPage({ onBack }: Props) {
  const { designs, designsTotal, fetchDesigns, loadMoreDesigns, deleteDesign, renameDesign, loadVersion, error } = useDesignsStore();
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [openingId, setOpeningId] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchDesigns().finally(() => setLoading(false));
  }, [fetchDesigns]);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    try { await loadMoreDesigns(); } finally { setLoadingMore(false); }
  };

  const handleOpen = async (design: DesignSummary) => {
    setOpeningId(design.id);
    try {
      const { items } = await apiListVersions(design.id, 1, 0);
      if (items.length === 0) return;
      await loadVersion(design.id, items[0].versionNumber);
      onBack();
    } finally { setOpeningId(null); }
  };

  const handleLoadVersion = async (design: DesignSummary, versionNumber: number) => {
    setOpeningId(design.id);
    try { await loadVersion(design.id, versionNumber); onBack(); }
    finally { setOpeningId(null); }
  };

  const handleDelete = async (design: DesignSummary) => {
    if (!window.confirm(`Delete "${design.name}" and all its versions? This cannot be undone.`)) return;
    await deleteDesign(design.id);
  };

  const filtered = search.trim()
    ? designs.filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
    : designs;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--chrome-bg)' }}>
      {/* Top bar */}
      <div style={{
        height: 44,
        background: 'var(--chrome-surface)',
        borderBottom: '1px solid var(--chrome-border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        gap: 12,
        flexShrink: 0,
      }}>
        <button
          onClick={onBack}
          className="chrome-btn chrome-btn-ghost"
          style={{ gap: 6, fontSize: 12 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Editor
        </button>

        <div style={{ width: 1, height: 18, background: 'var(--chrome-border)' }} />

        <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--chrome-text)' }}>My Designs</span>

        <div style={{ flex: 1 }} />

        <div style={{ position: 'relative' }}>
          <svg
            width="13" height="13" viewBox="0 0 13 13" fill="none"
            style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: 'var(--chrome-text-faint)', pointerEvents: 'none' }}
          >
            <circle cx="5.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M8 8l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search designs"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="chrome-input"
            style={{ paddingLeft: 26, width: 200 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="chrome-scroll" style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
        {loading && (
          <p style={{ fontSize: 13, color: 'var(--chrome-text-faint)', textAlign: 'center', marginTop: 60 }}>Loading…</p>
        )}

        {!loading && error && (
          <p style={{ fontSize: 13, color: 'var(--status-error)', textAlign: 'center', marginTop: 60 }}>{error}</p>
        )}

        {!loading && !error && designs.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: 80 }}>
            <p style={{ fontSize: 13, color: 'var(--chrome-text-faint)', lineHeight: 1.8 }}>
              No saved designs yet.<br />
              Go back to the editor to create your first one.
            </p>
            <button onClick={onBack} className="chrome-btn chrome-btn-primary" style={{ marginTop: 16, justifyContent: 'center' }}>
              Go to editor
            </button>
          </div>
        )}

        {!loading && designs.length > 0 && filtered.length === 0 && (
          <p style={{ fontSize: 13, color: 'var(--chrome-text-faint)', textAlign: 'center', marginTop: 60 }}>
            No designs match "{search}"
          </p>
        )}

        {!loading && filtered.length > 0 && (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 12,
            }}>
              {filtered.map(design => (
                <DesignCard
                  key={design.id}
                  design={design}
                  onOpen={() => handleOpen(design)}
                  onDelete={() => handleDelete(design)}
                  onLoadVersion={vn => handleLoadVersion(design, vn)}
                  onRename={newName => renameDesign(design.id, newName)}
                />
              ))}
            </div>

            {!search && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 24 }}>
                <p style={{ fontSize: 11, color: 'var(--chrome-text-faint)' }}>
                  Showing {designs.length} of {designsTotal}
                </p>
                {designs.length < designsTotal && (
                  <button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="chrome-btn chrome-btn-ghost"
                    style={{ opacity: loadingMore ? 0.5 : 1 }}
                  >
                    {loadingMore ? 'Loading…' : 'Load more'}
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {openingId !== null && (
        <div className="modal-overlay">
          <p style={{ fontSize: 13, color: 'var(--chrome-text)', background: 'var(--chrome-elevated)', padding: '10px 20px', borderRadius: 8, border: '1px solid var(--chrome-border)' }}>
            Opening design…
          </p>
        </div>
      )}
    </div>
  );
}
