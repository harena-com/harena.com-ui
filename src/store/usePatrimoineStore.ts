import { create } from 'zustand';

interface PatrimonyState {
  patrimonyId: string | null;
  setPatrimonyId: (id: string) => void;
}

export const usePatrimonyStore = create<PatrimonyState>((set) => ({
  patrimonyId: null,
  setPatrimonyId: (id: string) => set({ patrimonyId: id }),
}));
