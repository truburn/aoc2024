import { PartialRecord } from "@utils/types";

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
