import create from "zustand";

interface Image_Component {
  Id: string;
  Img: string;
  Img_Url: string;
  Display_Img: string;
  Border_Radius: number;
  Height: number;
  Width: number;
  Max_Height: number;
  Max_Width: number;
  Min_Height: number;
  Min_Width: number;
  Object: "fill" | "contain" | "cover" | "none" | "scale-down";
}

interface Image_Store {
  Image_Components: Image_Component[];
  Add_Image_Component: (property: Image_Component) => void;
  Update_Image_Components: (updatedComponents: Image_Component[]) => void;

  Set_Id: (Id: string) => void;
  Set_Img: (Id: string, Img: string) => void;
  Set_Img_Url: (Id: string, Img_Url: string) => void;
  Set_Display_Img: (Id: string, Display_Img: string) => void;
  Set_Border_Radius: (Id: string, Border_Radius: number) => void;
  Set_Height: (Id: string, Height: number) => void;
  Set_Width: (Id: string, Width: number) => void;
  Set_Max_Height: (Id: string, Max_Height: number) => void;
  Set_Max_Width: (Id: string, Max_Width: number) => void;
  Set_Min_Height: (Id: string, Min_Height: number) => void;
  Set_Min_Width: (Id: string, Min_Width: number) => void;
  Set_Object: (
    Id: string,
    Object: "fill" | "contain" | "cover" | "none" | "scale-down"
  ) => void;

  Selected_Id: string | null;
  Set_Selected_Id: (Id: string | null) => void;
}

export const use_Image_Store = create<Image_Store>((set) => ({
  Image_Components: [],
  Add_Image_Component: (property) => {
    set((state) => ({
      Image_Components: [...state.Image_Components, property],
    }));
  },
  Update_Image_Components: (updatedComponents: Image_Component[]) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) => {
        const updatedComponent = updatedComponents.find(
          (updated) => updated.Id === component.Id
        );
        return updatedComponent ? updatedComponent : component;
      }),
    }));
  },

  Set_Id: (Id) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Id } : component
      ),
    }));
  },
  Set_Img: (Id, Img) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Img } : component
      ),
    }));
  },

  Set_Display_Img: (Id, Display_Img) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Display_Img } : component
      ),
    }));
  },
  Set_Img_Url: (Id, Img_Url) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Img_Url } : component
      ),
    }));
  },
  Set_Border_Radius: (Id, Border_Radius) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Border_Radius } : component
      ),
    }));
  },
  Set_Height: (Id, Height) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Height } : component
      ),
    }));
  },
  Set_Width: (Id, Width) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Width } : component
      ),
    }));
  },
  Set_Max_Height: (Id, Max_Height) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Max_Height } : component
      ),
    }));
  },
  Set_Max_Width: (Id, Max_Width) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Max_Width } : component
      ),
    }));
  },
  Set_Min_Height: (Id, Min_Height) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Min_Height } : component
      ),
    }));
  },
  Set_Min_Width: (Id, Min_Width) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Min_Width } : component
      ),
    }));
  },

  Set_Object: (Id, Object) => {
    set((state) => ({
      Image_Components: state.Image_Components.map((component) =>
        component.Id === Id ? { ...component, Object } : component
      ),
    }));
  },

  Selected_Id: null,

  Set_Selected_Id: (Id) => {
    set({ Selected_Id: Id });
  },
}));
