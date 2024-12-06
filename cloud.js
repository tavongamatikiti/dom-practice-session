const myParagraph = document.getElementById("myParagraph").textContent;
// console.log(myParagraph)
const newParagraph = myParagraph.replace(/[,:;.\n]/g, '')
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

// const 
