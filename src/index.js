/* add event listener para que el usuario no pueda colocar cualquier número en el input
    y utilice sólo las flechas */
window.onload = () => {
    const mouseOnly = document.getElementById("offsetNumber");
    mouseOnly.addEventListener("keypress", (event) => {
      event.preventDefault();
    });
  }


  /* const btnPrimary = document.getElementById("btnPrimary");

  btnPrimary.addEventListener("click", () => {
      const input = document.getElementById("input-name");
      let valueInput = inputName.value;

      document.getElementById("root").innerHTML+= cipher.encode(valueInput);
  }) */