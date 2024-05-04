import {
  UseFormWatch,
  UseFormGetFieldState,
  FieldValues,
  Path,
} from 'react-hook-form';

import {useAsyncValidationQuery} from './useAsyncValidationQuery';

type Props<FormSchema extends FieldValues> = {
  fieldName: Path<FormSchema>;
  watch: UseFormWatch<FormSchema>;
  getFieldState: UseFormGetFieldState<FormSchema>;
  asyncValidateFunc: (value: string) => Promise<boolean>;
  errorMessage?: string;
};

export function useAsyncValidation<FormSchema extends FieldValues>({
  watch,
  getFieldState,
  asyncValidateFunc,
  fieldName,
  errorMessage = 'inválido',
}: Props<FormSchema>): ReturnValues {
  const field = watch(fieldName);
  const fieldState = getFieldState(fieldName);
  const fieldIsValid = !fieldState.invalid && fieldState.isDirty;

  const fieldQuery = useAsyncValidationQuery({
    value: field,
    enabled: fieldIsValid,
    fieldName,
    asyncValidateFunc,
  });

  return {
    errorMessage: fieldQuery.isValid === false ? errorMessage : undefined,
    notReady: fieldQuery.isFetching || fieldQuery.isValid === undefined,
    isFetching: fieldQuery.isFetching,
  };
}

type ReturnValues = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};
