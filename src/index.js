import { test } from "./testfunc"
import './styles.css'

const display = document.getElementById('calcDisplay')
let symbolArr = []
let tempSymbolArr = []
let lastnum = []
let stageCount = 0;

const toDisplay = function (char) {
    const lastsymbol = Array.from(display.value)[display.value.length - 1]
    if ((char === '-' || char === '+' || char === '*' || char === '/' || char === '.') && (lastsymbol === '-' || lastsymbol === '+' || lastsymbol === '*' || lastsymbol === '/' || lastsymbol === '.' || lastsymbol === undefined) || (char === '.' && lastsymbol === '%')) {//||

    } else {
        if (char === '-' || char === '+' || char === '*' || char === '/' || char === '.') {
            if (stageCount === 0) {
                symbolArr.push(lastnum.reduce((accumulator, current) => accumulator + current))
            }

            symbolArr.push(char)
            stageCount = 1;
            display.value += char;
            console.log(lastnum)
            console.log(symbolArr)
        } else {
            if (stageCount === 1) {
                lastnum = []
                stageCount = 0;
            }
            lastnum.push(char)
            console.log(lastnum)
            display.value += char;
        }

    }

}
const disClear = function () {
    symbolArr = []
    display.value = "";
    lastnum = []
    console.log(lastnum)
}
const changeSign = function () {
    if (Array.from(display.value)[0] === '-') {
        display.value = display.value.substring(1)
    } else {

        display.value = '-' + display.value;
    }
}
const proc = function () {
    stageCount = 1;
    const lastsymbol = Array.from(display.value)[display.value.length - 1]
    if (lastsymbol === '-' || lastsymbol === '+' || lastsymbol === '*' || lastsymbol === '/' || lastsymbol === '%' || lastsymbol === '.') {

    } else if (lastsymbol === undefined) {

    } else {
        symbolArr.push((Number(lastnum.reduce((accumulator, current) => accumulator + current)) / 100).toString())
        console.log(symbolArr)
        display.value = symbolArr.reduce((accumulator, current) => accumulator + current)
    }

    //let sum = numbers.reduce((accumulator, current) => accumulator + current);
}
const equals = function () {
    symbolArr.push(lastnum.reduce((accumulator, current) => accumulator + current))
    console.log(symbolArr)
    const lastsymbol = Array.from(display.value)[display.value.length - 1]
    console.log(lastsymbol)
    for(let i = 0; i<symbolArr.length;i++){
        if(symbolArr[i]==='/'){
            symbolArr[i-1]=(Number(symbolArr[i-1]) / Number(symbolArr[i+1])).toString()
            symbolArr.splice(i,2)
            i--;
            console.log(symbolArr)
        }if(symbolArr[i]==='*'){
            symbolArr[i-1]=(Number(symbolArr[i-1]) * Number(symbolArr[i+1])).toString()
            symbolArr.splice(i,2)
            console.log(symbolArr)
            i--;
        }
        
    }
    for(let i = 0; i<symbolArr.length;i++){
        if(symbolArr[i]==='+'){
            symbolArr[i-1]=(Number(symbolArr[i-1]) + Number(symbolArr[i+1])).toString()
            symbolArr.splice(i,2)
            i--;
            console.log(symbolArr)
        }if(symbolArr[i]==='-'){
            symbolArr[i-1]=(Number(symbolArr[i-1]) - Number(symbolArr[i+1])).toString()
            symbolArr.splice(i,2)
            console.log(symbolArr)
            i--;
        }
        
    }
    stageCount = 1
    display.value = symbolArr[0].toString()
    lastnum = []

    

    

    
    //display.value = customFunc()
    //console.log(customFunc())
}
const customFunc = function () {
    return new Function('return ' + display.value)()
}

window.toDisplay = toDisplay
window.disClear = disClear
window.changeSign = changeSign
window.proc = proc
window.equals = equals
//<script src="./dist/my.bundle.js"></script>