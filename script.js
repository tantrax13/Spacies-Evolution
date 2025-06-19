const btn1 = document.querySelector('.Button_C');
const btn2 = document.querySelector('.Button_C2');
const btn3 = document.querySelector('.Button_C3');
const connect = document.querySelector('.connect');
const play_button = document.querySelector('.a_play');
const body = document.querySelector('.body');

play_button.addEventListener('mouseover' , () => {
    connect.style.backgroundColor = "black"
    body.style.backgroundColor = "black"
    btn3.style.visibility = "hidden"
    btn3.style.transition = "0.1s"
    play_button.style.fontSize = "16vmax"
});

play_button.addEventListener('mouseout' , () => {
    connect.style.backgroundColor = "white"
    body.style.backgroundColor = "white"
    btn3.style.visibility = "visible"
    btn3.style.transition = "0.5s"
    play_button.style.fontSize = "8vmax"
});


btn1.addEventListener('click', ()=>{
    window.scrollTo({
        top:1000,
        left:0,
        behavior: "smooth"
    })
})



btn2.addEventListener('click', ()=>{
    window.scrollTo({
        top:1000,
        left:3000,
        behavior: "smooth"
    })
})

btn3.addEventListener('click', ()=>{
    window.scrollTo({
        top:1000,
        left:0,
        behavior: "smooth"
    })
})
