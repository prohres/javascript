
  /*
 ****	
*    * Написати функцію для випадкового перемішування даних в масиві
*
 **** 	
     * IFc-086
*    * Solovii Serhii
 ****
  */

function shuffleArrays(names) {
	
    var names = String(prompt('Please enter the names separated by commas:'));
    var arrayNames = names.split(', ');

	var newArrayNames = [];
	newArrayNames = arrayNames.sort(function(){return 0.5 - Math.random()});	
	console.log(newArrayNames);
	return newArrayNames;
}
shuffleArrays();

// Андрій, Марія, Василь, Петро, Микола, Євген, Ігор
