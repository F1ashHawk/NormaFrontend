import {toast} from 'react-toastify';

// export const getCapitalizedWord = (word: string) => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// };

// export const throwResponseError = (error: any) => {
//   if ('data' in error && error.data && 'error' in error.data && error.data.error) {
//     throwNewToastError(error.data.error);
//   }
//
//   if ('data' in error && error.data && 'status' in error.data && error.data.status) {
//     throwNewToastError(error.data.status);
//   }
// };

export const throwNewToastError = (errorText: string) => {
  toast.error(errorText, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const throwNewToastSuccess = (successText: string) => {
  toast.success(successText, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};