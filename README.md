-> you can also grab all the tailwindcss v4 css variables on https://fullwindcss.com/ (it's free)

# fullwindcss: the extended TailwindCSS Color palette in a single function

- Access tailwindcss colors with a function call: `c.gray(500)` returns the hex value of gray-500
- Access tailwindcss color shades that are not the default 50, 100, 200, ...,900, 950: `c.indigo(685)`

### tl;dr

Ever wished there was a tailwind class between `gray-800` and `gray-900`?
How about the freedom to use any color shade number between `0` and `1000`, such as `blue-699` and `indigo-225`?
With fullwindcss you can access `c.indigo(350)` or `slate(222)`, giving you access to over 27,000 colors!

### import single function:

```ts
import { c } from "fullwindcss";

c.blue(778);
```

### import color by color:

```ts
import { blue, indigo } from "fullwindcss";

blue(550); // "#3272f1"
indigo(625); // "#4c42de"
```

### formats:

you can generate outputs in various formats

| format       | code (single function)    | code (color import)     | return value                                                           |
| ------------ | ------------------------- | ----------------------- | ---------------------------------------------------------------------- |
| default: hex | `c.blue(777)`             | `blue(777)`             | `"#1e43b8"`                                                            |
| hex          | `c.blue(777, "hex")`      | `blue(777, "hex")`      | `"#1e43b8"`                                                            |
| rgb          | `c.blue(777, "rgb")`      | `blue(777, "rgb")`      | `"[ 30, 67, 184 ]"`                                                    |
| rgba         | `c.blue(777, "rgba")`     | `blue(777, "rgba")`     | `"[ 30, 67, 184, 1 ]"`                                                 |
| hsl          | `c.blue(777, "hsl")`      | `blue(777, "hsl")`      | `"[ 225.55575934468578, 0.7196149254018972, 0.4202639994500806, 1 ]"`  |
| hsv          | `c.blue(777, "hsv")`      | `blue(777, "hsv")`      | `"[ 225.55575934468578, 0.8369489177743832, 0.7226922460634533 ]"`     |
| hsi          | `c.blue(777, "hsi")`      | `blue(777, "hsi")`      | `"[ 226.6661608747827, 0.6797869850098448, 0.3679917658572705 ]"`      |
| lab          | `c.blue(777, "lab")`      | `blue(777, "lab")`      | `"[ 33.52833716034179, 31.889097429039282, -65.1172971364519 ]"`       |
| lch          | `c.blue(777, "lch")`      | `blue(777, "lch")`      | `"[ 33.52833716034179, 72.506392278169, 296.0918127297107 ]"`          |
| hcl          | `c.blue(777, "hcl")`      | `blue(777, "hcl")`      | `"[ 296.0918127297107, 72.506392278169, 33.52833716034179 ]"`          |
| oklab        | `c.blue(777, "oklab")`    | `blue(777, "oklab")`    | `"[ 0.4390910082965143, -0.015429164048355926, -0.1885483069121165 ]"` |
| oklch        | `c.blue(777, "oklch")`    | `blue(777, "oklch")`    | `"[ 0.4390910082965143, 0.1891785483152272, 265.3218322088104 ]"`      |
| cssrgb       | `c.blue(777, "cssrgb")`   | `blue(777, "cssrgb")`   | `"rgb(30 67 184)"`                                                     |
| csshsl       | `c.blue(777, "csshsl")`   | `blue(777, "csshsl")`   | `"hsl(225.56deg 71.96% 42.03%)"`                                       |
| csslab       | `c.blue(777, "csslab")`   | `blue(777, "csslab")`   | `"lab(32.37% 23.43 -66.75)"`                                           |
| csslch       | `c.blue(777, "csslch")`   | `blue(777, "csslch")`   | `"lch(32.37% 70.74 289.34deg)"`                                        |
| cssoklab     | `c.blue(777, "cssoklab")` | `blue(777, "cssoklab")` | `"oklab(43.91% -0.02 -0.19)"`                                          |
| cssoklch     | `c.blue(777, "cssoklch")` | `blue(777, "cssoklch")` | `"oklch(43.91% 0.19 265.32deg)"`                                       |

### installation

npm

```sh
npm install fullwindcss
```

yarn

```sh
yarn add fullwindcss
```

pnpm

```sh
pnpm install fullwindcss
```

bun

```sh
bun add fullwindcss
```

### more context

The fullwind colors are a careful step by step interpolation of the origital tailwind colors.

There are many ways to interpolate colors. The straighforward approach of color interpolation yields bad, grayish / brownish colors in the middle of the generated gradient of colors.

fullwindcss uses CIELAB, the “perceptually uniform space”, designed to mimic the human perception of color and be the most accurate color system available to humans.

In addition, fullwind's interpolated colors perfectly fit tailwind's color scale: fullwind's pink-500 is the exact same color as tailwind's pink-500, thus preserving full compatilibity.

#### version 1.4 removes deprecated tailwind colors 

Goodbye console warning!
