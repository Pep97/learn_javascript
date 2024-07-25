let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}; // this how you have new voices

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
})  // this is how you add and select different voices

document.querySelector('button').addEventListener('click' , () => {
    speech.text = document.querySelector('textarea').value;

    window.speechSynthesis.speak(speech);
}); //this is to read the button and run the code.