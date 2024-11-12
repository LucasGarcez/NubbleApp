import {
  UseFormWatch,
  UseFormGetFieldState,
  FieldValues,
  Path,
} from 'react-hook-form';

import {useValidationQuery} from './useValidationQuery';

type Props<FormSchema extends FieldValues> = {
  fieldName: Path<FormSchema>;
  watch: UseFormWatch<FormSchema>;
  getFieldState: UseFormGetFieldState<FormSchema>;
  isAvailableFunc: (value: string) => Promise<boolean>;
  errorMessage?: string;
};

type ReturnValues = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};

export function useAsyncValidation<FormSchema extends FieldValues>({
  watch,
  getFieldState,
  fieldName,
  isAvailableFunc,
  errorMessage = 'indisponível',
}: Props<FormSchema>): ReturnValues {
  const field = watch(fieldName);
  const fieldState = getFieldState(fieldName);
  const fieldIsValid = !fieldState.invalid && fieldState.isDirty;
  const query = useValidationQuery({
    value: field,
    enabled: fieldIsValid,
    isAvailableFunc,
    fieldName,
  });

  return {
    errorMessage: query.isUnavailable ? errorMessage : undefined,
    notReady: query.isFetching || query.isUnavailable,
    isFetching: query.isFetching,
  };
}
