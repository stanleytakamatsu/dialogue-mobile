import { NavigationNavigatorProps } from 'react-navigation';

import { IContainerProps } from './IContainerProps';

interface INavigationContainerProps extends NavigationNavigatorProps {
  screenProps: IContainerProps;
}

const INavigationContainerProps = Symbol.for('INavigationContainerProps');

export { INavigationContainerProps };
