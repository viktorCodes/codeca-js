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