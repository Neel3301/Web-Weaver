import create from "zustand";

interface Mockup_Store {
  Mockup: "Desktop" | "Tablet" | "Mobile";
  Set_MockUP: (mockup: "Desktop" | "Tablet" | "Mobile") => void;
}

export const use_Mockup_Store = create<Mockup_Store>((set) => ({
  Mockup: "Desktop",
  Set_MockUP: (mockup: "Desktop" | "Tablet" | "Mobile") =>
    set((state) => ({ Mockup: mockup })),
}));
