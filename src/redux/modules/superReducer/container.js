import { connector } from '../../utils/connector';
import { STORE_NAME } from './constants';
import questionPageUi from '../../../components/modules/questionSection';

export default connector(STORE_NAME)(questionPageUi);
