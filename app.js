function toggleClass(className){
    const element = document.getElementById ('output');
    element.classList.toggle (className);
}
function apllyClass(alignName){
    const element = document.getElementById ('output');
    element.style.textAlign = alignName;
}


document.getElementById('fontSizeTest').addEventListener ('input', function(){
    let fontSizeElement = document.getElementById ('fontSize');
    let fontSizeValue = fontSizeElement.value;
    let fontSizePx = fontSizeValue + 'px';
    const outputElement = document.getElementById ('output');
    outputElement.style.fontSize = fontSizePx;
})
document.getElementById('fontSizeTest').addEventListener ('input', function(){
    const colorValue = document.getElementById('colorId').value;
    const outputElement = document.getElementById ('output');
    outputElement.style.color = colorValue;
})



