import create from "zustand";

interface Text_Component {
  Id: string;
  Content: string;

  Font_Style?: string;
  Font_Size?: number;
  Font_Weight?: number;

  Text_Color?: string;
  Text_Alignment?: string;
  Text_Underline?: boolean;
  Text_Italic?: boolean;

  Line_Height?: number;
  Letter_Spacing?: number;

  Link?: string;

  Classname?: string;
}

interface Text_Store {
  Text_Components: Text_Component[];
  Add_Text_Component: (property: Text_Component) => void;
  Update_Text_Components: (updatedComponents: Text_Component[]) => void;

  Set_Id: (Id: string) => void;
  Set_Content: (Id: string, Content: string) => void;

  Set_Font_Style: (Id: string, Font_Style: string) => void;
  Set_Font_Size: (Id: string, Font_Size: number) => void;
  Set_Font_Weight: (Id: string, Font_Weight: number) => void;

  Set_Text_Color: (Id: string, Text_Color: string) => void;
  Set_Text_Alignment: (Id: string, Text_Alignment: string) => void;
  Set_Text_Underline: (Id: string, Text_Underline: boolean) => void;
  Set_Text_Italic: (Id: string, Text_Italic: boolean) => void;

  Set_Line_Height: (Id: string, Line_Height: number) => void;
  Set_Letter_Spacing: (Id: string, Letter_Spacing: number) => void;

  Set_Link: (Id: string, Set_Link: string) => void;

  Set_Classname: (Id: string, Classname: string) => void;

  Selected_Id: string | null;
  Set_Selected_Id: (Id: string | null) => void;
}

export const use_Text_Store = create<Text_Store>((set) => ({
  Text_Components: [],
  Add_Text_Component: (property) => {
    set((state) => ({
      Text_Components: [...state.Text_Components, property],
    }));
  },
  Update_Text_Components: (updatedComponents: Text_Component[]) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) => {
        const updatedComponent = updatedComponents.find(
          (updated) => updated.Id === component.Id
        );
        return updatedComponent ? updatedComponent : component;
      }),
    }));
  },

  Set_Id: (Id) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Id } : component
      ),
    }));
  },

  Set_Content: (Id, Content) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Content } : component
      ),
    }));
  },

  Set_Font_Style: (Id, Font_Style) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Font_Style } : component
      ),
    }));
  },
  Set_Font_Size: (Id, Font_Size) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Font_Size } : component
      ),
    }));
  },
  Set_Font_Weight: (Id, Font_Weight) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Font_Weight } : component
      ),
    }));
  },

  Set_Text_Color: (Id, Text_Color) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Text_Color } : component
      ),
    }));
  },
  Set_Text_Alignment: (Id, Text_Alignment) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Text_Alignment } : component
      ),
    }));
  },
  Set_Text_Underline: (Id, Text_Underline) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Text_Underline } : component
      ),
    }));
  },
  Set_Text_Italic: (Id, Text_Italic) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Text_Italic } : component
      ),
    }));
  },

  Set_Line_Height: (Id, Line_Height) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Line_Height } : component
      ),
    }));
  },
  Set_Letter_Spacing: (Id, Letter_Spacing) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Letter_Spacing } : component
      ),
    }));
  },

  Set_Link: (Id, Link) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Link } : component
      ),
    }));
  },

  Set_Classname: (Id, Classname) => {
    set((state) => ({
      Text_Components: state.Text_Components.map((component) =>
        component.Id === Id ? { ...component, Classname } : component
      ),
    }));
  },

  Selected_Id: null,

  Set_Selected_Id: (Id) => {
    set({ Selected_Id: Id });
  },
}));
