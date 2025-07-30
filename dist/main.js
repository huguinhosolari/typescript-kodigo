"use strict";
class CabeceraPagina {
    constructor() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "center";
    }
    obtenerPropiedades(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    definirAlineacion(alineacion) {
        this.alineacion = this.alineacion;
    }
    imprimir() {
        // crear un elemento en h1
        const encabezado = document.createElement("h1");
        encabezado.textContent = this.titulo;
        encabezado.style.color = this.color;
        encabezado.style.fontFamily = this.fuente;
        encabezado.style.textAlign = this.alineacion;
        document.body.appendChild(encabezado);
        //<body>
        //<h1 style="color: "red"; fontFamily: "Arial"; textAlign: "center"">titulo</h1>
        //</body>
    }
}
//Uso de la clase
window.addEventListener("DOMContentLoaded", () => {
    const header = new CabeceraPagina();
    header.obtenerPropiedades("Header creado a partir de Typescript", "darkblue", "Arial");
    header.definirAlineacion("center");
    header.imprimir();
});
