document.getElementByClassName("cek").onclick = function() {
  alert(localStorage.getItem("idBerat"));
  };
  
document.getElementByClassName("item_add").onclick = function(){simpanBerat()};
  
function simpanBerat(){
  var item_berat = document.getElementByClassName("item_berat").innerText;  
  localStorage.setItem("idBerat", item_berat);
  }
