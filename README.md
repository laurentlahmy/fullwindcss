# Fullwindcss: Extend TailwindCSS Colors

Unlock 1001 shades for every 27 tailwind color, instead of being limited to the default 11 shades.

The fullwind colors are a careful step by step interpolation of the origital tailwind colors.

There are many ways to interpolate colors. The straighforward approach of color interpolation yields bad, grayish / brownish colors in the middle of the generated gradient of colors.

fullwindcss uses CIELAB, the “perceptually uniform space”, designed to mimic the human perception of color and be the most accurate color system available to humans.

In addition, fullwind's interpolated colors perfectly fit tailwind's color scale: fullwind's pink-500 is the exact same color as tailwind's pink-500, thus preserving full compatilibity.

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

### basic usage:

```ts
import { c } from "fullwindcss";

c("blue", 500); // the first param is the tailwind color string, the second is the tailwind color value
c("blue", 777); // you can use any value from 0 to 1000, the colors are interpolated using the lab method
c(c.blue, 778); // you can access the color names on the c object, can be more convenient than typing strings
```

### in tailwindcss classes:

```ts
import { c } from "fullwindcss";

<div className={`bg-[${c(blue, 250)}]`}>with tailwind</div>;
```

### formats:

you can generate outputs in various formats

| format       | code                          | code (with color shorthand)   | return value                                                           |
| ------------ | ----------------------------- | ----------------------------- | ---------------------------------------------------------------------- |
| default: hex | `c("blue", 777);`             | `c(c.blue, 777);`             | `"#1e43b8"`                                                            |
| hex          | `c("blue", 777, "hex");`      | `c(c.blue, 777, "hex");`      | `"#1e43b8"`                                                            |
| rgb          | `c("blue", 777, "rgb");`      | `c(c.blue, 777, "rgb");`      | `"[ 30, 67, 184 ]"`                                                    |
| rgba         | `c("blue", 777, "rgba");`     | `c(c.blue, 777, "rgba");`     | `"[ 30, 67, 184, 1 ]"`                                                 |
| hsl          | `c("blue", 777, "hsl");`      | `c(c.blue, 777, "hsl");`      | `"[ 225.55575934468578, 0.7196149254018972, 0.4202639994500806, 1 ]"`  |
| hsv          | `c("blue", 777, "hsv");`      | `c(c.blue, 777, "hsv");`      | `"[ 225.55575934468578, 0.8369489177743832, 0.7226922460634533 ]"`     |
| hsi          | `c("blue", 777, "hsi");`      | `c(c.blue, 777, "hsi");`      | `"[ 226.6661608747827, 0.6797869850098448, 0.3679917658572705 ]"`      |
| lab          | `c("blue", 777, "lab");`      | `c(c.blue, 777, "lab");`      | `"[ 33.52833716034179, 31.889097429039282, -65.1172971364519 ]"`       |
| lch          | `c("blue", 777, "lch");`      | `c(c.blue, 777, "lch");`      | `"[ 33.52833716034179, 72.506392278169, 296.0918127297107 ]"`          |
| hcl          | `c("blue", 777, "hcl");`      | `c(c.blue, 777, "hcl");`      | `"[ 296.0918127297107, 72.506392278169, 33.52833716034179 ]"`          |
| oklab        | `c("blue", 777, "oklab");`    | `c(c.blue, 777, "oklab");`    | `"[ 0.4390910082965143, -0.015429164048355926, -0.1885483069121165 ]"` |
| oklch        | `c("blue", 777, "oklch");`    | `c(c.blue, 777, "oklch");`    | `"[ 0.4390910082965143, 0.1891785483152272, 265.3218322088104 ]"`      |
| cssrgb       | `c("blue", 777, "cssrgb");`   | `c(c.blue, 777, "cssrgb");`   | `"rgb(30 67 184)"`                                                     |
| csshsl       | `c("blue", 777, "csshsl");`   | `c(c.blue, 777, "csshsl");`   | `"hsl(225.56deg 71.96% 42.03%)"`                                       |
| csslab       | `c("blue", 777, "csslab");`   | `c(c.blue, 777, "csslab");`   | `"lab(32.37% 23.43 -66.75)"`                                           |
| csslch       | `c("blue", 777, "csslch");`   | `c(c.blue, 777, "csslch");`   | `"lch(32.37% 70.74 289.34deg)"`                                        |
| cssoklab     | `c("blue", 777, "cssoklab");` | `c(c.blue, 777, "cssoklab");` | `"oklab(43.91% -0.02 -0.19)"`                                          |
| cssoklch     | `c("blue", 777, "cssoklch");` | `c(c.blue, 777, "cssoklch");` | `"oklch(43.91% 0.19 265.32deg)"`                                       |
