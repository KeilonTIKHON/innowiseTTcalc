import { test } from "./testfunc"
import './styles.css'

const display = document.getElementById('calcDisplay')
let symbolArr = []
let tempSymbolArr = []
let lastnum = []
let stageCount = 0;
let forPercentcount = [];

function toTrunk() {
    try {
        if (symbolArr[symbolArr.length - 1].length > 11) {
            const alldec = Array.from(symbolArr[symbolArr.length - 1])
            let lastDec = undefined;
            console.log(alldec[alldec.indexOf('e')])
            let lastlost = alldec.pop()
            let popped = true
            if (alldec[alldec.indexOf('e')]===undefined) {
                lastlost = alldec.pop()
                lastlost = alldec.pop()
                lastlost = alldec.pop()
            }
            console.log(alldec)
            console.log(alldec[alldec.length - 1])
            for (let i = alldec.length - 1; i >= 0; i--) {
                console.log(alldec[alldec.length - 1] + 'popapapodandadan')
                if ((alldec[i] === '9' || alldec[i] === '0') && lastDec !== 'skip' && alldec[alldec.indexOf('e')]===undefined) {
                    console.log(lastDec)
                    if (lastDec === '0' && alldec[i] === '9') {
                        console.log('okaruuuuun')
                        lastDec = 'skip';
                    } else {
                        lastDec = alldec[i]
                    }

                    console.log(lastDec)
                    if (lastDec !== undefined && lastDec !== 'skip') {
                        alldec.pop()
                    } else {
                        i++
                    }

                    console.log(alldec)

                } else {
                    console.log('lastdec is ', lastDec)
                    if (lastDec === undefined) {
                        alldec.push(lastlost)
                        console.log(alldec + '     BOOOOBAAAA')
                        const index = alldec.indexOf('e') - 1
                        console.log(index + ' 007')
                        if (alldec[index] === '0') {

                            console.log(alldec[alldec.indexOf('e')])
                            console.log(alldec.indexOf('e') - 1)

                            console.log(alldec)
                            alldec.splice(index, 1)
                            console.log(alldec)
                            symbolArr[symbolArr.length - 1] = (Number(alldec.reduce((accumulator, current) => accumulator + current))).toString()
                        } else {
                            alldec.splice(index, 1)
                            console.log(alldec)
                            console.log('MEMQEKJQNWEUIYHQW')
                            console.log(alldec[index - 1])
                            let lastDec1 = undefined
                            for (let k = index - 1; k >= 0; k--) {
                                if (alldec[k] === '9' || alldec[k] === '0' || alldec[k] === '.') {
                                    lastDec1 = alldec[k]
                                    console.log(lastDec1)

                                    console.log(alldec)



                                } if (lastDec1 === '0') {
                                    console.log(alldec)
                                    symbolArr[symbolArr.length - 1] = (Number(alldec.reduce((accumulator, current) => accumulator + current))).toString()
                                    break;
                                } else {
                                    if (alldec[k] === '9') {
                                        alldec.splice(k, 1)
                                    } else {
                                        if (alldec[k] === '.') {
                                            alldec.splice(k, 1)
                                            k--
                                        }
                                        console.log(alldec[k])
                                        alldec[k] = (Number(alldec[k]) + 1).toString()
                                        console.log(alldec[k])
                                        console.log(alldec)
                                        symbolArr[symbolArr.length - 1] = (Number(alldec.reduce((accumulator, current) => accumulator + current))).toString()
                                        break;
                                    }


                                }
                            }

                            break;
                        }
                    }
                    if (lastDec === '0') {
                        console.log(alldec)
                        symbolArr[symbolArr.length - 1] = (Number(alldec.reduce((accumulator, current) => accumulator + current))).toString()
                        break;
                    } else if (alldec[i] === '0') {

                    } else if (lastDec === 'skip') {
                        symbolArr[symbolArr.length - 1] = (Number(alldec.reduce((accumulator, current) => accumulator + current))).toString()
                        break;
                    } else {
                        console.log(lastDec + '    LASTDEC IN ELSE')
                        console.log(alldec[i])

                        alldec[i] = (Number(alldec[i]) + 1).toString()
                        symbolArr[symbolArr.length - 1] = (Number(alldec.reduce((accumulator, current) => accumulator + current))).toString()
                        break;


                    }
                }
            }

        }
    } catch (err) {
        display.value = 'Error'
    }

}

