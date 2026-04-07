//FIRST CALCULATOR
const num1 = document.getElementById('input1')


const num2 = document.getElementById('input2')
const opertor = document.getElementById('input3')
const calculate = document.getElementById('btn1')
const vyvid = document.getElementById('par1')
calculate.addEventListener('click',function(){
   const nu1 = Number(num1.value)
   console.log(num1);
   const nu2 = Number(num2.value)
   const operator = opertor.value


   
    let result;
    if(operator === '+'){
        result = nu1 + nu2
    }
    else if(operator === '-'){
        result = nu1 - nu2
    }
    else if(operator === '*'){
        result = nu1 * nu2
    }
    else if(operator === '/'){
        if(nu2 > 0)
            result = nu1 / ny2
        else{
           result = 'Error';
        }
    }
    vyvid.textContent = result
})



//SECOND <>
const numb1 = document.getElementById('input4');
const numb2 = document.getElementById('input5');
const resultat = document.getElementById('btn2');
const vyvid1 = document.getElementById('par2');

resultat.addEventListener('click',function(){
    const numbe1 = Number(numb1.value);
    const numbe2 = Number(numb2.value);

    let res;

    if(numbe1 > numbe2){
        res = `${numbe1} bilshe`;
    }
    else if(numbe1<numbe2){
        res = `${numbe2} bilshe`;
    }
    else if(numbe1 === numbe2){
        res = `${numbe1} = ${numbe2}`;
    }

    vyvid1.textContent = res;
})



// THREE D x1 x2


const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const znayty = document.getElementById('btn3');
const DD = document.getElementById('D');
const x11 = document.getElementById('x1')
const x22 = document.getElementById('x2')
const xx = document.getElementById('x')

znayty.addEventListener('click',function(){
    const aa = Number(a.value);
    const bb = Number(b.value);
    const cc = Number(c.value);

    let resu;
    let resu2;
    const D = bb**2 - 4 * aa * cc;
    const x1 = (-bb + Math.sqrt(D))/2*aa;
    const x2 = (-bb - Math.sqrt(D))/2*aa;
    const x = - (b) / (2 * aa)

    if(D < 0){
        resu =  'Немає коренів'
    }
    else if(D === 0){
        resu = x
        
    }
    else if(D > 0){
        resu = x1
        resu2 = x2
    }
    DD.textContent = `D = ${D}`;
    x11.textContent = resu
    x22.textContent =  resu2
})



//Guess number
const number = document.getElementById('input6');
const guess = document.getElementById('btn4');
const sproby = document.getElementById('par3');
const chyslo = document.getElementById('par4');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let rahunok = 0;
guess.addEventListener('click', function(){
    const n = Number(number.value);
    rahunok++;
    sproby.textContent = `${rahunok} спроб`;
    if(n === randomNumber){
        chyslo.textContent = `Вгадано: ${randomNumber}`;
    }
    else if(n < randomNumber){
        chyslo.textContent = `Загадане число більше`;
    }
    else{
        chyslo.textContent = `Загадане число менше`;
    }
    number.value = '';
})


// Rock paper or scissors
const rps = document.getElementById('input7');
const play = document.getElementById('btn5');
const your = document.getElementById('par5');
const bot = document.getElementById('par6');

play.addEventListener('click',function(){
    const choices = ['rock', 'paper', 'scissors'];
    const uc = rps.value;
    const bots = choices[Math.floor(Math.random() * choices.length)];

    your.textContent = `Ти вибрав: ${uc}`;
    bot.textContent = `Противник вибрав: ${bots}`;

    if(uc === bots){
        alert("Нічия!");
    }
    else if(uc === "rock" && bots === "scissors"){
        alert("Ти виграв!");
    }
    else if(uc === "paper" && bots === "rock") {
        alert("Ти виграв!");
    }
    else if(uc === "scissors" && bots === "paper") {
        alert("Ти виграв!");
    }
    else{
        alert("Ти програв!");
    }
    rps.value = '';
}
)


//reaction game
const playstop = document.getElementById('btn6');
const timerDisplay = document.getElementById('timer');
const re = document.getElementById('par8');
let timer;
let time = 0;

playstop.addEventListener('click', function() {
    if (playstop.textContent === "Start") {
        playstop.textContent = "Stop";
        timer = setInterval(function() {
            time += 0.01;
            timerDisplay.textContent = time.toFixed(2);
        }, 1);
    }
    else {
        playstop.textContent = "Start";
        clearInterval(timer);
    }
    if(time === 10.000){
        re.textContent = "Вітаємо! Ви встигли за 10 секунд.";
    }
    else if(time <= 10.000 && time > 0 || time > 10.000){
        re.textContent = `Ви зупинили таймер на ${time.toFixed(2)} секунд.`;
        time = 0;
    }
});
