
//Aca lo primero que hacés es encontrar el boton que vas a necesitar apretar para que pase algo. En este caso lo obtenes a traves del query selector de clase .input-plus; le agregas el escuchador de eventos y le indicas que el evento es click y que lo que tiene que hacer es sumar, y declaras abajo qué hace la funcion sumar. Lo mismo con restar. 
//Asi podes sacar el "onclick" del html.

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
        alert("No tiene items para quitar"); 
    }
   
    if(num > "0"){
        let restar = parseInt(num) -1;
        document.getElementById('num').value = restar;
    }
}