// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sound/tock.mp3')
const kick-drum = new Audio('sounds/kick-drum.mp3');
const hi-Hat = new Audio('sounds/hi-hat.mp3')
const snare-drum = new Audio('sound/snare-drum.mp3');


// Metronome timming
const kickDrumTiming = document.querySelector('#kick-drum-timing')
const snareDrumTiming = document.querySelector('#snare-drum-timing')
const hiHatTiming = document.querySelector('#hi-hat-timing')

// This function is called every 600ms
function update() {
    console.log(kick-drum timing)

    // Play the 'tick' sound
    tick.play();
    if(count % 4 === 0){
        tock.play()
        }else{
}
// Play the 'tick' sound
tick.play()
}
count ++
let currentCount = document.querySelector('#mCount')
currentCount.innerText = `${count % 4}`

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
