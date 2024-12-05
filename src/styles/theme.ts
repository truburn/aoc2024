import {
  defaultFontSizes,
  defaultFontWeights,
  FontDefinition,
} from "@components/typography/types";
import fontData from "@constants/fonts.json";
import type { Theme } from "@emotion/react";
import { ColorVariant, ThemeColor, ThemeFont } from "@styles/types";
import colorData from "@constants/colors.json";

const fonts: FontDefinition = fontData;
// Use the standard font for any other font group that is not defined
const DEFAULT_FONT: ThemeFont = {
  family: fonts.standard.fontFamily,
  weight: {
    ...defaultFontWeights,
    ...(fonts.standard.weight ?? {}),
  } as ThemeFont["weight"],
  size: {
    ...defaultFontSizes,
    ...(fonts.standard.size ?? {}),
  } as ThemeFont["size"],
};

const themeFont: Theme["font"] = {
  standard: DEFAULT_FONT,
  secondary: {
    family: fonts.secondary?.fontFamily ?? DEFAULT_FONT.family,
    weight: {
      ...DEFAULT_FONT.weight,
      ...(fonts.secondary?.weight ?? {}),
    },
    size: {
      ...DEFAULT_FONT.size,
      ...(fonts.secondary?.size ?? {}),
    },
  },
  header: {
    family: fonts.header?.fontFamily ?? DEFAULT_FONT.family,
    weight: {
      ...DEFAULT_FONT.weight,
      ...(fonts.header?.weight ?? {}),
    },
    size: {
      ...DEFAULT_FONT.size,
      ...(fonts.header?.size ?? {}),
    },
  },
  monospace: {
    family: fonts.monospace?.fontFamily ?? DEFAULT_FONT.family,
    weight: {
      ...DEFAULT_FONT.weight,
      ...(fonts.monospace?.weight ?? {}),
    },
    size: {
      ...DEFAULT_FONT.size,
      ...(fonts.monospace?.size ?? {}),
    },
  },
};

const colors: Record<ColorVariant, ThemeColor> = colorData;

function getThemeColors(themeName: "light" | "dark"): Theme["color"] {
  return Object.fromEntries(
    Object.values(ColorVariant).map((key) => [key, colors[key][themeName]])
  ) as Theme["color"];
}

const lightColors = getThemeColors("light");
const darkColors = getThemeColors("dark");

const themeBorder: Omit<Theme["border"], "color"> = {
  width: 1,
  radius: 4,
  style: "solid",
};

export const light: Theme = {
  font: themeFont,
  color: lightColors,
  border: {
    ...themeBorder,
    color: lightColors.muted,
  },
};

export const dark: Theme = {
  font: themeFont,
  color: darkColors,
  border: {
    ...themeBorder,
    color: darkColors.muted,
  },
};
