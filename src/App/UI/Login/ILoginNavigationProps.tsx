import { INavigationContainerProps } from '../Common/Interface/INavigationContainerProps';

interface ILoginNavigationProps extends INavigationContainerProps {}

const ILoginNavigationProps = Symbol.for('ILoginNavigationProps');

export { ILoginNavigationProps };
