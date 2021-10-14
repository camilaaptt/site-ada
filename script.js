document.getElementById("sendBoton").addEventListener("click", validaFormulario)
function validaFormulario(){
    if (document.getElementById("name").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "" ){
    alert("Prontinho! Você receberá as novidades por e-mail.")
    }else{
      alert("Por favor, preencha os campos nome e e-mail!")  
  }
}