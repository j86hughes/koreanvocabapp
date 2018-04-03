
export default {
  app: {
    textAlign: 'center',
    fontFamily: 'arial',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  appHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#222',
    padding: 20,
    minHeight: '50%',
    color: 'white',
  },
  appTitle: {
    fontSize: 3,
  },
  appIntro: {
    fontSize: 'large',
  },
  answerSectionContainer: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f7ff',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  correctAnswer: {
    color: 'lightGreen',
    fontSize: '50pt',
  },
  incorrectAnswer: {
    color: 'red',
    fontSize: '50pt',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    width: '100%',
    marginTop: 50,
    height: 50,
    fontSize: 20,
    textAlign: 'center',
  },
  scoreText: {
    display: 'flex',
    color: 'white',
  },
  changeModeButton: {
    marginTop: 25,
  },
  checkButton: {
    width: 100,
    marginTop: 25,
    fontSize: 15,
    backgroundColor: 'blue',
    color: 'white',
  },
  continueButton: {
    width: 100,
    marginTop: 25,
    fontSize: 15,
    backgroundColor: 'lightGreen',
    color: 'black',
  },
  skipButton: {
    width: 100,
    marginTop: 25,
    fontSize: 15,
    backgroundColor: '#eaab00',
    color: 'black',
  },
  skipButtonDisabled: {
    width: 100,
    marginTop: 25,
    fontSize: 15,
    backgroundColor: 'gray',
    color: 'darkGray',
  },
  vocabBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
