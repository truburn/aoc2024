/**
 * Generate a random UUID
 */
export interface RandomUUIDParams {
  prefix?: string;
  suffix?: string;
  lengths?: number[];
}

export function generateUUID(params: RandomUUIDParams = {}): string {
  const { prefix = "uuid", suffix, lengths = [4, 6, 6, 4] } = params;

  const idParts: string[] = [prefix];

  lengths.forEach((val) => {
    const randomString = Math.random()
      .toString(16)
      .slice(2, val + 2);
    idParts.push(randomString);
  });

  if (suffix) idParts.push(suffix);

  return idParts.join("-");
}
