const schedules = [
   {
    title: 'Camila meeting',
    start: '9:30',
    finish: '10:30',
    location: 'SP- Itaquera',
    shortDescription: 'Camila wedding',
    },
   {
    title: 'Juliana wedding',
    start: '19:30',
    finish: '21:30',
    location: 'SP- Guarulhos',
    shortDescription: 'Juliana wedding',
    },
   {
    title: 'Lucas get out',
    start: '14:00',
    finish: '18:00',
    location: 'Microsoft Teams',
    shortDescription: 'Lucas get out',
    },
]

var schedule = true;

export function WidgetSchedule(){

    return(
        <div className="w-full mt-4">
            <table className="w-full flex justify-center items-center">
                <tbody className="w-full">
                    <tr className="grid grid-cols-5 px-20 py-6 bg-zinc-100 border text-zinc-500">
                        <td>Title</td>
                        <td>Start</td>
                        <td>Finish</td>
                        <td>Location</td>
                        <td>Short Description</td>
                    </tr>
                {schedule? (
                    <>
                        { Object.entries(schedules).map(([key,value]) => {          
                                return (
                                    <tr key={key} className="w-full text-slate-400 odd:bg-slate-50 even:bg-white grid grid-cols-5 px-20 py-6">
                                        <td>{value.title}</td>
                                        <td>{value.start}</td>
                                        <td>{value.finish}</td>
                                        <td>{value.location}</td>
                                        <td>{value.shortDescription}</td>
                                    </tr>
                                );
                            })}
                    </>):(
                        <tr className="w-full text-slate-400 bg-white flex justify-center py-6 items-center">
                            <td>There is no commitment this day</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}