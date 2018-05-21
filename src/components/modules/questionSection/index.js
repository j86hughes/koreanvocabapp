import React, { Component } from 'react';
import Header from './header';
import AnswerArea from './answerArea';
import shuffleArray from '../shuffleArray';
import * as CONSTANTS from './constants';
import { withStyles } from 'material-ui/styles';
import styles from './styles';
// import correctSound from '../../../sounds/correctSound1.mp3';
// import incorrectSound from '../../../sounds/incorrectSound.mp3';

class MainBit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vocabList: shuffleArray(this.props.vocabList),
			listLength: this.props.vocabList.length,
			currentWordIndex: 0,
			progressPercentage: 0,
		};
	}

	componentDidMount() {
		this.props.updateCurrentWord(this.state.vocabList[0]);
	}

	updateWordProgressHandler() {
		this.updateProgressBar();
		this.updateWordHandler();
		this.setState({ currentWordIndex: this.state.currentWordIndex + 1 });
	}

	updateProgressBar() {
		const newProgressPercntage =
			(this.state.currentWordIndex + 1) / this.state.listLength * 100;
		this.setState({ progressPercentage: newProgressPercntage });
	}

	updateWordHandler() {
		const { updateCurrentWord } = this.props;
		const newWordObj = this.state.vocabList[this.state.currentWordIndex + 1];
		updateCurrentWord(newWordObj);
	}

	correctAnswer() {
		const { currentWord, answerBox, mode } = this.props;

		if (
			currentWord.english.indexOf(answerBox) > -1 &&
			mode === CONSTANTS.KOREAN
		) {
			return true;
		}
		if (
			currentWord.korean.indexOf(answerBox) > -1 &&
			mode === CONSTANTS.ENGLISH
		) {
			return true;
		}

		return false;
	}

	onModeClickHandler() {
		const { mode, changeMode } = this.props;
		mode === CONSTANTS.KOREAN
			? changeMode(CONSTANTS.ENGLISH)
			: changeMode(CONSTANTS.KOREAN);
	}

	onCheckClickHandler() {
		const {
			scorePlusOne,
			toggleContinue,
			updateAnswerAttempt,
			totalPlusOne,
			updateCorrectWordList,
			updateIncorrectWordList,
			currentWord,
		} = this.props;
		if (this.correctAnswer()) {
			scorePlusOne();
			updateAnswerAttempt(CONSTANTS.CORRECT);
			updateCorrectWordList(currentWord);
		} else {
			updateAnswerAttempt(CONSTANTS.INCORRECT);
			updateIncorrectWordList(currentWord);
		}
		totalPlusOne();
		toggleContinue();
	}

	onContinueHandler() {
		const {
			toggleContinue,
			updateAnswerAttempt,
			history,
		} = this.props;
		if (this.state.currentWordIndex < this.state.listLength - 1) {
			this.updateWordProgressHandler();
			updateAnswerAttempt(CONSTANTS.NONE);
			toggleContinue();
		} else {
			history.push("/summary");
		}
	}

	onSkipHandler() {
		const {
			totalPlusOne,
			updateIncorrectWordList,
			currentWord,
			history,
		} = this.props;
		if (this.state.currentWordIndex < this.state.listLength - 1) {
			this.updateWordProgressHandler();
			updateIncorrectWordList(currentWord);
			totalPlusOne();
		} else {
			history.push("/summary");
		}
	}

	returnOtherMeanings() {
		const { currentWord } = this.props;
		const matchingWordObjs = this.state.vocabList.filter(obj => {
			if(obj.hasOwnProperty('multi')) {
				return obj.korean[0] === currentWord.korean[0] && obj.multi !== currentWord.multi
			}
			return null;
		})
		return matchingWordObjs.map(obj => obj.english[0]);
	}

	render() {
		const {
			currentWord,
			updateTextBox,
			mode,
			score,
			totalWords,
			showContinue,
			answerAttempt,
		} = this.props;

		return (
			<div style={styles.app}>
				<Header
					score={score}
					totalWords={totalWords}
					mode={mode}
					currentWord={currentWord}
					answerAttempt={answerAttempt}
					progressPercentage={this.state.progressPercentage}
					returnOtherMeanings={() => this.returnOtherMeanings()}
				/>
				<AnswerArea
					currentWord={currentWord}
				  updateTextBox={(e) => updateTextBox(e)}
				  mode={mode}
				  score={score}
				  totalWords={totalWords}
				  showContinue={showContinue}
				  answerAttempt={answerAttempt}
					onCheckClickHandler={() => this.onCheckClickHandler()}
					onContinueHandler={() => this.onContinueHandler()}
				/>
					{/* <Button
						style={styles.changeModeButton}
						onClick={() => this.onModeClickHandler()}
					>
						{mode === CONSTANTS.KOREAN ? (
							CONSTANTS.KTOELABEL
						) : (
							CONSTANTS.ETOKLABEL
						)}
					</Button> */}
			</div>
		);
	}
}

export default withStyles(styles)(MainBit);
