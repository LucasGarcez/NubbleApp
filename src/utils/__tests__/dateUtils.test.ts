import {dateUtils} from '@utils';
import {sub, add, formatISO, Duration} from 'date-fns';

const MOCKED_NOW = 1696573824333;

function getDateISO(duration: Duration, op?: 'sub' | 'add'): string {
  op = op || 'sub';
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formatRelative(timeISO);
}

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    test('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDateISO({seconds: 30})).toBe('30 s');
    });
    test('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDateISO({minutes: 20})).toBe('20 m');
    });
    test('should be displayed in hours if less than 1 day ago', () => {
      expect(getDateISO({hours: 15})).toBe('15 h');
    });

    test('should be displayed in days if less than 7 day ago', () => {
      expect(getDateISO({days: 5})).toBe('5 d');
    });
    test('should be displayed in weeks if less than 4 weeks ago', () => {
      expect(getDateISO({weeks: 3, hours: 2})).toBe('3 sem');
    });

    test('should be displayed in months if less than 12 months ago', () => {
      expect(getDateISO({months: 10})).toBe('10 mes');
    });
    test('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      expect(getDateISO({months: 13})).toBe('06/09/2022');
    });
    test('should be displayed in dd/MM/yyyy if future date', () => {
      expect(getDateISO({days: 2}, 'add')).toBe('08/10/2023');
    });
  });
});
