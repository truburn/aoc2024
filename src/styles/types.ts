import { NumberString, PartialRecord } from "@utils/types";

export enum FontSize {
  TINY = "tiny",
  SMALL = "small",
  MEDIUM = "medium",
  REGULAR = "regular",
  LARGE = "large",
  XLARGE = "xlarge",
  JUMBO = "jumbo",
}

export enum FontWeight {
  HAIRLINE = "hairline",
  THIN = "thin",
  LIGHT = "light",
  NORMAL = "normal",
  SEMIBOLD = "semibold",
  BOLD = "bold",
  BLACK = "black",
}

export interface FontConstant {
  fontFamily: string;
  size?: PartialRecord<FontSize, number>;
  weight?: PartialRecord<FontWeight, number>;
  description?: string;
  sampleText?: string;
}

export interface FontDefinition {
  standard: FontConstant;
  secondary?: FontConstant;
  header?: FontConstant;
  monospace?: FontConstant;
}

export const defaultFontSizes: Record<FontSize, number> = {
  tiny: 10,
  small: 12,
  medium: 14,
  regular: 16,
  large: 20,
  xlarge: 32,
  jumbo: 48,
};

export const defaultFontWeights: PartialRecord<FontWeight, number> = {
  normal: 400,
  bold: 600,
};

export interface ThemeFont {
  family: string;
  weight: Record<FontWeight, number>;
  size: Record<FontSize, number>;
}

export interface ThemeColor {
  dark: string;
  light: string;
}

export enum ColorVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  ACCENT = "accent",
  MUTED = "muted",
  CARD = "card",
  CARD_BORDER = "cardBorder",
  BG = "bg",
  FG = "fg",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export interface BoxSides {
  horizontal?: NumberString;
  vertical?: NumberString;
  top?: NumberString;
  bottom?: NumberString;
  left?: NumberString;
  right?: NumberString;
}

export interface BorderRadius {
  top?: NumberString;
  bottom?: NumberString;
  left?: NumberString;
  right?: NumberString;
  topLeft?: NumberString;
  topRight?: NumberString;
  bottomLeft?: NumberString;
  bottomRight?: NumberString;
}

export interface ElTheme {
  font: {
    standard: ThemeFont;
    secondary: ThemeFont;
    header: ThemeFont;
    monospace: ThemeFont;
  };
  color: Record<ColorVariant, string>;
  border: {
    width: NumberString | BoxSides;
    radius: NumberString;
    color: string;
    style: "solid" | "dotted" | "dashed";
  };
}