const toDisplay = function (char) {
    try {
        const lastsymbol = Array.from(display.value)[display.value.length - 1]
        if ((char === '-' || char === '+' || char === '*' || char === '/' || char === '.') && (lastsymbol === '-' || lastsymbol === '+' || lastsymbol === '*' || lastsymbol === '/' || lastsymbol === '.' || lastsymbol === undefined) || (char === '.' && lastsymbol === '%')) {//||

        } else {

            if (char === '-' || char === '+' || char === '*' || char === '/') { 
                console.log(stageCount + 'STAGECOUNT')
                if (stageCount === 0) {
                    console.log('i')
                    console.log(lastnum)
                    console.log(symbolArr)
                    if (symbolArr[symbolArr.length - 1] === '+' || symbolArr[symbolArr.length - 1] === '-' || symbolArr[symbolArr.length - 1] === '*' || symbolArr[symbolArr.length - 1] === '/' || !symbolArr[0]) {
                        symbolArr.push(lastnum.reduce((accumulator, current) => accumulator + current))
                    }

                    lastnum = []
                } else if (stageCount === 2) {
                    
                    symbolArr.push(lastnum.reduce((accumulator, current) => accumulator + current))
                    stageCount = 0
                }

                symbolArr.push(char)
                stageCount = 1;
                display.value += char;
                console.log(lastnum)
                console.log(symbolArr)
            } else {

                console.log(lastnum)
                if (stageCount === 1) {
                    lastnum = []
                    stageCount = 0;
                }
                if ((lastnum.includes('.') && char === '.')) {

                } else {

                    lastnum.push(char)
                    console.log(lastnum)
                    display.value += char;
                }


            }

        }
    } catch (err) {
        display.value = 'Error'
    }


}
const disClear = function () {
    try {
        symbolArr = []
        display.value = "";
        lastnum = []
        console.log(lastnum)
        stageCount = 0;
    } catch (err) {
        display.value = 'Error'
    }

}
const changeSign = function () {
    try {
        const symbolArrLast = (symbolArr.slice(-1))[0]
        //if (Array.from(display.value)[0] === '-') {
        // display.value = display.value.substring(1)
        //} else {

        //display.value = '-' + display.value;
        //}
        console.log(symbolArr)
        console.log(symbolArrLast)
        console.log(lastnum[0])
        if (symbolArr[0] === undefined) {
            if (lastnum[0] !== '-') {
                console.log(lastnum)
                const newLastNum = ['-'].concat(lastnum)
                lastnum = newLastNum
                display.value = lastnum.reduce((accumulator, current) => accumulator + current)
            } else {
                console.log(lastnum)
                lastnum.shift();
                if(lastnum[0]===undefined){
                    display.value = ''
                }else{
                    display.value = lastnum.reduce((accumulator, current) => accumulator + current)
                }
                
            }
        } else if (symbolArrLast === '+') {
            if (lastnum[0] === undefined) {
                console.log(symbolArr)
                symbolArr.pop()
                symbolArr.push('-')
                display.value = display.value.slice(0, -1) + '-'
            } else {
                symbolArr.pop()
                symbolArr.push('-')
                display.value = symbolArr.reduce((accumulator, current) => accumulator + current) + lastnum.reduce((accumulator, current) => accumulator + current)
            }

        } else if (symbolArrLast === '-') {
            if (lastnum[0] === undefined) {
                console.log(symbolArr)
                symbolArr.pop()
                symbolArr.push('+')
                display.value = display.value.slice(0, -1) + '+'
            } else {
                symbolArr.pop()
                symbolArr.push('+')
                display.value = symbolArr.reduce((accumulator, current) => accumulator + current) + lastnum.reduce((accumulator, current) => accumulator + current)
            }

        } else {

        }
    } catch (err) {
        display.value = 'Error'
    }

}
const proc = function () {
    try {
        //stageCount = 0;
        const lastsymbol = Array.from(display.value)[display.value.length - 1]
        if (lastsymbol === '-' || lastsymbol === '+' || lastsymbol === '*' || lastsymbol === '/' || lastsymbol === '%' || lastsymbol === '.') {

        } else if (lastsymbol === undefined) {

        } else {
            console.log(lastnum)
            if (lastnum[0]) {
                console.log(lastnum)
                const symbolArrLast = symbolArr.slice(-1)
                console.log(symbolArrLast)
                if (symbolArr.length === 0) {
                    //symbolArr.pop()
                    symbolArr.push(display.value)
                }
                console.log(lastnum)
                console.log(symbolArr)
                console.log(symbolArr.length)
                if (symbolArr[symbolArr.length - 1] === '+' || symbolArr[symbolArr.length - 1] === '-' || symbolArr[symbolArr.length - 1] === '*' || symbolArr[symbolArr.length - 1] === '/') {
                    symbolArr.push((Number(lastnum.reduce((accumulator, current) => accumulator + current)) / 100).toString())
                } else {
                    symbolArr[symbolArr.length - 1] = (Number(lastnum.reduce((accumulator, current) => accumulator + current)) / 100).toString()
                }
                //symbolArr.push((Number(lastnum.reduce((accumulator, current) => accumulator + current)) / 100).toString())
                toTrunk()
                lastnum = Array.from((Number(lastnum.reduce((accumulator, current) => accumulator + current)) / 100).toString())
                console.log(lastnum)
            } else {
                console.log(forPercentcount)
                symbolArr[0] = ((Number(forPercentcount[0])) / 100)

                symbolArr[0] = symbolArr[0].toString()
                toTrunk()
                forPercentcount[0] = Number(symbolArr[0])
                console.log(symbolArr)
            }

            console.log(symbolArr)
            display.value = symbolArr.reduce((accumulator, current) => accumulator + current)
            if (symbolArr.length === 1) {
                symbolArr = []
            }
            stageCount = 0;
            console.log(symbolArr)
        }

        //let sum = numbers.reduce((accumulator, current) => accumulator + current);
    } catch (err) {
        display.value = 'Error'
    }

}
const equals = function () {
    try {
        if (symbolArr[symbolArr.length - 1] === '+' || symbolArr[symbolArr.length - 1] === '-' || symbolArr[symbolArr.length - 1] === '*' || symbolArr[symbolArr.length - 1] === '/') {
            if (lastnum[0]) {
                console.log('kek')
                symbolArr.push(lastnum.reduce((accumulator, current) => accumulator + current))
            } else {
                console.log(symbolArr)
                symbolArr.pop()
            }

        } else {
            //console.log(symbolArr)
            //symbolArr.push(lastnum.reduce((accumulator, current) => accumulator + current))
        }

        console.log(symbolArr)
        const lastsymbol = Array.from(display.value)[display.value.length - 1]
        console.log(lastsymbol)
        for (let i = 0; i < symbolArr.length; i++) {
            if (symbolArr[i] === '/') {
                symbolArr[i - 1] = (Number(symbolArr[i - 1]) / Number(symbolArr[i + 1])).toString()
                symbolArr.splice(i, 2)
                i--;
                console.log(symbolArr)
            } if (symbolArr[i] === '*') {
                symbolArr[i - 1] = (Number(symbolArr[i - 1]) * Number(symbolArr[i + 1])).toString()
                symbolArr.splice(i, 2)
                console.log(symbolArr)
                i--;
            }

        }
        for (let i = 0; i < symbolArr.length; i++) {
            if (symbolArr[i] === '+') {
                symbolArr[i - 1] = (Number(symbolArr[i - 1]) + Number(symbolArr[i + 1])).toString()
                symbolArr.splice(i, 2)
                i--;
                console.log(symbolArr)
            } if (symbolArr[i] === '-') {
                symbolArr[i - 1] = (Number(symbolArr[i - 1]) - Number(symbolArr[i + 1])).toString()
                symbolArr.splice(i, 2)
                console.log(symbolArr)
                i--;
            }

        }
        stageCount = 0
        console.log(symbolArr)
        toTrunk()
        console.log(symbolArr)
        display.value = symbolArr[0].toString()
        forPercentcount = symbolArr
        console.log(symbolArr)
        lastnum = Array.from(symbolArr[0])
        symbolArr = []
        console.log(lastnum + ' lastnum')


        //console.log(customFunc())
    } catch (err) {
        display.value = 'Error'
    }

}
const customFunc = function () {
    return new Function('return ' + display.value)()
}
function toChangeStyle(nameOfClass){
    const element = document.querySelectorAll('#acbtn')
    for(let i=0;i<element.length;i++){
        element[i].className=nameOfClass
    }
    console.log(element[0])
}

window.toDisplay = toDisplay
window.disClear = disClear
window.changeSign = changeSign
window.proc = proc
window.equals = equals
window.toChangeStyle=toChangeStyle
