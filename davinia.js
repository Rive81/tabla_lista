/*Con este logramos la lista*/
/*let dt = document.createElement("dt");
let textDt = document.createTextNode("Red Telefónica Conmutada (RTC)");
dt.appendChild(textDt);
dl.appendChild(dt);
let dd = document.createElement("dd");
let textDd = document.createTextNode("La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.");
dd.appendChild(textDd);
dl.appendChild(dd);*/

function crearNodoDl(dl, tipo, texto) {
    let nodo = document.createElement(tipo);
    let textNodo = document.createTextNode(texto);
    nodo.appendChild(textNodo);
    dl.appendChild(nodo);
}

function crearDl(){
    let dl = document.createElement("dl");/*con esta instruccion lo podemos ver en el body la etiqueta dl en (inspeccionar)*/ 
    document.body.appendChild(dl);
    const textos_dt = ["Red Telefónica Conmutada (RTC)", "Red Digital de Servicios Integrados (RDSI)", "Línea de Abonado Digital Asimétrica (ADSL)", "Fibra Óptica"];
    /*crea el texto de la lista todos en un mismo array*/
    const textos_dd = ["La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL.", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."];
    for (let i = 0; i < textos_dt.length; i++) {
        crearNodoDl(dl, "dt", textos_dt[i]);
        crearNodoDl(dl, "dd", textos_dd[i]);   
    }
}
crearDl();







