/* Acá va tu código */
window.onload = () => {
    /* add event listener para que el usuario no pueda colocar cualquier número en el input
    y utilice sólo las flechas */
    const mouseOnly = document.getElementById("offsetNumber");
    mouseOnly.addEventListener("keypress", (event) => {
      event.preventDefault();
    });
  }