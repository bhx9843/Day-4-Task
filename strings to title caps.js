const str = "shakira-hips dont lie";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);