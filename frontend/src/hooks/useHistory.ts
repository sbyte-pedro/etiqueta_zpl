import { useStore } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { useDesignerStore } from '../store/useDesignerStore';

/**
 * Reactive access to the designer store's undo/redo history (backed by zundo).
 *
 * undo()/redo() also clear the current selection (handles may point at
 * elements that no longer exist in the restored state) and re-sync the ZPL
 * code, which is not part of the tracked history.
 */
export function useHistory() {
  const { undo, redo, pastCount, futureCount } = useStore(
    useDesignerStore.temporal,
    useShallow((s) => ({
      undo: s.undo,
      redo: s.redo,
      pastCount: s.pastStates.length,
      futureCount: s.futureStates.length,
    })),
  );

  const afterTravel = () => {
    useDesignerStore.getState().clearSelection();
    useDesignerStore.getState().syncToCode();
  };

  return {
    undo: () => { undo(); afterTravel(); },
    redo: () => { redo(); afterTravel(); },
    canUndo: pastCount > 0,
    canRedo: futureCount > 0,
  };
}
