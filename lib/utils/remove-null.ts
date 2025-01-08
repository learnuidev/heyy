// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeNull = (obj: any) => {
  return Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(obj).filter(([key, v]) => {
      if (typeof v === "boolean") {
        return true;
      }
      return Boolean(v);
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as any;
};
