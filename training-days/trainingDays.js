//The scope of `random` 

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);

    if (random === 0){
        return 'Marathon';
    }else if(random === 1){
        return 'Triathlon';
    }else if(random === 2){
        return 'Pentathlon';
    }
};

// The scope of `days` 

const getTrainingDays = event => {
   let days;

   if(event === 'Marathon'){
    days = 50;
   }else if(event === 'Triathlon'){
    days = 100;
   }else if(event === 'Pentathlon'){
    days = 200;
   }
return days;
};

// The scope of `name`

const name = 'Nala';

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
}

const logTime = (name, event) => {
    console.log(`${name}'s time to train is: ${days} days`);
}