const SpeechSDK = require('microsoft-cognitiveservices-speech-sdk');

class VoiceNavigation {
  constructor(speechKey, speechRegion) {
    this.speechConfig = SpeechSDK.SpeechConfig.fromSubscription(speechKey, speechRegion);
    this.speechConfig.speechRecognitionLanguage = "fr-CH";
    this.recognizer = new SpeechSDK.SpeechRecognizer(this.speechConfig);
    
    this.commands = {
      'afficher les performances du canton de Vaud': () => this.navigateToBookmark('vaud-performance'),
      'comparer les vendeurs': () => this.navigateToBookmark('compare-vendeurs'),
      'simuler le budget': () => this.navigateToBookmark('simulation-budget'),
      'retour à l\'accueil': () => this.navigateToBookmark('accueil')
    };
  }

  start() {
    this.recognizer.recognized = (s, e) => {
      const command = e.result.text.toLowerCase();
      if (this.commands[command]) {
        this.commands[command]();
        this.speak(`Navigation vers ${command} confirmée.`);
      }
    };
    this.recognizer.startContinuousRecognitionAsync();
    document.body.classList.add('voice-active');
  }

  navigateToBookmark(bookmarkName) {
    window.powerbi.getEmbeddedObject().bookmarksManager.applyState(bookmarkName);
  }

  speak(text) {
    const synthesizer = new SpeechSDK.SpeechSynthesizer(this.speechConfig);
    synthesizer.speakTextAsync(text);
  }
}
