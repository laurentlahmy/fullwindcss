import chroma from "chroma-js";
import baseColors from "tailwindcss/colors.js";


delete baseColors.lightBlue
delete baseColors.warmGray
delete baseColors.trueGray
delete baseColors.coolGray
delete baseColors.blueGray


const tailwind_select_colors = Object.entries(baseColors).filter(
  ([, value]) => value["50"]
)







// console.log("-> ", { tailwind_select_colors }, "");
const tailwind_select_colors_with_color_array = tailwind_select_colors.map(
  ([color_name_as_string, color_object]) => {
    const current_color_array = Object.entries(color_object);
    const current_color_colors_array = current_color_array.map(
      ([, color_hex_as_string]) => {
        return color_hex_as_string;
      }
    );
    const current_color_values_array = current_color_array.map(
      ([color_number_as_string]) => {
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
      [color_name_as_string as colors]: {
        scale: chroma
          // @ts-ignore
          .scale([
            "#FFFFFF",
            ...(current_color_colors_array as string[]),
            "#000000",
          ])
          .domain([0, ...(current_color_values_array as number[]), 1000])
          .mode("lab"),
      },
    };
  },
  {} as Record<colors, { scale: chroma.Scale }>
);

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
  color: colors = "gray",
  number: number = 500,
  format: formats = "hex"
): string => {
  const chroma_color = chroma_scales[color].scale(number);
  if (format.startsWith("css")) {
    return chroma_color.css(format.slice(3) as any);
  }
  if (!format.startsWith("css")) {
    // @ts-ignore
    return chroma_color[format]();
  }
  return "";
};

// Define the color names as a type to ensure type safety
export type ColorName =
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
