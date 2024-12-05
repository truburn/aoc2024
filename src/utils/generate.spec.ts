import { generateUUID } from "@utils/generate";

describe("generateUUID", () => {
  it("Creates a default UUID", () => {
    const id1 = generateUUID();
    const id2 = generateUUID();
    expect(id1).not.toEqual(id2);
    const idParts = id1.split("-");
    expect(idParts.length).toEqual(5);
    expect(idParts[0]).toEqual("uuid");
    expect(idParts[1].length).toEqual(4);
    expect(idParts[2].length).toEqual(6);
    expect(idParts[3].length).toEqual(6);
    expect(idParts[4].length).toEqual(4);
  });

  it("Creates a UUID based on parameters", () => {
    const id = generateUUID({
      prefix: "prefix",
      suffix: "suffix",
      lengths: [8, 3],
    });
    const idParts = id.split("-");
    expect(idParts.length).toEqual(4);
    expect(idParts[0]).toEqual("prefix");
    expect(idParts[1].length).toEqual(8);
    expect(idParts[2].length).toEqual(3);
    expect(idParts[3]).toEqual("suffix");
  });
});
