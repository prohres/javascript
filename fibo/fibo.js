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
	do
	{
    	var n = Number(prompt('Please give me an positive number:'));
    	
	}
	while (n < 0);     
	
	var fibo = [1, 1];

	if (n == 0 || n == 1 || n == 2) {
		switch(n) {
			case 0: fibo = null;
				break;
			case 1: fibo = [1];
				break;
			default: fibo = [1, 1];
		}
	}

	for (var i = 2; i < n; i++) {
		fibo[i] = (fibo[i - 1] + fibo[i - 2]);
	}
	console.log(fibo);
	return fibo;
}
generateFibonacciSequence();
