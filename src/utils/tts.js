// src/utils/tts.js

// This function will speak the given text.
export const speak = (text) => {
  // Cancel any previous speech that might be ongoing.
  window.speechSynthesis.cancel();

  // Create a new speech synthesis utterance instance.
  const utterance = new SpeechSynthesisUtterance(text);

  // Set properties for the speech. You can customize these.
  utterance.lang = "en-US"; // Language
  utterance.rate = 1; // Speed of speech
  utterance.pitch = 1; // Pitch of the voice
  utterance.volume = 1; // Volume

  // Use the browser's speech synthesis to speak the text.
  window.speechSynthesis.speak(utterance);
};
