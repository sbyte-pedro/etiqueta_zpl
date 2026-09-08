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
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div>
        {editing ? (
          <input
            autoFocus
            className="w-full border border-blue-400 rounded px-2 py-0.5 text-sm font-semibold text-gray-800"
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
            className="font-semibold text-gray-800 line-clamp-2 break-words cursor-pointer hover:text-blue-600 transition-colors"
            title="Click to rename"
            onClick={() => setEditing(true)}
          >
            {design.name}
          </p>
        )}
        <button
          onClick={toggleVersions}
          className="text-xs text-blue-500 hover:text-blue-700 mt-1 text-left"
        >
          {design.versionCount} version{design.versionCount !== 1 ? 's' : ''} {expanded ? '▲' : '▼'}
        </button>
        <p className="text-xs text-gray-400">Updated {relativeDate(design.updatedAt)}</p>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 pt-2 flex flex-col gap-1">
          {versionsLoading && <p className="text-xs text-gray-400">Loading…</p>}
          {versions.map(v => (
            <div key={v.id} className="flex items-center justify-between text-xs">
              <span className="text-gray-600">v{v.versionNumber} · {relativeDate(v.createdAt)}</span>
              <button
                onClick={() => onLoadVersion(v.versionNumber)}
                className="text-blue-600 hover:text-blue-800"
              >
                Load
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onOpen}
          className="flex-1 text-sm py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Open latest
        </button>
        <button
          onClick={onDelete}
          className="text-sm px-3 py-1.5 rounded border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
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
    try {
      await loadMoreDesigns();
    } finally {
      setLoadingMore(false);
    }
  };

  const handleOpen = async (design: DesignSummary) => {
    setOpeningId(design.id);
    try {
      const { items } = await apiListVersions(design.id, 1, 0);
      if (items.length === 0) return;
      await loadVersion(design.id, items[0].versionNumber);
      onBack();
    } finally {
      setOpeningId(null);
    }
  };

  const handleLoadVersion = async (design: DesignSummary, versionNumber: number) => {
    setOpeningId(design.id);
    try {
      await loadVersion(design.id, versionNumber);
      onBack();
    } finally {
      setOpeningId(null);
    }
  };

  const handleDelete = async (design: DesignSummary) => {
    if (!window.confirm(`Delete "${design.name}" and all its versions? This cannot be undone.`)) return;
    await deleteDesign(design.id);
  };

  const filtered = search.trim()
    ? designs.filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
    : designs;

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-4">
        <button
          onClick={onBack}
          className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1 transition-colors"
        >
          ← Back to Editor
        </button>
        <span className="text-sm font-semibold text-gray-700">My Designs</span>
        <input
          type="text"
          placeholder="Search designs…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="ml-auto w-52 border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {loading && <p className="text-sm text-gray-400 text-center mt-12">Loading…</p>}

        {!loading && error && <p className="text-sm text-red-500 text-center mt-12">{error}</p>}

        {!loading && !error && designs.length === 0 && (
          <div className="text-center mt-24">
            <p className="text-gray-400 text-sm">No saved designs yet.</p>
            <p className="text-gray-400 text-sm">Head back to the editor to create your first one.</p>
          </div>
        )}

        {!loading && designs.length > 0 && filtered.length === 0 && (
          <p className="text-sm text-gray-400 text-center mt-12">No designs match "{search}"</p>
        )}

        {!loading && filtered.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map(design => (
                <DesignCard
                  key={design.id}
                  design={design}
                  onOpen={() => handleOpen(design)}
                  onDelete={() => handleDelete(design)}
                  onLoadVersion={(vn) => handleLoadVersion(design, vn)}
                  onRename={(newName) => renameDesign(design.id, newName)}
                />
              ))}
            </div>
            {!search && (
              <div className="flex flex-col items-center gap-2 mt-6">
                <p className="text-xs text-gray-400">Showing {designs.length} of {designsTotal}</p>
                {designs.length < designsTotal && (
                  <button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="text-sm px-4 py-1.5 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
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
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <p className="text-white text-sm bg-black/60 px-4 py-2 rounded">Opening design…</p>
        </div>
      )}
    </div>
  );
}
