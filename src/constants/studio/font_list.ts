import {
  Titillium_Web,
  Salsa,
  Montserrat,
  Volkhov,
  Poppins,
  Roboto_Mono,
  Open_Sans,
} from "next/font/google";

export const titillium_Web = Titillium_Web({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const roboto_Mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const salsa = Salsa({ weight: ["400"], subsets: ["latin"] });

export const open_Sans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

export const Font_List = [
  ["Poppins", poppins.className],
  ["Roboto Mono", roboto_Mono.className],
  ["Titillium Web", titillium_Web.className],
  ["Volkhov", volkhov.className],
  ["Montserrat", montserrat.className],
  ["Salsa", salsa.className],
  ["Open Sans", open_Sans.className],
];
