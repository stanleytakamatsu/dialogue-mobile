import * as React from 'react';

interface IView {
  attach(controller: React.Component);
  render(): React.ReactNode;
}

export { IView };
