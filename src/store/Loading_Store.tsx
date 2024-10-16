import create from "zustand";

interface Loading_Store {
  IsLoading: boolean;
  Set_Is_Loading: (IsLoading: boolean) => void;
}

export const use_Loading_Store = create<Loading_Store>((set) => ({
  IsLoading: false,
  Set_Is_Loading: (IsLoading: boolean) =>
    set((state) => ({ IsLoading: IsLoading })),
}));
