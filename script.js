console.log("hello")
const printBtn=document.getElementById("print");
printBtn.addEventListener("click",handlePrint);
function handlePrint(){
window.print()
}