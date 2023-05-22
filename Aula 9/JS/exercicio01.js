let nome = document.getElementById("nome");
nome.addEventListener('keydown', (e) => {
  console.log(e.code)
  if (e.code == "Enter" || e.code == "NumpadEnter") {
    alert("apertou Enter")
  }
})
