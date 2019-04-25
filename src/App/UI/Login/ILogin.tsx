import * as React from 'react';

interface ILogin<Props, State> extends React.Component<Props, State> {
  login(): Promise<void>;
  onChangeUsernameInput: (value) => void;
  onChangePasswordInput: (value) => void;
}

export { ILogin };
