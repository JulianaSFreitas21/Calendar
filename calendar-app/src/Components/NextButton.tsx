import { ArrowRight } from "phosphor-react";
import { monthDatesTypes,MonthDatesTypes } from "../configs/monthDatesTypes";

interface PreviusButtonProps{
    monthdaysType: MonthDatesTypes;
    changeMonth:(type: MonthDatesTypes) => void;
}

export function NextButton({monthdaysType, changeMonth}:PreviusButtonProps){
    let infoMonth = monthDatesTypes[monthdaysType];
  
  return(
    <>
    { Object.entries(infoMonth).map(([key,value]) => {          
        if (key !== 'next') {
          return;
        }
                     
        return (
            <button className="text-rose-200 disabled:text-rose-100" key={key} disabled={ monthdaysType === 'Dec'} onClick={()=> changeMonth(value as MonthDatesTypes)}>
              <ArrowRight weight="bold"/>
            </button>
        );
      })}
    </>
  )
}