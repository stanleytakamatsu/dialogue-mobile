import { INavigationContainerProps } from '../Core/Interface/INavigationContainerProps';

interface ILoginNavigationProps extends INavigationContainerProps {
  onChangePasswordInput: string;
}

const ILoginNavigationProps = Symbol.for('ILoginNavigationProps');

export { ILoginNavigationProps };
