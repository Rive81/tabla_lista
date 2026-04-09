/*Modifica el ejercicio anterior de manera que el usuario pueda insertar definiciones o borrarlas, según decida en la lista y desde JS. 

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

*/
