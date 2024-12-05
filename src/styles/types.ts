import { FontSize, FontWeight } from "@components/typography/types";
import { NumberString } from "@utils/types";

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
