

const myParagraph = document.getElementById("myParagraph").innerHTML;


const newParagraph = myParagraph.replace(/[,:;.\n]/g, '');
const newArr = newParagraph.split(/\s+/);

const count = {};
newArr.forEach(word => {
    count[word] = (count[word] || 0) + 1;
});


const sortedWords = Object.entries(count).sort((a, b) => b[1] - a[1]);
const filteredWords = sortedWords.filter(n => n[0] !== '');
const topWords = filteredWords.slice(0, 5).map(entry => entry[0].toLowerCase());


let highlightedText = myParagraph;

topWords.forEach(word => {
    const regex = new RegExp(`\\b(${word}|${word.charAt(0).toUpperCase() + word.slice(1)})\\b`, 'g');
    highlightedText = highlightedText.replace(regex, match => {
        const isCapitalized = match[0] === match[0].toUpperCase();
        const spanClass = isCapitalized ? 'highlight underline' : 'highlight';
        return `<span class="${spanClass}">${match}</span>`;
    });
});

document.getElementById("myParagraph").innerHTML = highlightedText;
