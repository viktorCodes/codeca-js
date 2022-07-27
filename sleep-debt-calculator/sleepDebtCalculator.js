/* Sleep Debt Calculator */

//GET SLEEP HOURS


const getSleepHours = (day) =>{

    switch(day){
        case 'monday':
            return 9
            break;
            case 'tuesday':
                return 8
                break;
                case 'wednesday':
                    return 7
                    break;
                    case 'thursday':
                        return 8
                        break;
                        case 'friday':
                            return 7
                            break;
                            case 'saturday':
                                return 6
                                break;
                                case 'sunday':
                                    return 8
                                    break;
                                    default:
                                        return 'Error!'
    };
};

//GET ACTUAL SLEEP HOURS

const getActualSleepHours = () => 

getSleepHours('monday') +
getSleepHours('tuesday') +
getSleepHours('wednesday') +
getSleepHours('thursday') +
getSleepHours('friday') +
getSleepHours('saturday') +
getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

//GET IDEAL SLEEP HOURS

const getIdealSleepHours = () => {
    let idealHours = 9;
    return idealHours * 7
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

//CALCULATE SLEEP DEBT

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(); 

    if(actualSleepHours === idealSleepHours ){
        console.log('You got the perfect amount of sleep!')

        
    }else if(actualSleepHours > idealSleepHours){
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than needed!')
    }else if(actualSleepHours < idealSleepHours){
       console.log( 'You should get some rest because you have slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week.')
    }else{
        console.log('Error! something went wrong, check your code.');
    };
};
