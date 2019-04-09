import { IContainerService } from '../../../Core/Container/IContainerService';
import { ScreenProps } from 'react-navigation';

interface IContainerProps extends ScreenProps {
  container: IContainerService;
}

const IContainerProps = Symbol.for('IContainerProps');

export { IContainerProps };
