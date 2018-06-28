
  /*
 ****	
*    * Написати функцію для підрахунку кількості парних і непарних цифр в деякому числі
*
 **** 	
     * IFc-086
*    * Solovii Serhii
 ****
  */	

function countOddEvenNumbers(n) {
	do
	{
    	var n = Number(prompt('Please give me an positive number:'));
	}
	while (n < 0);     
	
	var result = {odd: 0, even: 0};

	var sn = n.toString();

	for (var i = 0; i < sn.length; i++) {
		if (sn[i] % 2 === 0) {
			result.even++;
		}
		else {
			result.odd++;
		}
	}
	console.log(result);
	return result;
}
countOddEvenNumbers();
