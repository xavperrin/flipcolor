const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "A", "B", "C", "D", "E", "F"];
// #f15025

const _color =document.querySelector(".color");

/**
 * Returns a random number between 0 & 15
 * @return {number}.
 */
const getRandomhexanumber=()=>{

    
    return Math.floor(Math.random() * hex.length); 
}

/**
 * Returns a random hexadecimal color
 * @return {string}.
 */
const getRandomHexadecimalColor=()=>{

    let hexColor='#';

    for(let i=0;i<6;i++){
        hexColor+=hex[getRandomhexanumber()];
    }

        return hexColor;
}
const _btn =document.getElementById('btn');
if(_btn){
_btn.addEventListener('click', function(){

    let hexadecimalColor;
    hexadecimalColor=getRandomHexadecimalColor();
    console.log(hexadecimalColor);
    document.body.style.backgroundColor=hexadecimalColor;
    _color.textContent=hexadecimalColor;


    }




);
}