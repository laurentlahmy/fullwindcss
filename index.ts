import chroma from "chroma-js";
import baseColors from "tailwindcss/colors";

// console.log("-> ", { baseColors }, "");

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

// console.log("-> ", { tailwind_select_colors_with_color_array }, "");

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

const colors = tailwind_select_colors_with_color_array.reduce(
  (
    previousValue,
    [
      color_name_as_string,
      current_color_colors_array,
      current_color_values_array,
    ]
  ) => {
    return `${previousValue} | '${color_name_as_string}'`;
  },
  ``
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

// https://gka.github.io/chroma.js/#color-hsl
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

export let c = (
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

//@ts-ignore
export const colors_array_of_names: string[] =
  tailwind_select_colors_with_color_array.reduce(
    (
      previousValue,
      [
        color_name_as_string,
        current_color_colors_array,
        current_color_values_array,
      ]
    ) => {
      return [...previousValue, color_name_as_string];
    },
    []
  );

colors_array_of_names.forEach((element) => {
  //@ts-ignore
  c[element] = element;
});
