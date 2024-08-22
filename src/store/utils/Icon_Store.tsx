import create from "zustand";

interface Icon_Component {
  Id: string;
  Icon: string;

  Icon_Size?: number;

  Icon_Color?: string;
  Icon_Bg_Color?: string;

  Icon_Border_width?: number;
  Icon_Border_Color?: string;

  Hover_Icon_Color?: string;
  Hover_Icon_Bg_Color?: string;
  Hover_Icon_Border_Color?: string;

  Pad_X?: number;
  Pad_Y?: number;

  Link?: string;
}

interface Icon_Store {
  Icon_Components: Icon_Component[];
  Add_Icon_Component: (property: Icon_Component) => void;

  Set_Id: (Id: string) => void;
  Set_Icon: (Id: string, Icon: string) => void;

  Set_Icon_Size: (Id: string, Icon_Size: number) => void;

  Set_Icon_Color: (Id: string, Icon_Color: string) => void;
  Set_Icon_Bg_Color: (Id: string, Icon_Bg_Color: string) => void;

  Set_Icon_Border_Width: (Id: string, Icon_Border_width: number) => void;
  Set_Icon_Border_Color: (Id: string, Icon_Border_Color: string) => void;

  Set_Hover_Icon_Color: (Id: string, Hover_Icon_Color: string) => void;
  Set_Hover_Icon_Bg_Color: (Id: string, Hover_Icon_Bg_Color: string) => void;
  Set_Hover_Icon_Border_Color: (
    Id: string,
    Hover_Icon_Border_Color: string
  ) => void;

  Set_Pad_X: (Id: string, Pad_X: number) => void;
  Set_Pad_Y: (Id: string, Pad_Y: number) => void;

  Set_Link: (Id: string, Link: string) => void;

  Selected_Id: string | null;
  Set_Selected_Id: (Id: string | null) => void;
}

export const use_Icon_Store = create<Icon_Store>((set) => ({
  Icon_Components: [],
  Add_Icon_Component: (property) => {
    set((state) => ({
      Icon_Components: [...state.Icon_Components, property],
    }));
  },

  Set_Id: (Id) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Id } : component
      ),
    }));
  },
  Set_Icon: (Id, Icon) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Icon } : component
      ),
    }));
  },

  Set_Icon_Size: (Id, Icon_Size) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Icon_Size } : component
      ),
    }));
  },

  Set_Icon_Color: (Id, Icon_Color) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Icon_Color } : component
      ),
    }));
  },
  Set_Icon_Bg_Color: (Id, Icon_Bg_Color) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Icon_Bg_Color } : component
      ),
    }));
  },

  Set_Icon_Border_Width: (Id, Icon_Border_width) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Icon_Border_width } : component
      ),
    }));
  },
  Set_Hover_Icon_Color: (Id, Hover_Icon_Color) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Hover_Icon_Color } : component
      ),
    }));
  },

  Set_Hover_Icon_Bg_Color: (Id, Hover_Icon_Bg_Color) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Hover_Icon_Bg_Color } : component
      ),
    }));
  },
  Set_Hover_Icon_Border_Color: (Id, Hover_Icon_Border_Color) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id
          ? { ...component, Hover_Icon_Border_Color }
          : component
      ),
    }));
  },
  Set_Icon_Border_Color: (Id, Icon_Border_Color) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Icon_Border_Color } : component
      ),
    }));
  },

  Set_Pad_X: (Id, Pad_X) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Pad_X } : component
      ),
    }));
  },

  Set_Pad_Y: (Id, Pad_Y) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Pad_Y } : component
      ),
    }));
  },

  Set_Link: (Id, Link) => {
    set((state) => ({
      Icon_Components: state.Icon_Components.map((component) =>
        component.Id === Id ? { ...component, Link } : component
      ),
    }));
  },

  Selected_Id: null,
  Set_Selected_Id: (Id) => {
    set({ Selected_Id: Id });
  },
}));
