function init(){
    const action = {
        "añadir" : añadir,
        "eliminar" : eliminar,
        "limpiar" : limpiar
    }

    Object.keys(actions).forEach(action => {
        document.getElementById(action).addEventListener("click", actions[actions]);
    });
}

function añadir() {
    const clave = document.getElementById("clave").value;
    const valor = document.getElementById("valor").value;

        if (clave) {
            const message = localStorage.getItem(clave) ? "se edito el registro" : "se añadio el registro";
         localStorage.setItem(clave, valor);
        }else {
            document.getElementById("mensaje").innerHTML = "<p> la  clave tiene que tener un valor </p>";
        }
}

window.onload = init;