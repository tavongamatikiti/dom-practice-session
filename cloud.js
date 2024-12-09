const myParagraph = document.getElementById("myParagraph").textContent;
// console.log(myParagraph)
const newParagraph = myParagraph.toLowerCase().replace(/[,:;.\n]/g, '')
// console.log(newParagraph)
const newWords = newParagraph.trim().split(' ')
// console.log(newWords);
const wordCount = {}

newWords.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1
})
// console.log(wordCount);

const sortedWords = Object.entries(wordCount).sort((a,b) => b[1] - a[1])
// console.log(sortedWords);

const filteredWords = sortedWords.filter(n => n[0] !== "")
console.log(filteredWords);


const topWords = sortedWords.slice(0, 12);

//  console.log(topWords);
    const wordCloud = document.getElementById('myWordCloud');
    topWords.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word[0];
        span.style.fontSize = `${64 - index * 4}px`;
        wordCloud.appendChild(span);
        wordCloud.appendChild(document.createTextNode(' '));
    });

