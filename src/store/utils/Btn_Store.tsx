import create from "zustand";

interface Btn_Component {
  Id: string;
  Content: string;

  Font_Style?: string;
  Font_Size?: number;
  Font_Weight?: number;

  Text_Color?: string;
  Text_Underline?: boolean;
  Text_Italic?: boolean;

  Bg_Color?: string;
  Border_Width?: number;
  Border_Color?: string;
  Pad_X?: number;
  Pad_Y?: number;

  Hover_Border_Color?: string;
  Hover_Bg_Color?: string;
  Hover_Text_Color?: string;

  Border_Radius_Tl?: number;
  Border_Radius_Tr?: number;
  Border_Radius_Bl?: number;
  Border_Radius_Br?: number;

  Icon?: string;

  Line_Height?: number;
  Letter_Spacing?: number;

  Link?: string;

  Classname?: string;
}

interface Btn_Store {
  Btn_Components: Btn_Component[];
  Add_Btn_Component: (property: Btn_Component) => void;
  Update_Btn_Components: (updatedComponents: Btn_Component[]) => void;

  Set_Id: (Id: string) => void;
  Set_Content: (Id: string, Content: string) => void;

  Set_Font_Style: (Id: string, Font_Style: string) => void;
  Set_Font_Size: (Id: string, Font_Size: number) => void;
  Set_Font_Weight: (Id: string, Font_Weight: number) => void;

  Set_Text_Color: (Id: string, Text_Color: string) => void;
  Set_Text_Underline: (Id: string, Text_Underline: boolean) => void;
  Set_Text_Italic: (Id: string, Text_Italic: boolean) => void;

  Set_Bg_Color: (Id: string, Bg_Color: string) => void;
  Set_Border_Width: (Id: string, Border_Width: number) => void;
  Set_Border_Color: (Id: string, Border_Color: string) => void;
  Set_Pad_X: (Id: string, Pad_X: number) => void;
  Set_Pad_Y: (Id: string, Pad_Y: number) => void;

  Set_Hover_Bg_Color: (Id: string, Hover_Bg_Color: string) => void;
  Set_Hover_Border_Color: (Id: string, Hover_Border_Color: string) => void;
  Set_Hover_Text_Color: (Id: string, Hover_Text_Color: string) => void;

  Set_Border_Radius_Tl: (Id: string, Border_Radius_Tl: number) => void;
  Set_Border_Radius_Tr: (Id: string, Border_Radius_Tr: number) => void;
  Set_Border_Radius_Bl: (Id: string, Border_Radius_Bl: number) => void;
  Set_Border_Radius_Br: (Id: string, Border_Radius_Br: number) => void;

  Set_Icon: (Id: string, icon: string) => void;

  Set_Line_Height: (Id: string, Line_Height: number) => void;
  Set_Letter_Spacing: (Id: string, Letter_Spacing: number) => void;

  Set_Link: (Id: string, Set_Link: string) => void;

  Set_Classname: (Id: string, CLassname: string) => void;

  Selected_Id: string | null;
  Set_Selected_Id: (Id: string | null) => void;
}

export const use_Btn_Store = create<Btn_Store>((set) => ({
  Btn_Components: [],
  Add_Btn_Component: (property) => {
    set((state) => ({
      Btn_Components: [...state.Btn_Components, property],
    }));
  },
  Update_Btn_Components: (updatedComponents: Btn_Component[]) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) => {
        const updatedComponent = updatedComponents.find(
          (updated) => updated.Id === component.Id
        );
        return updatedComponent ? updatedComponent : component;
      }),
    }));
  },

  Set_Id: (Id) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Id } : component
      ),
    }));
  },

  Set_Content: (Id, Content) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Content } : component
      ),
    }));
  },

  Set_Font_Style: (Id, Font_Style) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Font_Style } : component
      ),
    }));
  },
  Set_Font_Size: (Id, Font_Size) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Font_Size } : component
      ),
    }));
  },
  Set_Font_Weight: (Id, Font_Weight) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Font_Weight } : component
      ),
    }));
  },

  Set_Text_Color: (Id, Text_Color) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Text_Color } : component
      ),
    }));
  },
  Set_Text_Underline: (Id, Text_Underline) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Text_Underline } : component
      ),
    }));
  },
  Set_Text_Italic: (Id, Text_Italic) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Text_Italic } : component
      ),
    }));
  },

  Set_Bg_Color: (Id, Bg_Color) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Bg_Color } : component
      ),
    }));
  },
  Set_Border_Width: (Id, Border_Width) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Border_Width } : component
      ),
    }));
  },
  Set_Border_Color: (Id, Border_Color) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Border_Color } : component
      ),
    }));
  },

  Set_Pad_X: (Id, Pad_X) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Pad_X } : component
      ),
    }));
  },

  Set_Pad_Y: (Id, Pad_Y) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Pad_Y } : component
      ),
    }));
  },

  Set_Hover_Border_Color: (Id, Hover_Border_Color) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Hover_Border_Color } : component
      ),
    }));
  },

  Set_Hover_Bg_Color: (Id, Hover_Bg_Color) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Hover_Bg_Color } : component
      ),
    }));
  },

  Set_Border_Radius_Tl: (Id, Border_Radius_Tl) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Border_Radius_Tl } : component
      ),
    }));
  },

  Set_Border_Radius_Tr: (Id, Border_Radius_Tr) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Border_Radius_Tr } : component
      ),
    }));
  },
  Set_Border_Radius_Bl: (Id, Border_Radius_Bl) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Border_Radius_Bl } : component
      ),
    }));
  },
  Set_Border_Radius_Br: (Id, Border_Radius_Br) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Border_Radius_Br } : component
      ),
    }));
  },
  Set_Hover_Text_Color: (Id, Hover_Text_Color) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Hover_Text_Color } : component
      ),
    }));
  },

  Set_Icon: (Id, Icon) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Icon } : component
      ),
    }));
  },

  Set_Line_Height: (Id, Line_Height) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Line_Height } : component
      ),
    }));
  },
  Set_Letter_Spacing: (Id, Letter_Spacing) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Letter_Spacing } : component
      ),
    }));
  },

  Set_Link: (Id, Link) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Link } : component
      ),
    }));
  },

  Set_Classname: (Id, Classname) => {
    set((state) => ({
      Btn_Components: state.Btn_Components.map((component) =>
        component.Id === Id ? { ...component, Classname } : component
      ),
    }));
  },

  Selected_Id: null,

  Set_Selected_Id: (Id) => {
    set({ Selected_Id: Id });
  },
}));
