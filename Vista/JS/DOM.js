    var indiceSlider = 0;
var imagenes;
//  misImagenes [0]= "Vista/imagenes/logo1.png";
//  misImagenes [1]= "Vista/imagenes/entradaCiclos.jpg";
//  misImagenes [2]= "Vista/imagenes/entradaESO.jpg";
//  misImagenes [3]= "Vista/imagenes/logo1.png";
//  misImagenes [4]= "Vista/imagenes/logo1.png";
  
  var descripcion;
  var titulos;
  var fechas;

function index() {
    removeAllChilds("articulo");
    var tamanio;
    
//  alert(slider()[0]);
//  alert(slider()[1]);
    var slider2 = slider();
    
    tamanio = slider2.length;
    
    imagenes= new Array(tamanio);
    descripcion= new Array(tamanio);
    titulos = new Array(tamanio);
    fechas = new Array(tamanio);
    
    for(i=0;i<slider2.length;i++){
        
        imagenes[i]="Vista/imagenes/noticias/"+slider2[i][2];
        descripcion[i]=slider2[i][1];
        titulos[i]=slider2[i][0];
        fechas[i]=slider2[i][3];
    }
    indiceSlider=imagenes.length-1;
    

	var articulo = document.getElementById("articulo"); //Cojo la ID del articulo
	var h1 = document.createElement("h1"); //Cojo la ID del h1
	h1.id = "tituloH1";

	var galeria = document.createElement("div"); //Creo un elemento DIV
	galeria.id="galeria";//Le pongo una ID a la div para que coja el CSS



	//escribo el texto del h1 en el articulo




	articulo.appendChild(galeria);
        
        
                var parrafoTitulo = document.createElement("span");
        var textoTitulo = document.createTextNode(titulos[titulos.length-1]+". ");
        parrafoTitulo.id="textoTitulo";
        galeria.appendChild(parrafoTitulo);
        parrafoTitulo.appendChild(textoTitulo);
        
                var parrafoFecha = document.createElement("span");
        var textoFecha = document.createTextNode(fechas[fechas.length-1]);
//        textoFecha.id="TextoFecha";
        parrafoFecha.id="textoFecha";
        galeria.appendChild(parrafoFecha);
        parrafoFecha.appendChild(textoFecha);
        
        var saltoLinea = document.createElement("br");
        galeria.appendChild(saltoLinea);

	var imagen = document.createElement("img");
	imagen.setAttribute("id","imagenG");
	imagen.setAttribute("src",imagenes[imagenes.length-1]);

	galeria.appendChild(imagen);
        

        
        var parrafoDescr = document.createElement("p");
        var textoDescr = document.createTextNode(descripcion[descripcion.length-1].substring(0,100)+"...");
        parrafoDescr.id="textoDescr";
        galeria.appendChild(parrafoDescr);
        parrafoDescr.appendChild(textoDescr);
        


	var botonBack = document.createElement("input");
	var botonFollowing = document.createElement("input");

	botonBack.type="button";
	botonBack.classList.add("botonG");
        botonBack.id="botonAtras";
	botonBack.addEventListener("click",goAtras,false);
	botonBack.setAttribute("value","←");

	botonFollowing.type="button";
	botonFollowing.classList.add("botonG");
        botonFollowing.id="botonDelante";
	botonFollowing.addEventListener("click",goDelante,false);
	botonFollowing.setAttribute("value","→");

	articulo.appendChild(botonBack);
	articulo.appendChild(botonFollowing);



}

function caracteristicas() {

    removeAllChilds("articulo");
    var h1 = document.createElement("h1");
    h1.id = "tituloHistoria";
    var textoH1 = document.createTextNode("Historia del Centro");
    h1.appendChild(textoH1);
    articulo.appendChild(h1);

    var parrafo = document.createElement("p");
    parrafo.innerHTML = historiaAJAX();


    articulo.appendChild(parrafo);
    
    var parrafoNumAlum = document.createElement("p");
    parrafoNumAlum.id = "numAlums";
    var textoParrafoNumAlums = document.createTextNode("Número de alumnos: " + numAlumsAJAX());
    parrafoNumAlum.appendChild(textoParrafoNumAlums);
    articulo.appendChild(parrafoNumAlum);



    var array = fotoHistoria();

    var texto = "";
    var array2 = new Array(2);
    var j = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] == 'ç') {
            i = i + 1;
            array2[j] = texto;
            j++;
            texto="";

        }
        texto += array[i];



    }

    for (i = 0; i < array2.length; i++) {
        var imagen1 = document.createElement("img");
        imagen1.src = array2[i];
        articulo.appendChild(imagen1);

    }






}

function removeAllChilds(a)
{
    var a = document.getElementById(a);
    while (a.hasChildNodes())
        a.removeChild(a.firstChild);
}

    


