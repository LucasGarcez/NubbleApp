function capitalizeFirstLetter(value: string): string {
  return value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    .trim();
}

function getImageExtension(imagePath: string): string | null {
  const index = imagePath.lastIndexOf('.');
  if (index > -1) {
    const extension = imagePath.substring(index + 1);

    return extension;
  }
  return null;
}

export const stringUtils = {
  capitalizeFirstLetter,
  getImageExtension,
};
