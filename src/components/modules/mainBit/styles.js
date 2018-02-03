
export default {
  app: {
    textAlign: 'center',
    fontFamily: 'arial',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: 'red',
  },
  appHeader: {
    backgroundColor: '#222',
    padding: 20,
    minHeight: 220,
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
    backgroundColor: 'gray',
  },
  input: {
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
    backgroundColor: 'yellow',
    color: 'black',
  },
}
