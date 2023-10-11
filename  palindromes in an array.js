let arr = ["for", "mom", "book","console","naveen","java","radar","pop","eee"];
let palindromes = arr.filter(w => {
  let len = w.length;
  for (let i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(palindromes);