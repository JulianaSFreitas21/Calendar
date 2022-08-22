import { Day } from "./Day";
import { monthDatesTypes, MonthDatesTypes } from "../configs/monthDatesTypes";

interface monthDaysProps{
    monthdaysType: MonthDatesTypes;
}

export function MonthDays({monthdaysType} : monthDaysProps){
    let infoMonth = monthDatesTypes[monthdaysType];

    return(
        <div className={`grid grid-cols-7`}>
            { Object.entries(infoMonth.days).map((value,key) => {                            
                return (
                    <Day key={key} text={value[1]}/>
                );
                
            })}
        </div>
    )
}