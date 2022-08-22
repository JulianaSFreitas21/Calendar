import { monthDatesTypes,MonthDatesTypes } from "../configs/monthDatesTypes";
import { ArrowLeft } from "phosphor-react";

interface PreviusButtonProps{
    monthdaysType: MonthDatesTypes;
    changeMonth:(type: MonthDatesTypes) => void;
}

export function PreviusButton({monthdaysType, changeMonth}:PreviusButtonProps){
    let infoMonth = monthDatesTypes[monthdaysType];
  
  return(
    <>
    { Object.entries(infoMonth).map(([key,value]) => {          
        if (key !== 'previus') {
          return;
        }
                     
        return (
            <button className=" text-rose-300 disabled:text-rose-200" key={key} disabled={monthdaysType === 'Jan'} onClick={()=> changeMonth(value as MonthDatesTypes)}>
              <ArrowLeft weight="bold"/>
            </button>
        );
      })}
    </>
  )
}