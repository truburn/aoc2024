import { renderHook, waitFor } from "@testing-library/react";
import { useExtractProps } from "@utils/hooks";

describe("useExtractProps", () => {
  it("Separates out component props from base props", async () => {
    const componentProps = { prop1: "value1", prop2: true };
    const { result } = renderHook(() =>
      useExtractProps(
        {
          ...componentProps,
          overrideClasses: { root: "root-class" },
        },
        {
          prefix: "prefix",
          suffix: "suffix",
        }
      )
    );

    await waitFor(() => {
      expect(result.current.id).toBeDefined();
    });

    expect(result.current.props).toStrictEqual(componentProps);
    expect(result.current.overrideClasses).toStrictEqual({
      root: "root-class",
    });

    const idParts = result.current.id!.split("-");
    expect(idParts[0]).toEqual("prefix");
    expect(idParts[1].length).toEqual(8);
    expect(idParts[2]).toEqual("suffix");
  });

  it("Separates out style props from the component props", async () => {
    const { result } = renderHook(() =>
      useExtractProps(
        { prop1: "name", prop2: true, color: "blue", prop3: 5, width: 1 },
        { styles: ["color", "width"] }
      )
    );

    await waitFor(() => {
      expect(result.current).toHaveProperty("props");
      expect(result.current).toHaveProperty("styleProps");
    });

    expect(result.current.props).toStrictEqual({
      prop1: "name",
      prop2: true,
      prop3: 5,
    });

    expect(result.current.styleProps).toStrictEqual({
      color: "blue",
      width: 1,
    });
  });
});
