interface DayProps{
    text: string,
}

export function Day({text} : DayProps){
    return(
        <button disabled={text === ''} className={`bg-white py-4 rounded-md hover:bg-rose-300 hover:text-white disabled:hover:bg-white`}type="button">
           {text}
        </button>
    )
}