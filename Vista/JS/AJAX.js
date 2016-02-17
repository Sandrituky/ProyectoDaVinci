function historiaAJAX() {
        $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?caracteristicas=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (caracteristicas) {
            if (caracteristicas != null) {
                returnValue = caracteristicas;


            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function numAlumsAJAX() {

    var returnValue;

    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?numAlums=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (numAlums) {
            if (numAlums != null) {
                returnValue = numAlums;


            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function fotoHistoria() { //funcion para meter fotos en la seccion de historia

    var returnValue;

    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?fotosHistoria=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (fotosHistoria) {
            if (fotosHistoria != null) {
                returnValue = fotosHistoria;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function slider() { //funcion para meter fotos en la seccion de historia

    var returnValue;

    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?slider=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (lastNoticias) {

            if (lastNoticias != null) {

                inicio = 0;
                texto = "";
                j=0;
                k=0;
                var ArrayNoticias = []; //esto se puede quedar corto
                var ArrayNoticia = new Array(4); //nombre, descripcion, foto y fecha
                for (i = 0; i < lastNoticias.length; i++) {

                    if (lastNoticias[i] == '☺') {

                        ArrayNoticia[j]=texto;
                        j++;
                        texto = "";
                        i = i + 1;
                    }
                    if(lastNoticias[i] == '☻'){

                        ArrayNoticias.push(ArrayNoticia);
                        ArrayNoticia = new Array(4);
                        j=0;
                        i++;
                    }
                    texto += lastNoticias[i];

                }

                returnValue = ArrayNoticias;
                
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function ProyectoPlurilingueAJAX() {
    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?plurilingue=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (plurilingue) {
            if (plurilingue != null) {
                returnValue = plurilingue;


            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function fotoProyectoPlurilingue() { //funcion para meter fotos en la seccion de historia

    var returnValue;

    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?fotoPlurilingue=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (fotoPlurilingue) {
            if (fotoPlurilingue != null) {
                returnValue = fotoPlurilingue;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function ProyectoErasmusESAJAX() {
    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?erasmusES=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (erasmusES) {
            if (erasmusES != null) {
                returnValue = erasmusES;


            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function fotoProyectoErasmusES() { //funcion para meter fotos en la seccion de historia

    var returnValue;

    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?fotoErasmusES=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (fotoErasmusES) {
            if (fotoErasmusES != null) {
                returnValue = fotoErasmusES;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function ProyectoErasmusAEAJAX() {
    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?erasmusAE=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (erasmusAE) {
            if (erasmusAE != null) {
                returnValue = erasmusAE;


            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function fotoProyectoErasmusAE() { //funcion para meter fotos en la seccion de historia

    var returnValue;

    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?fotoErasmusAE=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (fotoErasmusAE) {
            if (fotoErasmusAE != null) {
                returnValue = fotoErasmusAE;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function ProyectoErasmusAEanAJAX() {
    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?erasmusAEan=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (erasmusAEan) {
            if (erasmusAEan != null) {
                returnValue = erasmusAEan;


            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function fotoProyectoErasmusAEan() { //funcion para meter fotos en la seccion de historia

    var returnValue;

    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?fotoErasmusAEan=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (fotoErasmusAEan) {
            if (fotoErasmusAEan != null) {
                returnValue = fotoErasmusAEan;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function ProyectoMochilaDigitalAJAX() {
    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?mochilaDig=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (mochilaDig) {
            if (mochilaDig != null) {
                returnValue = mochilaDig;


            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function fotoProyectoMochilaDigital() { //funcion para meter fotos en la seccion de historia

    var returnValue;

    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?fotoMochilaDig=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (fotoMochilaDig) {
            if (fotoMochilaDig != null) {
                returnValue = fotoMochilaDig;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}

function fotoProyectoMochilaDigital2() { //funcion para meter fotos en la seccion de historia

    var returnValue;

    $.ajax({
        type: 'GET',
        url: "Controlador/controlador.php?fotoMochilaDig2=",
        async: false,
        headers: {
        },
        contentType: 'text/xml; charset=utf-8',
        dataType: 'text',
        data: '',
        success: function (fotoMochilaDig2) {
            if (fotoMochilaDig2 != null) {
                returnValue = fotoMochilaDig2;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return returnValue;
}