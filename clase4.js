function crearNodoSinTexto(padre, tipo) {
    let nodo = document.createElement(tipo);
    padre.appendChild(nodo);
}

function crearNodoConTexto(padre, tipo, texto) {
    let nodo = document.createElement(tipo);
    let textNodo = document.createTextNode(texto);
    nodo.appendChild(textNodo);
    padre.appendChild(nodo);
}

function crearNodoConType(padre, tipo, texto, valorType, funcion) {
    let nodo = document.createElement(tipo);
    nodo.type = valorType;
    if (tipo == "button") {
        nodo.setAttribute("onclick", funcion);
        let textNodo = document.createTextNode(texto);
        nodo.appendChild(textNodo);
    }
    padre.appendChild(nodo);
}


/*function crearNodo(padre, tipo, texto, funcion) {
    let nodo = document.createElement(tipo);
    if(tipo != "input" && tipo != "textarea"){
        let textNodo = document.createTextNode(texto);
        nodo.appendChild(textNodo);
    }else{
        if(tipo == "input"){
            nodo.type = "text";
            //nodo.setAttribute("type", "text");
        }
    }
    if(tipo == "button"){
        nodo.setAttribute("onclick", funcion);
        nodo.setAttribute("type", "button");
    }
    padre.appendChild(nodo);
}*/

function crearDl() {
    let dl = document.createElement("dl");
    document.body.appendChild(dl);
    
    const textos_dt = ["Red Telefónica Conmutada (RTC)", "Red Digital de Servicios Integrados (RDSI)", "Línea de Abonado Digital Asimétrica (ADSL)", "Fibra Óptica"];
    const textos_dd = ["La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL.", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."];
    for (let i = 0; i < textos_dt.length; i++) {
        crearNodoConTexto(dl, "dt", textos_dt[i]);
        let dt = document.getElementsByTagName("dt")[i];
        dt.setAttribute("class", "" + (i + 1));
        crearNodoConTexto(dl, "dd", textos_dd[i]);
        let dd = document.getElementsByTagName("dd")[i];
        dd.setAttribute("class", "" + (i + 1));
    }
}
function crearForm() {
    /*crearNodo(document.body, "button", "Crear Lista Definición", "crearDl()");*/
    let form = document.createElement("form");
    document.body.appendChild(form);
    
    crearNodoConTexto(form, "label", "Término");
    //let br = document.createElement("br");
    //form.appendChild(br);
    crearNodoSinTexto(form, "br");
    //function crearNodoConType(padre, tipo, texto, valorType, funcion){
    crearNodoConType(form, "input", "", "text", "");
    crearNodoSinTexto(form, "br");
    crearNodoConTexto(form, "label", "Definición");
    crearNodoSinTexto(form, "br");
    crearNodoSinTexto(form, "textarea");
    crearNodoSinTexto(form, "br");
    //function crearNodoConType(padre, tipo, texto, valorType, funcion){
    crearNodoConType(form, "button", "Insertar término con definición", "button", "insertarDtDd()");
}

function insertarDtDd() {
    let input = document.getElementsByTagName("input")[1];
    let textArea = document.getElementsByTagName("textarea")[0];
    let dl = document.getElementsByTagName("dl")[0];
    crearNodoConTexto(dl, "dt", input.value);
    crearNodoConTexto(dl, "dd", textArea.value);
    //Añadir la class al dt y al dd nuevo
    let dts = document.getElementsByTagName("dt");
    dts[dts.length-1].setAttribute("class", "" + dts.length);
    let dds = document.getElementsByTagName("dd");
    dds[dds.length-1].setAttribute("class", "" + dds.length);
}

function borrarDtDd() {
    let input = document.getElementsByTagName("input")[0];
    let dtDdABorrar = document.getElementsByClassName(input.value);
    let lista = dtDdABorrar[0].parentNode;
    lista.removeChild(dtDdABorrar[0]);
    lista.removeChild(dtDdABorrar[0]);
}
crearDl();
crearForm();