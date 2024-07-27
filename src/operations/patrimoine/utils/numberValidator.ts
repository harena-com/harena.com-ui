export const numberValidator = (value: unknown): string | undefined => {
  if (!isNaN(Number(value)) || !isFinite(Number(value))) {
    return "Value should be a valid number";
  }
  return undefined;
};
