import { connector } from '../../utils/connector';
import { STORE_NAME } from './constants';
import questionPageUi from '../../../components/modules/questionSection';
import homePageUi from '../../../components/modules/homePage';
import summaryPageUi from '../../../components/modules/summarySection';

export const QuestionPage = connector(STORE_NAME)(questionPageUi);

export const HomePage = connector(STORE_NAME)(homePageUi);

export const SummaryPage = connector(STORE_NAME)(summaryPageUi);
