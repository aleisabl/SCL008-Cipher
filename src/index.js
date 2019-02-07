/* add event listener para que el usuario no pueda colocar cualquier número en el input
    y utilice sólo las flechas */
window.onload = () => {
    const mouseOnly = document.getElementById("offsetNumber");
    mouseOnly.addEventListener("keypress", (event) => {
      event.preventDefault();
    });
  }

  /*  if(document.getElementById("message").value.length == 0){
            alert("Por favor rellenar todos los campos");
        } */

        /* if(document.getElementById("message").value.length == 0){
            alert("Por favor rellenar todos los campos");
        } */