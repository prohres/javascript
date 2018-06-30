
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
	if (typeof n !== 'number') {
		return result = {odd: 0, even: 0};
	}
	
	var result = {odd: 0, even: 0};

	var nStr = n.toString();
	for (var i = 0; i < nStr.length; i++) {
		if (parseInt(nStr[i]) % 2 === 0) {
			result["even"] += 1;
		}
		else {
			result["odd"] += 1;
		}  
	}
	return result;
}

