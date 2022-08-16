// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];

const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = function (event) {
    event.target.style.backgroundColor = 'green'
  }
  const keyReturn = function(event){
    event.target.style.backgroundColor = '';
  };

  // Write a named function with event handler properties
let eventAssignment = function(note) {
    note.onmousedown = function () {
       keyPlay(event);
    }
    note.onmouseup = function(){
      keyReturn(event);
    }
    };