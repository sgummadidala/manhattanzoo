var datastructures = require('./app/source/datastructures');

console.log(datastructures.findMaxConsecutiveRepeatingCharacter('aaaaaaaaaaaaaaaabcccccccccccdddccccccccccccdbbbbbbb'));

var result = datastructures.mergeSortedArrays([1,3,15,17],[2,4,6,16],0,0);

result.map(item=>{
	console.log(" "+item);
})
