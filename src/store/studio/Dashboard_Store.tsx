import create from "zustand";

interface Dashboard_Store {
  ActiveMenu: string;
  Set_ActiveMenu: (ActiveMenu: string) => void;

  SearchQuery: string;
  Set_SearchQuery: (SearchQuery: string) => void;
}

export const use_Dashboard_Store = create<Dashboard_Store>((set) => ({
  ActiveMenu: "Dashboard",
  Set_ActiveMenu: (ActiveMenu: string) =>
    set((state) => ({ ActiveMenu: ActiveMenu })),

  SearchQuery: "",
  Set_SearchQuery: (SearchQuery: string) =>
    set((state) => ({ SearchQuery: SearchQuery })),
}));
