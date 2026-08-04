
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();


const oscillator = audioCtx.createOscillator();

const x = x

oscillator.type = 'sawtooth';


oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);


oscillator.connect(audioCtx.destination);

if x true {	
oscillator.start();
oscillator.stop(audioCtx.currentTime + Infinity);
};

function playSineNumber(num) {
  oscillator.type = 'sine'; 
  oscillator.frequency.value = num; 
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  
  setTimeout(() => {
    oscillator.stop();
    audioCtx.close();
  }, 1000);
}
playSineNumber(440);
