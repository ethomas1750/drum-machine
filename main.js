// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sound/tock.mp3')
let count = 0

// This function is called every 600ms
function update() {

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
def arrow_left(event):
    global tempo, scale, tempo_range
    if tempo - 10 >= tempo_range[0]:
        tempo -= 10
    else:
        tempo -= (tempo-tempo_range[0])
    scale.set(tempo) 

def arrow_right(event):
    global tempo, scale, tempo_range
    if tempo + 10 <= tempo_range[1]:
        tempo += 10
    else:
        tempo += (tempo_range[1]-tempo)
    scale.set(tempo) 

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
