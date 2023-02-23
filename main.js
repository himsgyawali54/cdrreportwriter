var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/62e0d88637898912e95fd932/1g8v4rkr1';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

const myTimeout = setTimeout(show, 10000);
function show() {
var x=document.getElementById("showWhatsapp");
if(x.style.visibility =="hidden")
{
  x.style.cssText = `
    visibility:visible;
    opacity: 1;
  `;
}
else{
    x.style.cssText = `
    visibility:hidden;
    opacity: 0;
    transition:opacity 600ms, visibility 600ms;
  `;
 }
}
function closeWhatsapp() {
document.getElementById("showWhatsapp").style.cssText = `
  visibility:hidden;
  opacity: 0; 
  transition:opacity 600ms, 
  visibility 600ms;
  `;
}
  
  