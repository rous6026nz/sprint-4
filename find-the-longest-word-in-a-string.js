function findLongestWord(str) {
  var arr = str.split(/\s/g);

  var lenArr = arr.map(function(val) {
    return val.length;
  });
  
  lenArr.sort(function(a,b) {
    return b-a;
  });
  
  return lenArr[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");