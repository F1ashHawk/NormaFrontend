import React from 'react';

export interface IAuthFormProps {
  validationErrors: string[];
  username: string;
  password: string;
  handleSetEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isVisible: boolean;
  handleSetVisible: (event: React.MouseEvent<HTMLButtonElement>) => void;
  retryPassword?: string;
  handleSetRetryPassword?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}