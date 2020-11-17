/* RUN THE COOMENTED SCRIPT BELOW  INTERNALLY 
(I.E IN HTML ) AND NOT EXTERNALLY  AND IT  WILL RUN OTHERWISE WILL NOT RUN PROPERLY
window.addEventListener('keydown', function(e){
  const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 
  if(!audio) return; // stop the function from running...
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing'); 
});  

function removeTransition(e) {
if (e.propertyName !== 'transform') return; // skip it if its not a transform
this.classList.remove('playing');
   }



const keys = document.querySelectorAll(' .key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
*/