function capitalizeFirstLetter(value: string): string {
  return value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    .trim();
}

export const stringUtils = {
  capitalizeFirstLetter,
};
