function removeYWords(arr) {
  let words = [];
  for(let i = 0; i < arr.length; i++) {
    if(!arr[i].toLowerCase().includes('y')){
      words.push(`Is it ${arr[i]}?`);
    }
  }
  return words;
}

module.exports = removeYWords;
