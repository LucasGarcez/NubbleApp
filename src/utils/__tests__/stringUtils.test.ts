import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      expect(stringUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('maria')).toBe('Maria');
      expect(stringUtils.capitalizeFirstLetter('MARIA')).toBe('Maria');
      expect(stringUtils.capitalizeFirstLetter('ana maria')).toBe('Ana Maria');
    });

    it('should remove leading/trailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter(' Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('Ana maria ')).toBe('Ana Maria');
    });
  });

  describe('stringUtils.getImageExtension', () => {
    it('should extract jpg extension', () => {
      const result = stringUtils.getImageExtension('/path/to/image.jpg');
      expect(result).toBe('jpg');
    });

    it('should extract png extension', () => {
      const result = stringUtils.getImageExtension('/path/to/file.png');
      expect(result).toBe('png');
    });

    it('handles paths without an extension', () => {
      const result = stringUtils.getImageExtension('/path/to/file');
      expect(result).toBe(null);
    });
  });
});
