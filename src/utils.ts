export function createProp(
  map: Record<any, any>,
  processor: (value: string, key: string) => Record<string, string>,
) {
  const keys = Object.keys(map);
  const styleProp: Record<string, Record<string, string>> = {};

  keys.forEach((key) => {
    styleProp[key] = processor(map[key], key);
  });

  return styleProp;
}
