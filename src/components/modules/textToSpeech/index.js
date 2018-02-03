
const textToSpeech = (text) => {
  var msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'ko-KR';
  window.speechSynthesis.speak(msg);
};

export default textToSpeech;