function goDelante(){
	if(indiceSlider<imagenes.length-1){
            indiceSlider++;
            document.getElementById("textoTitulo").innerHTML=titulos [indiceSlider]+". ";
	document.getElementById("imagenG").src=imagenes [indiceSlider];
        document.getElementById("textoDescr").innerHTML=descripcion[indiceSlider].substring(0,100)+"...";
        document.getElementById("textoFecha").innerHTML=fechas [indiceSlider];
        
        
        
	}


}

function goAtras(){
	if(indiceSlider>0){
            indiceSlider--;
            document.getElementById("textoTitulo").innerHTML=titulos [indiceSlider]+". ";
	document.getElementById("imagenG").src=imagenes[indiceSlider];
        document.getElementById("textoDescr").innerHTML=descripcion [indiceSlider].substring(0,100)+"...";
        document.getElementById("textoFecha").innerHTML=fechas [indiceSlider];
        
	
	}
}

function plurilinguismo(){

     removeAllChilds("articulo");

    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Plurilingüismo: Ingles");
    titulo.appendChild(textoTitulo);
    articulo.appendChild(titulo);
    

    
    
        var imagen1 = document.createElement("img");
        imagen1.src = fotoProyectoPlurilingue();
        imagen1.style.height="90px";
        imagen1.classList.add("floatLeft");


     var ParrafoPluri = document.createElement("p");
     var textoParrafoPluri = document.createTextNode(ProyectoPlurilingueAJAX());
     imagen1.style.padding="0px 10px 0px 0px";
     ParrafoPluri.appendChild(imagen1);
    ParrafoPluri.appendChild(textoParrafoPluri);
    
    articulo.appendChild(ParrafoPluri);


   
     
}

function erasmusES() {
    
    removeAllChilds("articulo");

    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("ERASMUS+ Educación Superior");
    titulo.appendChild(textoTitulo);
    articulo.appendChild(titulo);
    
        var imagen1 = document.createElement("img");
        imagen1.src = fotoProyectoErasmusES();
        imagen1.style.height="90px";
        imagen1.classList.add("floatLeft");

    var parrafo = document.createElement("p");

    parrafo.innerHTML = ProyectoErasmusESAJAX();
imagen1.style.padding="0px 10px 0px 0px";
    var div = document.createElement("span");
    div.appendChild(parrafo);
    articulo.appendChild(div);
  
       div.appendChild(imagen1);
    articulo.appendChild(parrafo);
  








    }
    
    function erasmusAE() {
    
     removeAllChilds("articulo");

    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("ERASMUS+ Asociaciones Escolares");
    titulo.appendChild(textoTitulo);
    articulo.appendChild(titulo);
    
        var imagen1 = document.createElement("img");
        imagen1.src = fotoProyectoErasmusAE();
        imagen1.style.height="90px";
        imagen1.classList.add("floatLeft");

    var parrafo = document.createElement("p");

    parrafo.innerHTML = ProyectoErasmusAEAJAX();
    
imagen1.style.padding="0px 10px 0px 0px";
    var div = document.createElement("span");
    div.appendChild(parrafo);
    articulo.appendChild(div);
  
       div.appendChild(imagen1);
    articulo.appendChild(parrafo);
    
     var asocAnt = document.createElement("p");
    var textoAsocAnt = document.createTextNode("ASOCIACIONES ESCOLARES ANTERIORES:");
    asocAnt.appendChild(textoAsocAnt);
    articulo.appendChild(asocAnt);
    asocAnt.style.textDecoration = "underline";
    
    
           var imagen2 = document.createElement("img");
        imagen2.src = fotoProyectoErasmusAEan();
        imagen2.style.height="90px";
        imagen2.classList.add("floatLeft");


     var ParrafoPluri = document.createElement("p");
     var textoParrafoPluri = document.createTextNode(ProyectoErasmusAEanAJAX());
     imagen2.style.padding="0px 10px 0px 0px";
     ParrafoPluri.appendChild(imagen2);
    ParrafoPluri.appendChild(textoParrafoPluri);
    
    articulo.appendChild(ParrafoPluri);
    
    
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    articulo.appendChild(br);
    articulo.appendChild(br2);

    }
    
    function mochilaDigital(){

       removeAllChilds("articulo");

    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Mochila Digital");
    titulo.appendChild(textoTitulo);
    articulo.appendChild(titulo);
    
        var imagen1 = document.createElement("img");
        imagen1.src = fotoProyectoMochilaDigital();
        imagen1.style.height="90px";
        imagen1.classList.add("floatLeft");

    var parrafo = document.createElement("p");

    parrafo.innerHTML = ProyectoMochilaDigitalAJAX();
imagen1.style.padding="0px 10px 0px 0px";
    var div = document.createElement("span");
    div.appendChild(parrafo);
    articulo.appendChild(div);
  
       div.appendChild(imagen1);
    articulo.appendChild(parrafo);


 var imagen2 = document.createElement("img");
        imagen2.src = fotoProyectoMochilaDigital2();
//        imagen2.style.height="90px";
        articulo.appendChild(imagen2);

   
     
}
    
 
