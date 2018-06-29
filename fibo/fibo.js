
  /*
 ****	
*    * Написати функцію для генерації послідовності Фібоначчі
*
 **** 	
     * IFc-086
*    * Solovii Serhii
 ****
  */	

function generateFibonacciSequence(n) {
	if (typeof n !== 'number') {
		return fibo = [];
	}

	var fibo = [1, 1];
	
	switch(n) {
		case 0: fibo = null;
			break;
		case 1: fibo = [1];
			break;
		case 2: return fibo;
			break;
		default: for (var i = 2; i < n; i++) {
					fibo[i] = fibo[i - 1] + fibo[i - 2];
				}
	}	
	return fibo;
}

