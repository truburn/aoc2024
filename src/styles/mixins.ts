import { CSSObject, Theme } from "@emotion/react";
import { BoxSides } from "@styles/types";
import { NumberString } from "@utils/types";

/**
 * Mixin to create border styles based on passed parameters
 *
 * @param params The options to define the border styles
 * @returns CSS border properties to style the border
 */
export function borderMixin(params?: Partial<Theme["border"]>): CSSObject {
  // No params were provided, there should be no border
  if (!params) return { border: "none" };

  let borderWidth: CSSObject;
  // The width value in the params is an override object, define each side
  if (typeof params.width === "object") {
    const sizes = boxSides(params.width);
    borderWidth = {
      borderTopWidth: sizes.top,
      borderBottomWidth: sizes.bottom,
      borderLeftWidth: sizes.left,
      borderRightWidth: sizes.right,
    };
  }
  // Otherwise the border width should use the width value in the params
  else {
    borderWidth = {
      borderWidth: params.width ?? 0,
    };
  }

  return {
    borderColor: params.color ?? "currentcolor",
    borderStyle: params.style ?? "solid",
    ...borderWidth,
    borderRadius: params.radius ?? 0,
  };
}

/**
 * Mixin to create padding styles based on passed override parameters
 *
 * @param params If a string or number is defined, the value will be assigned to the padding for all sides of the element. If an object is passed with override values, `vertical` (top & bottom) and `horizontal` (left & right) will be applied first. Then the individual overrides for each side will be applied. `top`, `bottom`, `left`, `right`.
 * @returns CSS padding properties
 */
export function paddingMixin(params: NumberString | BoxSides = 0): CSSObject {
  // The passed params does not have any overrides for specific sides, return a single padding setting
  if (typeof params !== "object") {
    return { padding: params };
  }
  // There are overrides, so let's get them and then return them
  const sizes = boxSides(params);
  return {
    paddingTop: sizes.top,
    paddingBottom: sizes.bottom,
    paddingLeft: sizes.left,
    paddingRight: sizes.right,
  };
}

/**
 * Mixin to create margin styles based on passed override parameters
 *
 * @param params If a string or number is defined, the value will be assigned to the margin for all sides of the element. If an object is passed with override values, `vertical` (top & bottom) and `horizontal` (left & right) will be applied first. Then the individual overrides for each side will be applied. `top`, `bottom`, `left`, `right`.
 * @returns CSS margin properties
 */
export function marginMixin(params: NumberString | BoxSides = 0): CSSObject {
  // The passed params does not have any overrides for specific sides, return a single margin setting
  if (typeof params !== "object") {
    return { margin: params };
  }
  // There are overrides, so let's get them and then return them
  const sizes = boxSides(params);
  return {
    marginTop: sizes.top,
    marginBottom: sizes.bottom,
    marginLeft: sizes.left,
    marginRight: sizes.right,
  };
}

/**
 * Utility method to evaluate a BoxSides object and return values for each side
 *
 * @param params `vertical` (top & bottom) and `horizontal` (left & right) will be applied first. Then the individual overrides for each side will be applied. `top`, `bottom`, `left`, `right`
 * @returns object with values for `top`, `bottom`, `left`, and `right`
 */
function boxSides(params: BoxSides) {
  return {
    top: params.top ?? params.vertical ?? 0,
    bottom: params.bottom ?? params.vertical ?? 0,
    left: params.left ?? params.horizontal ?? 0,
    right: params.right ?? params.horizontal ?? 0,
  };
}
