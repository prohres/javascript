
  /*
 ****	
*    * Написати функцію для випадкового перемішування даних в масиві
*
 **** 	
     * IFc-086
*    * Solovii Serhii
 ****
  */

for (var i = 1; i <= 9; i++) {
	var newRow = document.createElement("div");
	newRow.setAttribute("class", "row");
	for (var j = 1; j <= 9; j++) {
		var newCell = document.createElement("div");
		newCell.innerText = i*j;
		if (i === j) {
		newCell.setAttribute("class", "cell cell-main");
		}
		if (i > j) {
		newCell.setAttribute("class", "cell cell-umain");
		}
		if (i < j) {
		newCell.setAttribute("class", "cell cell-omain");
		}
		newRow.appendChild(newCell);
	}
	main.appendChild(newRow);
}