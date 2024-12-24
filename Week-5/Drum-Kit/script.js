const timeoutIds = {};
const btn = document.querySelectorAll('button').length;
for (let i = 0;i < btn; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
       playSound(`Key${this.innerHTML}`);       
        
    });
    
};

let keyDown = document.addEventListener('keydown',event => {
   
    playSound(event.code);
    const btn = document.querySelectorAll('button');
    for(let i = 0 ; i < btn.length;i++){
        if(event.code === `Key${btn[i].innerHTML}`){
            btn[i].style.backgroundColor = 'lightblue';
        }
    }    
});

let keyUp = document.addEventListener('keyup', event => {
    const btn = document.querySelectorAll('button');
    for (let i = 0; i < btn.length; i++) {
        if (event.code === `Key${btn[i].innerHTML}`) {
            timeoutIds[event.code] = setTimeout(() => {
                btn[i].style.backgroundColor = '';
                delete timeoutIds[event.code];
            }, 500);
        }
    }
});






function changeColor(){
    for(i = 0 ; i < key1 ; i++){       
        const btn = document.querySelectorAll('button');       
        glob = btn[i]
        setTimeout(() => {
       
            glob.style.backgroundColor = '';
        }, 500);
        
    }  
}

function playSound(voice){
    switch(voice){
        case "KeyA":
            var audio = new Audio(`sounds/boom.wav`);
            audio.play();
            break;
        case "KeyS":
            var audio = new Audio(`sounds/clap.wav`);
            audio.play();
            break;
        case "KeyD":
           var audio = new Audio(`sounds/hihat.wav`);
            audio.play();
            break;
        case "KeyF":
            var audio = new Audio(`sounds/kick.wav`);
            audio.play();
            break;
        case "KeyG":
           var audio = new Audio(`sounds/openhat.wav`);
            audio.play();
            break;
        case "KeyH":
           var audio = new Audio(`sounds/ride.wav`);
            audio.play();
            break;
        case "KeyJ":
            var audio = new Audio(`sounds/snare.wav`);
            audio.play();
            break;
        case "KeyK":
            var audio = new Audio(`sounds/tink.wav`);
            audio.play();
            break;
        case "KeyL":
            var audio = new Audio(`sounds/tom.wav`);
            audio.play();
            break;
    }
}