const Palindromes = (words) => {
    return words.filter((word) => {
     word.split("").reverse().join("") === word;
     });
   };
   
   console.log(Palindromes(["hii","mom"]));