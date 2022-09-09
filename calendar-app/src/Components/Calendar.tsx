import { useState } from "react";

import { format } from 'date-fns'; 

import { MonthDays } from "./MonthDays";
import { monthDatesTypes, MonthDatesTypes } from "../configs/monthDatesTypes";
import { PreviusButton } from "./PreviusButton";
import { NextButton } from "./NextButton";
import { Weekdays } from "./Weekdays";


export function Calendar() {

  let currentMonth =  format(new Date (), 'LLL');

  let month: MonthDatesTypes = currentMonth as MonthDatesTypes;
  const [monthdatestypes, setMonthdatestypes] = useState<MonthDatesTypes>(month);
 
  return (
    <div className="bg-white drop-shadow-md rounded-md flex flex-col p-6 max-w-[680px] mx-auto" >
      <div className="flex justify-between p">
        <PreviusButton monthdaysType={monthdatestypes} changeMonth={setMonthdatestypes}/>
        <h1 className="text-zinc-500" >{monthDatesTypes[monthdatestypes].title} of {monthDatesTypes[monthdatestypes].year}</h1>
        <NextButton monthdaysType={monthdatestypes} changeMonth={setMonthdatestypes}/>
      </div>
      <Weekdays/>
      <MonthDays monthdaysType={monthdatestypes}/>
    </div>
  );
}