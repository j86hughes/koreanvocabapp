import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
		}
	}

	componentDidMount() {
		const { updateCurrentWord } = this.props;
		this.state.vocabList.length > 0 && updateCurrentWord(this.state.vocabList[0]);
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
		const { updateCurrentWord, mode } = this.props;
		const newWordObj = this.state.vocabList[this.state.currentWordIndex + 1];
		updateCurrentWord(newWordObj, mode);
	}

	correctAnswer() {
		const { currentWord, answerBox, mode } = this.props;
		if (
			currentWord.english.indexOf(answerBox.trim()) > -1 &&
			mode === CONSTANTS.KOREAN
		) {
			return true;
		}
		if (
			currentWord.korean.indexOf(answerBox.trim()) > -1 &&
			mode === CONSTANTS.ENGLISH
		) {
			return true;
		}
		return false;
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
			updateTextBox,
		} = this.props;
		if (this.state.currentWordIndex < this.state.listLength - 1) {
			this.updateWordProgressHandler();
			updateAnswerAttempt(CONSTANTS.NONE);
			toggleContinue();
			updateTextBox('');
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
			updateTextBox,
		} = this.props;
		if (this.state.currentWordIndex < this.state.listLength - 1) {
			this.updateWordProgressHandler();
			updateIncorrectWordList(currentWord);
			totalPlusOne();
			updateTextBox('');
		} else {
			history.push("/summary");
		}
	}

	returnOtherMeanings() {
		const { currentWord, mode } = this.props;
		const matchingWordObjs = this.state.vocabList.filter(obj => {
			if(currentWord[mode] !== undefined && obj.id !== currentWord.id) {
				for(let i = 0; i < obj[mode].length; i++) {
					for(let it = 0; it < currentWord[mode].length; it++) {
						return obj[mode][i] === currentWord[mode][it];
					}
				}
			}
			return null;
		})
		return matchingWordObjs.map(obj => {
			if(mode === 'english') {
				return obj.korean[0];
			} else {
				return obj.english[0];
			}
		});
	};

	OneRightThreeWrong() {
		const { currentWord } = this.props;
		const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
		const getRandWord = () => getRandomInt(this.state.listLength);
		let wrongList = [];

		let i = 0;
		while(i < 3) {
			let yah = getRandWord();
			if(this.state.vocabList[yah] !== undefined && this.state.vocabList[yah].id !== currentWord.id && !wrongList.includes(this.state.vocabList[yah])) {
				wrongList.push(this.state.vocabList[yah]);
				i++;
			}
		}

		if(currentWord !== undefined) {
			wrongList.push(currentWord);
		}
		
		return shuffleArray(wrongList);
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
			answerBox,
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
					OneRightThreeWrong={() => this.OneRightThreeWrong()}
				  updateTextBox={(e) => updateTextBox(e)}
				  showContinue={showContinue}
					onCheckClickHandler={() => this.onCheckClickHandler()}
					onContinueHandler={() => this.onContinueHandler()}
					onSkipHandler={() => this.onSkipHandler()}
					answerBox={answerBox}
				/>
			</div>
		)
	}
}

MainBit.propTypes = {
	updateCurrentWord: PropTypes.func.isRequired,
	mode: PropTypes.string.isRequired,
	currentWord: PropTypes.object.isRequired,
	answerBox: PropTypes.string.isRequired,
	scorePlusOne: PropTypes.func.isRequired,
	toggleContinue: PropTypes.func.isRequired,
	updateAnswerAttempt: PropTypes.func.isRequired,
	totalPlusOne: PropTypes.func.isRequired,
	updateCorrectWordList: PropTypes.func.isRequired,
	updateIncorrectWordList: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	updateTextBox: PropTypes.func.isRequired,
}

export default withStyles(styles)(MainBit);
