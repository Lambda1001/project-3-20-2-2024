
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(()=>{
    let current_time = new Date();

    hours.innerText = (current_time.getHours()<10?"0":" ") + current_time.getHours();
    minutes.innerText = (current_time.getMinutes()<10?"0":"")+current_time.getMinutes();
    seconds.innerText = (current_time.getSeconds()<10?"0":"")+current_time.getSeconds();
},1000);


gsap.from('.welcome_text',{duration: 1.5,ease: "expo.inOut", x: -1250})

