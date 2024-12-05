import { borderMixin, marginMixin, paddingMixin } from "./mixins";

describe("borderMixin", () => {
  it("Returns a border value of `none` when no parameters are defined", () => {
    const result = borderMixin();
    expect(result).toStrictEqual({ border: "none" });
  });

  it("Returns border values with default values and a numeric width value", () => {
    const result = borderMixin({ width: 2 });
    const expected = {
      borderStyle: "solid",
      borderColor: "currentcolor",
      borderRadius: 0,
      borderWidth: 2,
    };
    expect(result).toStrictEqual(expected);
  });

  it("Returns border values with a string width value", () => {
    const result = borderMixin({
      style: "dashed",
      color: "#abc123",
      width: "1px 3px",
      radius: 4,
    });
    const expected = {
      borderStyle: "dashed",
      borderColor: "#abc123",
      borderWidth: "1px 3px",
      borderRadius: 4,
    };
    expect(result).toStrictEqual(expected);
  });

  it("Returns border values with a border width object", () => {
    const result = borderMixin({
      width: { vertical: 1, left: 3, right: "5px 10px" },
    });
    const expected = {
      borderStyle: "solid",
      borderColor: "currentcolor",
      borderRadius: 0,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 3,
      borderRightWidth: "5px 10px",
    };
    expect(result).toStrictEqual(expected);
  });
});

describe("marginMixin", () => {
  it("Returns a margin of 0 when no overrides are defined", () => {
    const result = marginMixin();
    expect(result).toStrictEqual({ margin: 0 });
  });

  it("Returns a string value for the margin", () => {
    const result = marginMixin("inherit");
    expect(result).toStrictEqual({ margin: "inherit" });
  });

  it("Returns a numeric value for the margin", () => {
    const result = marginMixin(16);
    expect(result).toStrictEqual({ margin: 16 });
  });

  it("Returns only the top and bottom margins when `vertical` is defined", () => {
    const result = marginMixin({ vertical: 1 });
    const expected = {
      marginTop: 1,
      marginBottom: 1,
      marginRight: 0,
      marginLeft: 0,
    };
    expect(result).toStrictEqual(expected);
  });

  it("Returns only the bottom and right margins and all other are 0", () => {
    const result = marginMixin({ bottom: 8, right: 4 });
    const expected = {
      marginTop: 0,
      marginBottom: 8,
      marginRight: 4,
      marginLeft: 0,
    };
    expect(result).toStrictEqual(expected);
  });
});

describe("paddingMixin", () => {
  it("Returns a padding of 0 when no overrides are defined", () => {
    const result = paddingMixin();
    expect(result).toStrictEqual({ padding: 0 });
  });

  it("Returns a string value for the padding", () => {
    const result = paddingMixin("initial");
    expect(result).toStrictEqual({ padding: "initial" });
  });

  it("Returns a numeric value for the padding", () => {
    const result = paddingMixin(16);
    expect(result).toStrictEqual({ padding: 16 });
  });

  it("Returns only the left and right paddings when `horizontal` is defined", () => {
    const result = paddingMixin({ horizontal: 1 });
    const expected = {
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 1,
      paddingLeft: 1,
    };
    expect(result).toStrictEqual(expected);
  });

  it("Returns only the top and left paddings and all other are 0", () => {
    const result = paddingMixin({ top: 8, left: 4 });
    const expected = {
      paddingTop: 8,
      paddingBottom: 0,
      paddingRight: 0,
      paddingLeft: 4,
    };
    expect(result).toStrictEqual(expected);
  });
});
