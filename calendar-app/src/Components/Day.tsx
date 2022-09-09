import { format } from 'date-fns';

interface DayProps{
    text: string,
}

let currentDay =  format(new Date (), 'd') + '';

export function Day({text} : DayProps){

    return(
        <button autoFocus={text == currentDay} disabled={text === ''} className={`bg-white py-4 text-zinc-500 rounded-md hover:bg-rose-300 hover:text-white focus:bg-rose-300 focus:text-white focus:outline-none disabled:hover:bg-white`}type="button">
           {text}
        </button>
    )
}