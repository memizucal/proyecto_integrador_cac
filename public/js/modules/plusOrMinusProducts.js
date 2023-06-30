document.querySelector(".input-plus").addEventListener('click', sumar);

function sumar() { 	
	let num = document.getElementById('num').value;
	
	if(num == ''){
		num ="0";		
	}
	
	let sumar = parseInt(num) +1;
	document.getElementById('num').value = sumar;
}  


document.querySelector(".input-minus").addEventListener('click', restar);

function restar(){	
    let num = document.getElementById('num').value;
    
    if(num == '' || num == 0){
        num ="0";
    }
   
    if(num > "0"){
        let restar = parseInt(num) -1;
        document.getElementById('num').value = restar;
    }
}