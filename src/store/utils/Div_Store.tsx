import create from "zustand";

interface Div_Component {
  Id: string;

  Height?: number | string;
  Width?: number | string;

  Pad_L?: number;
  Pad_R?: number;
  Pad_T?: number;
  Pad_B?: number;

  Bg_Color?: string;
}

interface Div_Store {
  Div_Components: Div_Component[];
  Add_Div_Component: (property: Div_Component) => void;
  Update_Div_Components: (updatedComponents: Div_Component[]) => void;

  Set_Id: (Id: string) => void;

  Set_Height: (Id: string, Height: number) => void;
  Set_Width: (Id: string, Width: number) => void;

  Set_Pad_L: (Id: string, PadL: number) => void;
  Set_Pad_R: (Id: string, PadR: number) => void;
  Set_Pad_T: (Id: string, PadT: number) => void;
  Set_Pad_B: (Id: string, PadB: number) => void;

  Set_Bg_Color: (Id: string, Bg_Color: string) => void;

  Selected_Id: string | null;
  Set_Selected_Id: (Id: string | null) => void;
}

export const use_Div_Store = create<Div_Store>((set) => ({
  Div_Components: [],
  Add_Div_Component: (property) => {
    set((state) => ({
      Div_Components: [...state.Div_Components, property],
    }));
  },
  Update_Div_Components: (updatedComponents: Div_Component[]) => {
    set((state) => ({
      Div_Components: state.Div_Components.map((component) => {
        const updatedComponent = updatedComponents.find(
          (updated) => updated.Id === component.Id
        );
        return updatedComponent ? updatedComponent : component;
      }),
    }));
  },

  Set_Id: (Id) => {
    set((state) => ({
      Div_Components: state.Div_Components.map((component) =>
        component.Id === Id ? { ...component, Id } : component
      ),
    }));
  },

  Set_Height: (Id, Height) => {
    set((state) => ({
      Div_Components: state.Div_Components.map((component) =>
        component.Id === Id ? { ...component, Height } : component
      ),
    }));
  },
  Set_Width: (Id, Width) => {
    set((state) => ({
      Div_Components: state.Div_Components.map((component) =>
        component.Id === Id ? { ...component, Width } : component
      ),
    }));
  },

  Set_Pad_L: (Id, Pad_L) => {
    set((state) => ({
      Div_Components: state.Div_Components.map((component) =>
        component.Id === Id ? { ...component, Pad_L } : component
      ),
    }));
  },
  Set_Pad_R: (Id, Pad_R) => {
    set((state) => ({
      Div_Components: state.Div_Components.map((component) =>
        component.Id === Id ? { ...component, Pad_R } : component
      ),
    }));
  },
  Set_Pad_T: (Id, Pad_T) => {
    set((state) => ({
      Div_Components: state.Div_Components.map((component) =>
        component.Id === Id ? { ...component, Pad_T } : component
      ),
    }));
  },
  Set_Pad_B: (Id, Pad_B) => {
    set((state) => ({
      Div_Components: state.Div_Components.map((component) =>
        component.Id === Id ? { ...component, Pad_B } : component
      ),
    }));
  },

  Set_Bg_Color: (Id, Bg_Color) => {
    set((state) => ({
      Div_Components: state.Div_Components.map((component) =>
        component.Id === Id ? { ...component, Bg_Color } : component
      ),
    }));
  },

  Selected_Id: null,

  Set_Selected_Id: (Id) => {
    set({ Selected_Id: Id });
  },
}));
