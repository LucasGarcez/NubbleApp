import {createContext, useContext, useState} from 'react';

interface Toast {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
}

interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hiddenToast: () => void;
}

const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hiddenToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hiddenToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hiddenToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastService {
  const {toast, hiddenToast, showToast} = useContext(ToastContext);

  return {
    toast,
    showToast,
    hiddenToast,
  };
}
