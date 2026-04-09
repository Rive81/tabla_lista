// 1. Identificamos y preparamos el DOMContentLoaded para asegurar que el HTML esté cargado 
// antes de intentar manipular los elementos con JS.
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Seleccionamos el formulario (por clase) y los elementos del aviso (por ID)
    // para guardarlos en variables y poder usarlos más adelante.
    const form = document.querySelector('.Padre'); 
    const aviso = document.getElementById('aviso_reserva');
    const detalle = document.getElementById('detalle_reserva');

    // 3. Agregamos un "escuchador de eventos" al formulario. 
    // Se activará cuando el usuario haga clic en el botón de enviar (submit).
    form.addEventListener('submit', function(event) {
        
        // 4. Detenemos el comportamiento por defecto del formulario.
        // Esto evita que la página se recargue y nos permite manejar los datos con JS.
        event.preventDefault(); // Muy importante para que el aviso se muestre sin recargar la página.(investigado)

        // 5. Capturamos los valores actuales que el usuario escribió en los cuadros de texto.
        // Usamos .value para obtener el texto ingresado.
        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const personas = document.getElementById('cantidadP').value;

        // 6. Construimos el mensaje de confirmación dinámicamente.
        // Inyectamos las variables dentro de una cadena de texto (Template Literals).
        detalle.textContent = `Reserva para ${nombre} el ${fecha} a las ${hora} para ${personas} persona(s).`;

        // 7. Cambiamos el estilo CSS del aviso de "none" (oculto) a "block" (visible).
        aviso.style.display = 'block';
    });
});

// 8. Función independiente para cerrar el aviso y limpiar el formulario.
// Se coloca fuera para que el atributo 'onclick' del HTML pueda encontrarla.
function cerrarAviso() {
    // Localizamos el aviso por su ID
    const aviso = document.getElementById('aviso_reserva');
    
    // 9. Volvemos a ocultar el aviso cambiando su display a 'none'.
    aviso.style.display = 'none';

    // 10. Limpiamos los cuadros de texto asignándoles un valor vacío ("").
    // Esto deja el formulario listo para una nueva reserva.
    document.getElementById('nombre').value = "";
    document.getElementById('fecha').value = "";
    document.getElementById('hora').value = "";
    document.getElementById('cantidadP').value = ""; 
}