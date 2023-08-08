import {ToastService} from './toastTypes';
import {useToastContext} from './useToastContext';

export function useToast(): ToastService {
  return useToastContext();
}
