function calculate() {
	var x = document.getElementById("user-input").value;
	var vatRate = document.getElementById("VAT-rate").value;
	if(x === '') {
		alert('Please enter an amount');
	}
	if(document.getElementById("add").checked && x !== '') {
		document.getElementById('exclude-VAT').style.display = 'none';
		document.getElementById('add-VAT').style.display = 'block';
		document.getElementById("plus-net").innerHTML = '£' + parseFloat(x).toFixed(2);
		document.getElementById("plus-VAT").innerHTML = '£' + (x * vatRate - x).toFixed(2);
		document.getElementById("plus-gross").innerHTML = '£' + (x * vatRate).toFixed(2);	
	} else if(document.getElementById("exclude").checked && x !== '') {
		document.getElementById('add-VAT').style.display = 'none';
		document.getElementById('exclude-VAT').style.display = 'block';
		document.getElementById("minus-net").innerHTML = '£' + parseFloat(x).toFixed(2);
		document.getElementById("minus-VAT").innerHTML = '£' + (x - (x / vatRate)).toFixed(2);
		document.getElementById("minus-gross").innerHTML = '£' + (x / vatRate).toFixed(2);
	}
}