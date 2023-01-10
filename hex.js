const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025

const color =document.querySelector(".color");

const getRandomhexanumber=()=>{

    return hex[Math.floor(Math.random() * hex.length)]; 
}


const getRandomHexadecimalColor=()=>{

    let hexColor='#';

    for(let i=0;i<6;i++){

        hexColor+=getRandomhexanumber();
        console.log(hexColor);
    }

        return hexColor;
}
const btn =document.getElementById('btn');
btn.addEventListener('click', ()=>{

    let hexadecimalColor;
    hexadecimalColor=getRandomHexadecimalColor();
    console.log(hexadecimalColor);
    document.body.style.backgroundColor=hexadecimalColor;
    color.textContent=hexadecimalColor;


    }




);