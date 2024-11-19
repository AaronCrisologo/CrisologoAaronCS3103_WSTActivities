const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');
const sentenceCountDisplay = document.getElementById('sentenceCount');

textInput.addEventListener('input', () => {
    const text = textInput.value;

    // Count words
    const words = text.split(/\s+/).filter(word => word.trim() !== '');
    wordCountDisplay.textContent = words.length;

    // Count sentences
    let sentences = 0;
    if (text.trim() !== '') {
        sentences = text.split(/[.!?]\s/).length;
    }
    sentenceCountDisplay.textContent = sentences;
});