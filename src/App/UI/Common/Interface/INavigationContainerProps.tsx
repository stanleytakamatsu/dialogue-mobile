import { IContainerProps } from './IContainerProps';
import { NavigationNavigatorProps } from 'react-navigation';

interface INavigationContainerProps extends NavigationNavigatorProps {
  screenProps: IContainerProps;
}

const INavigationContainerProps = Symbol.for('INavigationContainerProps');

export { INavigationContainerProps };
