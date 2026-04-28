/*let dt = document.createElement("dt");
let textDt = document.createTextNode("Red Telefónica Conmutada (RTC)");
dt.appendChild(textDt);
dl.appendChild(dt);
let dd = document.createElement("dd");
let textDd = document.createTextNode("La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.");
dd.appendChild(textDd);
dl.appendChild(dd);*/

function crearNodo(padre, tipo, texto, funcion) {//funcion es un parametro que se le pasa a la funcion crearNodo() para que se lo pase al boton creado en la funcion crearForm() para que al hacer clic en el boton se ejecute la funcion insertarDTDb() que se encarahg de insertar un nuevo termino con su definicion en el d creado en la funcion crearDL
    let nodo = document.createElement(tipo);
    if (tipo != "input" && tipo != "textarea") {
        let textNodo = document.createTextNode(texto);
        nodo.appendChild(textNodo);
    } else {
        if (tipo == "input") {
            nodo.type = "text";
            //nodo.setAttribute("type", "text"), es igual a la funcion de la linea 17
        }
    }
    if (tipo == "button") {
        nodo.setAttribute("onclick", funcion);
        nodo.setAttribute("type", "button");
    }
    padre.appendChild(nodo);
}

function crearDl() {
    let dl = document.createElement("dl");
    document.body.appendChild(dl);
    const textos_dt = ["Red Telefónica Conmutada (RTC)", "Red Digital de Servicios Integrados (RDSI)", "Línea de Abonado Digital Asimétrica (ADSL)", "Fibra Óptica"];
    const textos_dd = ["La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL.", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."];
    for (let i = 0; i < textos_dt.length; i++) {
        crearNodo(dl, "dt", textos_dt[i]);
        let dt = document.getElementsByTagName("dt")[i];
        dt.setAttribute("class", "" + (i + 1));
        crearNodo(dl, "dd", textos_dd[i]);
        let dd = document.getElementsByTagName("dd")[i];
        dd.setAttribute("class", "" + (i + 1));
    }
}
function crearForm() {
    /*crearNodo(document.body, "button", "Crear Lista Definición", "crearDl()");*/
    let form = document.createElement("form");
    document.body.appendChild(form);
    crearNodo(form, "label", "Término", "");
    //let br = document.createElement("br");
    //form.appendChild(br);
    crearNodo(form, "br", "", "");
    crearNodo(form, "input", "", "");
    crearNodo(form, "br", "", "");
    crearNodo(form, "label", "Definición", "");
    crearNodo(form, "br", "", "");
    crearNodo(form, "textarea", "", "");
    crearNodo(form, "br", "", "");
    crearNodo(form, "button", "Insertar término con definición", "insertarDtDd()");
}

function insertarDtDd() {
    let input = document.getElementsByTagName("input")[1];//el 0 es el input del formulario y el 1 es el input del formulario creado en la funcion crearForm()
    let textArea = document.getElementsByTagName("textarea")[0];//el 0 es el textarea del formulario creado en la funcion crearForm() porqu no hay otro textarea en el docuemento
    let dl = document.getElementsByTagName("dl")[0];//el 0 es el dl vreado en la funcion crearDL() pr que no hay otro dl en el documento 
    crearNodo(dl, "dt", input.value);//el valor del input se lo pasamos a la funcion crearNodo() para que lo inserte en el dl como un dt
    crearNodo(dl, "dd", textArea.value);//el valor del textarea se lo pasamos a la funcion crearnodo() para que lo inserte en el dl como un dd
}
crearDl();
crearForm();
function borrarDtDd() {
    let input = document.getElementsByTagName("input")[0];
    let dtDdABorrar = document.getElementsByClassName(input.value);
    let lista = dtDdABorrar[0].parentNode;
    lista.removeChild(dtDdABorrar[0]);
    lista.removeChild(dtDdABorrar[0]);
}