//SET ALARM//
function setAlarm(employed, vacationing) {
    if (employed && !vacationing) {
        return true;
    } else {
        return false;
    }
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, false)); 
console.log(setAlarm(false, true)); 
console.log(setAlarm(true, false)); 

//COUNT ODD NUMBERS//   
function oddNumberCount(num) {
    if (num < 1)
        return 0;

    let count = 0;

    for (let i = 1; i < num; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }
    return count;
}

const num1 = 7;
const num2 = 16;

console.log(oddNumberCount(num1));
// => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
console.log(oddNumberCount(num2));
// => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)

//DESEMVOWELING TROLLS
function trollsBeGone(sentence) {
    const vowels = "aeiouAEIOU";
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i])) {
        newSentence += sentence[i];
      }
    }
    return newSentence;
  }  

console.log(trollsBeGone("This website is for losers LOL")); // => returns "Ths wbst s fr lsrs LL"


//BANK ACCOUNT SUMMARY
const bankInfo = {
    savings: 600,
    checking: 800,
    moneyMarket: 200,
    creditCard: -2000
  };
  
  function bankAccountSummary(bankInfo) {
    const total = Object.values(bankInfo).reduce((acc, val) => acc + val);
  
    return total;
  }
  
console.log(bankAccountSummary(bankInfo)); 

function inTheRed(bankTotal) {
    return bankTotal < 0;
}
const bankTotal = bankAccountSummary(bankInfo);
console.log(inTheRed(bankTotal));