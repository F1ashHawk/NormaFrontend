import {
  ERROR_INCORRECT_EMAIL, ERROR_INCORRECT_PASSWORD_FIELD, ERROR_INCORRECT_RETRY_PASSWORD_FIELD, ERROR_NO_VALID_PASSWORD
} from '../Constants/AuthErrorsList';

export const validateEmail = (email: string): boolean => {
  const pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
  // Проверка соответствия паттерну
  return pattern.test(email);
};

export const validateNewPassword = (password: string): boolean => {
    // Проверка валидности нового пароля
    if (password.length < 8) {
      return false;
    }

    if (password.length > 50) {
      return false;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    return !(!hasUppercase || !hasDigit);
  }
;

export const validationAuthForm = (username: string, password: string, authMode: 'singIn' | 'singUp', retryPassword?: string) => {
  const errors: string[] = [];

  if (!username.length || !validateEmail(username)) {
    errors.push(ERROR_INCORRECT_EMAIL);
  }

  if (!password.length) {
    errors.push(ERROR_INCORRECT_PASSWORD_FIELD);
  }

  if (authMode === 'singUp') {
    if (password && password.length < 8) {
      errors.push(ERROR_NO_VALID_PASSWORD);
    }

    if (retryPassword !== password || !retryPassword.length) {
      errors.push(ERROR_INCORRECT_RETRY_PASSWORD_FIELD);
    }
  }

  return errors;
};