document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const wordCount = document.getElementById('word-count');
    const charCount = document.getElementById('char-count');
    const charNoSpaceCount = document.getElementById('char-no-space-count');
    const paragraphCount = document.getElementById('paragraph-count');

    function updateCounts() {
        const text = textInput.value;
        
        // Word count
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = words.length;

        // Character count
        charCount.textContent = text.length;

        // Character count (no spaces)
        charNoSpaceCount.textContent = text.replace(/\s+/g, '').length;

        // Paragraph count
        const paragraphs = text.split('\n\n').filter(para => para.trim().length > 0);
        paragraphCount.textContent = paragraphs.length;
    }

    textInput.addEventListener('input', updateCounts);
    updateCounts(); // Initial count
}));