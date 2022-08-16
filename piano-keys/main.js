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

    // Write a loop that runs the array elements through the function
notes.forEach(eventAssignment);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');


// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;


// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function (){
    nextTwo.hidden = false;
    nextOne.hidden = true;
  
    document.getElementById('letter-note-five').innerHTML = 'D';
     document.getElementById('letter-note-six').innerHTML = 'C'
  } 
  