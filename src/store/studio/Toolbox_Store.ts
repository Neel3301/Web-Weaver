import create from "zustand";

interface Toolbox_Store {
  //Dashboard Store

  Dashboard_Sidebar_Is_Open: boolean;
  Dashboard_Sidebar_Toggle: () => void;

  // text
  Text_Toolbox_Is_Open: boolean;
  Text_Toolbox_On_Open: () => void;
  Text_Toolbox_On_Close: () => void;

  //   button
  Btn_Toolbox_Is_Open: boolean;
  Btn_Toolbox_On_Open: () => void;
  Btn_Toolbox_On_Close: () => void;

  // icon
  Icon_Toolbox_Is_Open: boolean;
  Icon_Toolbox_On_Open: () => void;
  Icon_Toolbox_On_Close: () => void;

  //   image
  Image_Toolbox_Is_Open: boolean;
  Image_Toolbox_On_Open: () => void;
  Image_Toolbox_On_Close: () => void;

  //   div
  Div_Toolbox_Is_Open: boolean;
  Div_Toolbox_On_Open: () => void;
  Div_Toolbox_On_Close: () => void;
}

const use_Toolbox_Store = create<Toolbox_Store>((set) => ({
  //   Dashboard
  Dashboard_Sidebar_Is_Open: false,
  Dashboard_Sidebar_Toggle: () =>
    set((state) => ({
      Dashboard_Sidebar_Is_Open: !state.Dashboard_Sidebar_Is_Open,
    })),

  //   text
  Text_Toolbox_Is_Open: false,
  Text_Toolbox_On_Open: () =>
    set((state) => ({
      Text_Toolbox_Is_Open: true,
      // close other
      Btn_Toolbox_Is_Open: false,
      Icon_Toolbox_Is_Open: false,
      Image_Toolbox_Is_Open: false,
      Div_Toolbox_Is_Open: false,
    })),
  Text_Toolbox_On_Close: () =>
    set((state) => ({ Text_Toolbox_Is_Open: false })),

  // Btn
  Btn_Toolbox_Is_Open: false,
  Btn_Toolbox_On_Open: () =>
    set((state) => ({
      Btn_Toolbox_Is_Open: true,
      // close other
      Text_Toolbox_Is_Open: false,
      Icon_Toolbox_Is_Open: false,
      Image_Toolbox_Is_Open: false,
      Div_Toolbox_Is_Open: false,
    })),
  Btn_Toolbox_On_Close: () => set((state) => ({ Btn_Toolbox_Is_Open: false })),

  //   icon
  Icon_Toolbox_Is_Open: false,
  Icon_Toolbox_On_Open: () =>
    set((state) => ({
      Icon_Toolbox_Is_Open: true,
      // close other
      Text_Toolbox_Is_Open: false,
      Btn_Toolbox_Is_Open: false,
      Image_Toolbox_Is_Open: false,
      Div_Toolbox_Is_Open: false,
    })),
  Icon_Toolbox_On_Close: () =>
    set((state) => ({ Icon_Toolbox_Is_Open: false })),

  //   image
  Image_Toolbox_Is_Open: false,
  Image_Toolbox_On_Open: () =>
    set((state) => ({
      Image_Toolbox_Is_Open: true,
      // close other
      Text_Toolbox_Is_Open: false,
      Btn_Toolbox_Is_Open: false,
      Icon_Toolbox_Is_Open: false,
      Div_Toolbox_Is_Open: false,
    })),
  Image_Toolbox_On_Close: () =>
    set((state) => ({ Image_Toolbox_Is_Open: false })),

  //   div
  Div_Toolbox_Is_Open: false,
  Div_Toolbox_On_Open: () =>
    set((state) => ({
      Div_Toolbox_Is_Open: true,
      // close other
      Text_Toolbox_Is_Open: false,
      Icon_Toolbox_Is_Open: false,
      Image_Toolbox_Is_Open: false,
      Btn_Toolbox_Is_Open: false,
    })),
  Div_Toolbox_On_Close: () => set((state) => ({ Div_Toolbox_Is_Open: false })),
}));

export default use_Toolbox_Store;
