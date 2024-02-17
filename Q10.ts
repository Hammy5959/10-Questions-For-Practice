`Return the number of vowels in a string`;

let vowels: Array<string> = ["a", "e", "i", "o", "u"];
function countVowels(str: string) {
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }
  return count
}
console.log(countVowels("Hamid"))