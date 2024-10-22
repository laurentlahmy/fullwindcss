import chroma from "chroma-js";
import baseColors from "tailwindcss/colors";

// // console.log("-> ", { baseColors }, "");

const tailwind_select_colors = Object.entries(baseColors).filter(
  ([key, value]) => value["50"]
);
// console.log("-> ", { tailwind_select_colors }, "");
const tailwind_select_colors_with_color_array = tailwind_select_colors.map(
  ([color_name_as_string, color_object]) => {
    const current_color_array = Object.entries(color_object);
    const current_color_colors_array = current_color_array.map(
      ([color_number_as_string, color_hex_as_string]) => {
        return color_hex_as_string;
      }
    );
    const current_color_values_array = current_color_array.map(
      ([color_number_as_string, color_hex_as_string]) => {
        return Number(color_number_as_string);
      }
    );
    return [
      color_name_as_string,
      current_color_colors_array,
      current_color_values_array,
    ];
  }
);

// // console.log("-> ", { tailwind_select_colors_with_color_array }, "");

const chroma_scales = tailwind_select_colors_with_color_array.reduce(
  (
    previousValue,
    [
      color_name_as_string,
      current_color_colors_array,
      current_color_values_array,
    ]
  ) => {
    return {
      ...previousValue,
      [color_name_as_string as string]: {
        scale: chroma
          // @ts-ignore
          .scale(["#FFFFFF", ...current_color_colors_array, "#000000"])
          .domain([0, ...current_color_values_array, 1000])
          .mode("lab"),
      },
    };
  },
  {}
);

// const colors = tailwind_select_colors_with_color_array.reduce(
//   (
//     previousValue,
//     [
//       color_name_as_string,
//       current_color_colors_array,
//       current_color_values_array,
//     ]
//   ) => {
//     return `${previousValue} | '${color_name_as_string}'`;
//   },
//   ``
// );

type colors =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "lightBlue"
  | "warmGray"
  | "trueGray"
  | "coolGray"
  | "blueGray";

// // https://gka.github.io/chroma.js/#color-hsl
type formats =
  | "hex"
  | "rgb"
  | "rgba"
  | "hsl"
  | "hsv"
  | "hsi"
  | "lab"
  | "lch"
  | "hcl"
  | "oklab"
  | "oklch"
  | "cssrgb"
  | "csshsl"
  | "csslab"
  | "csslch"
  | "cssoklab"
  | "cssoklch";

export let get_color = (
  color: colors | string = "gray",
  number: number = 500,
  format: formats = "hex"
) => {
  const chroma_color = chroma_scales[color].scale(number);
  if (format.startsWith("css")) {
    return chroma_color.css(format.slice(3));
  }
  if (!format.startsWith("css")) {
    return chroma_color[format]();
  }
  return;
};

// //@ts-ignore
// export const colors_array_of_names: string[] =
//   tailwind_select_colors_with_color_array.reduce(
//     (
//       previousValue,
//       [
//         color_name_as_string,
//         current_color_colors_array,
//         current_color_values_array,
//       ]
//     ) => {
//       return [...previousValue, color_name_as_string];
//     },
//     []
//   );

// // export type c = {};
// let c =

// colors_array_of_names.forEach((element) => {
//   //@ts-ignore
//   c[element] = (value: number, format?: formats) =>
//     get_color(element, value, format);
// });

// export const slate = (value: number, format?: formats) =>
//   get_color("slate", value, format);
// export const gray = (value: number, format?: formats) =>
//   get_color("gray", value, format);
// export const zinc = (value: number, format?: formats) =>
//   get_color("zinc", value, format);
// export const neutral = (value: number, format?: formats) =>
//   get_color("neutral", value, format);
// export const stone = (value: number, format?: formats) =>
//   get_color("stone", value, format);
// export const red = (value: number, format?: formats) =>
//   get_color("red", value, format);
// export const orange = (value: number, format?: formats) =>
//   get_color("orange", value, format);
// export const amber = (value: number, format?: formats) =>
//   get_color("amber", value, format);
// export const yellow = (value: number, format?: formats) =>
//   get_color("yellow", value, format);
// export const lime = (value: number, format?: formats) =>
//   get_color("lime", value, format);
// export const green = (value: number, format?: formats) =>
//   get_color("green", value, format);
// export const emerald = (value: number, format?: formats) =>
//   get_color("emerald", value, format);
// export const teal = (value: number, format?: formats) =>
//   get_color("teal", value, format);
// export const cyan = (value: number, format?: formats) =>
//   get_color("cyan", value, format);
// export const sky = (value: number, format?: formats) =>
//   get_color("sky", value, format);
// export const blue = (value: number, format?: formats) =>
//   get_color("blue", value, format);
// export const indigo = (value: number, format?: formats) =>
//   get_color("indigo", value, format);
// export const violet = (value: number, format?: formats) =>
//   get_color("violet", value, format);
// export const purple = (value: number, format?: formats) =>
//   get_color("purple", value, format);
// export const fuchsia = (value: number, format?: formats) =>
//   get_color("fuchsia", value, format);
// export const pink = (value: number, format?: formats) =>
//   get_color("pink", value, format);
// export const rose = (value: number, format?: formats) =>
//   get_color("rose", value, format);
// export const lightBlue = (value: number, format?: formats) =>
//   get_color("lightBlue", value, format);
// export const warmGray = (value: number, format?: formats) =>
//   get_color("warmGray", value, format);
// export const trueGray = (value: number, format?: formats) =>
//   get_color("trueGray", value, format);
// export const coolGray = (value: number, format?: formats) =>
//   get_color("coolGray", value, format);
// export const blueGray = (value: number, format?: formats) =>
//   get_color("blueGray", value, format);

// Define the color names as a type to ensure type safety
type ColorName =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "lightBlue"
  | "warmGray"
  | "trueGray"
  | "coolGray"
  | "blueGray";

// Define the formats type if not already defined
// type formats = string; // Replace with actual format type if different

// Create a type for the color function
type ColorFunction = (value: number, format?: formats) => string;

// Create an object to store all color functions
const c: Record<ColorName, ColorFunction> = {} as Record<
  ColorName,
  ColorFunction
>;

// List of all color names
const colorNames: ColorName[] = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "lightBlue",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray",
];

// Generate all color functions dynamically
colorNames.forEach((colorName) => {
  c[colorName] = (value: number, format?: formats) =>
    get_color(colorName, value, format);
});

// Export all color functions
export const {
  slate,
  gray,
  zinc,
  neutral,
  stone,
  red,
  orange,
  amber,
  yellow,
  lime,
  green,
  emerald,
  teal,
  cyan,
  sky,
  blue,
  indigo,
  violet,
  purple,
  fuchsia,
  pink,
  rose,
  lightBlue,
  warmGray,
  trueGray,
  coolGray,
  blueGray,
} = c;

// Export the colors object as well for dynamic access
export { c };
