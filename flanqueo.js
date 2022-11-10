

// Transforms decimal to binary
function decimalToBin(dec) {
  return (dec >>> 0).toString(2);
}

// Get the biggest group of zeros inside ones ohterwise return 0
// input: decimal number
//
//returns: number of flanqued zeros
function getFlanquedZeros(positiveNumber) {
	
  if(positiveNumber < 1 || positiveNumber > 2147483647)
  {
    return null;
  }
  
  let binString = decimalToBin(positiveNumber).toString().split('');
  let digits = binString.map(Number);  
  
  let groupZeros = 0;
  let maxZeros = 0;
  for(let i = 0 ; i < digits.length ; i++)
  {
    
    
    if(digits[i] == 0){ groupZeros++;}
    if(digits[i] === 1 && digits[i - 1] === 0)
    {
      if(maxZeros < groupZeros){ maxZeros = groupZeros}
      groupZeros = 0;
    }
  }
  return maxZeros

}

console.log(getFlanquedZeros(9));            //Expected 2
console.log(getFlanquedZeros(545));          //Expected 4
console.log(getFlanquedZeros(7));            //Expected 0
console.log(getFlanquedZeros(16));           //Expected 0
console.log(getFlanquedZeros(2147483648));   //Expected null
