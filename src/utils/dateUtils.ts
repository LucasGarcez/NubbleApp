import {parseISO, differenceInSeconds, format} from 'date-fns';

function formatRelative(dateISO: string): string {
  const date = parseISO(dateISO);
  const now = Date.now();

  // TODO: handle future dates
  const diffInSeconds = differenceInSeconds(now, date);

  if (diffInSeconds < 0) {
    return format(date, 'dd/MM/yyyy');
  }

  if (diffInSeconds < 60) {
    return `${diffInSeconds} s`;
  }

  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} m`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} h`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} d`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} sem`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} mes`;
  }

  return format(date, 'dd/MM/yyyy');
}

export const dateUtils = {formatRelative};
