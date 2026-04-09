/*A partir del siguiente código de ejemplo, crea la lista desde JS (usando herramientas de DOM) con un HTML vacío, sólo debe incluir la etiqueta script correspondiente y lo que consideres necesario para que se cree la lista, en ningún caso etiquetas ni contenidos de la lista de definición.
        <dl>
            <dt>Red Telefónica Conmutada (RTC)</dt>
            <dd>La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.</dd>

            <dt>Red Digital de Servicios Integrados (RDSI)</dt>
            <dd>Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.</dd>

            <dt>Línea de Abonado Digital Asimétrica (ADSL)</dt>
            <dd>Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es
                necesario un módem ADSL.</dd>

            <dt>Fibra Óptica</dt>
            <dd>Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el
                término más apropiado es Fibra híbrida coaxial.</dd>
        </dl>
        */

const datos = [
    ["Red Telefónica Conmutada (RTC)", "La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem."],
    ["Red Digital de Servicios Integrados (RDSI)", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI."],
    ["Línea de Abonado Digital Asimétrica (ADSL)", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet necesario un módem ADSL."],
    ["Fibra Óptica", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que eltérmino más apropiado es Fibra híbrida coaxial."],
];


//creamos lista con createElement
const dl = document.createElement("dl");
//Recorremos los datos unos por uno con el bucle for
for (let i = 0; i < datos.length; i++) {
    const dt = document.createElement("dt");
    dt.textContent = datos[i][0];
    const dd = document.createElement("dd");
    dd.textContent = datos[i][1];
    dl.appendChild(dt);
    dl.appendChild(dd);
}
document.body.appendChild(dl)
/*
// Borrado
            function borrar() { 
                document.getElementById("tablas").removeChild (document.getElementById("tablas").lastChild); 
            } 

*/