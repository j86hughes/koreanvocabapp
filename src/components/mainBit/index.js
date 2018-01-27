import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../redux/actions.js';
import wordsArray from '../greetings';
import styles from './styles';

class MainBit extends Component {
	render() {
		const {
			answerBox,
			currentWord,
			updateTextBox,
			updateCurrentWord,
			scorePlusOne,
			totalPlusOne,
			mode,
			score,
			total,
			changeMode,
			showContinue,
			toggleContinueAction,
		} = this.props;
		const kToELabel = '한국어 => English';
		const eToKLabel = 'English => 한국어';
		const ENGLISH = 'english';
		const KOREAN = 'korean';

		const randomWordObjGen = () => {
			return wordsArray[Math.floor(Math.random() * wordsArray.length)];
		};

		const onCheckClickHandler = () => {
			if (mode == KOREAN) {
				if (answerBox === currentWord.english) {
					scorePlusOne();
					toggleContinueAction();
				}
			} else {
				if(mode == ENGLISH) {
					if (answerBox === currentWord.korean) {
						scorePlusOne();
						toggleContinueAction();
					}
				}
			}
			totalPlusOne();
		};

		const onModeClickHandler = () => {
			mode == KOREAN ? changeMode(ENGLISH) : changeMode(KOREAN)
		};

		return (
			<div style={styles.app}>
				<header style={styles.appHeader}>
					<h3 style={styles.scoreText}>
						SCORE: {score} out of {total}
					</h3>
					<h1>{mode === KOREAN ? currentWord.korean : currentWord.english}</h1>
					<div>
						{showContinue && <h3 style={{color: 'lightGreen'}}>Correct!</h3>}
					</div>
				</header>
				<div style={styles.answerSectionContainer}>

					<input
						type="text"
						style={styles.input}
						onChange={e => {
							updateTextBox(e.target.value);
						}}
					/>
					{!showContinue && <button
						style={styles.checkButton}
						onClick={() => onCheckClickHandler()}
					>
						check
					</button>
					}
					{showContinue &&
						<button
							style={styles.checkButton}
							onClick={() => {
							toggleContinueAction();
							updateCurrentWord(randomWordObjGen());
						}
						}>
							Continue
						</button>
					}
					<button
						style={styles.changeModeButton}
						onClick={() => onModeClickHandler()}
					>
						{mode === 'korean' ? kToELabel : eToKLabel}
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		answerBox: state.answerBox,
		currentWord: state.currentWord,
		score: state.score,
		total: state.total,
		mode: state.mode,
		showContinue: state.showContinue,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateTextBox: text => dispatch(ACTIONS.updateTextBox(text)),
		updateCurrentWord: wordObj => dispatch(ACTIONS.updateCurrentWord(wordObj)),
		scorePlusOne: () => dispatch(ACTIONS.scorePlusOne()),
		totalPlusOne: () => dispatch(ACTIONS.totalPlusOne()),
		changeMode: mode => dispatch(ACTIONS.changeMode(mode)),
		toggleContinueAction: () => dispatch(ACTIONS.showContinue()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBit);
