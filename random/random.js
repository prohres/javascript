
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
	if (typeof names !== 'object') {
		return newArrayNames = [];
	}

	var newArrayNames = [];

	newArrayNames = names.sort(function(){return 0.5 - Math.random()});	
	
	return newArrayNames;
}
// ["Андрій", "Марія", "Василь", "Петро","Джон", "Микола", "Ігор", "Леся"]

