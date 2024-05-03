import axios from 'axios';

type ErrorWithMessage = {
  message: string;
};
function tryAxiosError(error: unknown): string | null {
  if (axios.isAxiosError(error)) {
    const response = error.response;

    // Check if the response has a message property
    if (response && response.data && response.data.message) {
      return response.data.message;
    }

    // Check if the response and the data.errors array exists
    if (response && response.data && Array.isArray(response.data.errors)) {
      // Map through the errors array and join messages into a single string
      return response.data.errors
        .map((err: {message?: string}) => err.message || 'Unknown error')
        .join(', ');
    }
  }

  return null;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) {
    return maybeError;
  }

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

function getErrorMessage(error: unknown) {
  const axiosMessage = tryAxiosError(error);
  if (axiosMessage) {
    return axiosMessage;
  }
  return toErrorWithMessage(error).message;
}

export const errorUtils = {getErrorMessage};
