const TASK = document.getElementById('task')
const DESCRIPTION = document.getElementById('description')
const STARTBTN = document.getElementById('startbtn')
const HOURS = document.getElementById('hours')
const MINUTES = document.getElementById('minutes')
const SECONDS = document.getElementById('seconds')
const TABLE = document.getElementById('table')

let IntervalId
let sec = 0
let min = 0
let hr = 0
function starting(){
    if(STARTBTN.textContent === 'START') {
        STARTBTN.textContent = 'STOP'
        STARTBTN.style.setProperty('background-color','red')

        IntervalId = setInterval(function(){
            SECONDS.textContent = (sec++).toString().padStart(2,'0')
            if(sec >= 60) {
                sec = 0
                min++
                MINUTES.textContent = min.toString().padStart(2,'0')
            }
            if(min >= 60) {
                min = 0
                hr++
                HOURS.textContent = hr.toString().padStart(2,'0')
            }
            if(hr >= 24){
                hr = 0
            } 
        },1000)
    }
    else if(STARTBTN.textContent === 'STOP') {
        clearInterval(IntervalId)       
        STARTBTN.textContent = 'START'
        SECONDS.textContent = '00'
        HOURS.textContent = '00'
        MINUTES.textContent = '00'
        STARTBTN.style.setProperty('background-color','green')
        TABLE.innerHTML += `<tr>
        <td>${TASK.value}</td>
        <td>${DESCRIPTION.value}</td>
        <td>${hr.toString().padStart(2,'0') + ':' + min.toString().padStart(2,'0') + ':' + sec.toString().padStart(2,'0')}</td>
        </tr>`
        TASK.value = ''
        DESCRIPTION.value = ''

    }

}
STARTBTN.addEventListener('click',starting)