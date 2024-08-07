document.addEventListener("DOMContentLoaded", function () {
    const cartasContainer = document.getElementById("cartas-container");

    const productos = [
        { nombre: "Pochoclos", precio: "$2000", imagen: "images/img01.jpg" },
        { nombre: "Garrapiñadas", precio: "$2000", imagen: "images/img04.png" },
        { nombre: "Algodón de Azúcar", precio: "$2000", imagen: "images/img07.jpg" },
        { nombre: "Manzanas Acarameladas", precio: "$2000", imagen: "images/img05.jpg" },
        { nombre: "Maní con cáscara", precio: "$2000", imagen: "images/img08.jpg" },
        // Agrega más productos según sea necesario
    ];

    productos.forEach((producto) => {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.innerHTML = `
            <p class="precioProducto">${producto.nombre} <span class="precio">${producto.precio}</span></p>
            <button class="mostrarPrecio" onclick="mostrarPrecio(this)">Ver Precio</button>
        `;
        // Establece el fondo de la carta utilizando la imagen
         // Establece el fondo de la carta utilizando la imagen y el gradiente
        carta.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${producto.imagen}")`;
        carta.style.backgroundSize = "cover"; // Asegura que la imagen cubra completamente la carta
        carta.style.backgroundPosition = "center"; // Asegura que la imagen esté centrada en la carta

        cartasContainer.appendChild(carta);
    });
});

function mostrarPrecio(boton) {
    const precioSpan = boton.previousElementSibling.querySelector(".precio");
    precioSpan.style.display = "inline"; // Cambia "none" a "inline" para mostrar el span
    boton.style.display = "none"; // Oculta el botón después de hacer clic
}

document.getElementById("btnContactanos").addEventListener("click", function() {
  // Cambiar la ubicación actual del navegador al enlace externo (en este caso, Google)
  window.location.href = "https://api.whatsapp.com/send?phone=2291459739&text=Holaa!%20me%20interesa%20encargarte%20productos%20para%20un%20evento!%20%F0%9F%8D%BF%E2%80%8B%F0%9F%92%AF%E2%80%8B";
});


