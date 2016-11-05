
function btnAgregar(){

	// se llama a el valor del input textarea 
	var areaTarea = document.getElementById('agregar-tarea').value;
	// para dejar nuevamente vacio el input texarea
	document.getElementById('agregar-tarea').value = "";

	// se valida que ingrese texto
	if (areaTarea == null || areaTarea.length == 0){
		alert("No has ingresado texto");
		return false;
	}

	// se llamar a div contenedor de todas las tareas(contenedor-tareas)
	var contenedorTareas = document.getElementById("contenedor-tareas");
	// se crean los elementos de una tarea
	var divRow = document.createElement('div')
	var inputcheck = document.createElement("input");
	var parrafo = document.createElement("p");
	var iconoUno = document.createElement("i");
	var iconoDos = document.createElement("i");
	// se crea nodo con texto de la tarea
	var tareaNodo = document.createTextNode(areaTarea);
	// se agregan clases a los elementos
	divRow.setAttribute("class","row");
	inputcheck.setAttribute("class","col-xs-1");
	inputcheck.setAttribute("type","checkbox");
	inputcheck.setAttribute("value", "");
	parrafo.setAttribute("class","col-xs-8 col-md-9");
	iconoUno.setAttribute("class","fa fa-heart col-xs-1");
	iconoUno.setAttribute("aria-hidden","true");
	iconoDos.setAttribute("class","fa fa-trash col-xs-1");
	 // se definen los padres de los elementos y nodo
	 parrafo.appendChild(tareaNodo);
	 divRow.appendChild(inputcheck);
	 divRow.appendChild(parrafo);
	 divRow.appendChild(iconoUno);
	 divRow.appendChild(iconoDos);
	// se meten los elementos del div id lista tareas a su contenedor padre
	contenedorTareas.appendChild(divRow);
	// se crean eventos
	inputcheck.addEventListener("click", tacharTarea); // para tachar tarea realizada
	iconoUno.addEventListener("click", tareaFavorita); // para poner tarea favorita
	iconoDos.addEventListener("click", eliminarTarea);	// para eliminar tareas
	// se crean las funciones llamadas en los eventos
	function tacharTarea(){
		parrafo.classList.toggle('tachar');
	}
	function tareaFavorita(){
		iconoUno.classList.toggle('favorita');
	}
	function eliminarTarea(){
		contenedorTareas.removeChild(divRow);
	}

}




