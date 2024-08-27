// var btn= document.querySelector("#resumedownload");

// var evt=btn.addEventListener(onclick,()=>{
function downloadresume(){
var link = document.createElement('a');
link.href="docs/resume(saumya).pdf";
link.download="SaumyasResume.pdf";
document.body.appendChild(link);
link.click();
document.body.removeChild(link)

}

// var btn= document.getElementById('resumedownload');
var btn=document.querySelector('#resumedownload');
var evt=btn.addEventListener('click',downloadresume);
console.log(evt)