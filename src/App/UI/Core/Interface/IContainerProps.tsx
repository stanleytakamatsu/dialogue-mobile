import { ScreenProps } from 'react-navigation';

import { IContainerService } from '../../../Core/Container/IContainerService';

interface IContainerProps extends ScreenProps {
  container: IContainerService;
}

const IContainerProps = Symbol.for('IContainerProps');

export { IContainerProps };
