import { MapPin } from "phosphor-react"



export function WidgetForm(){
    return(
        <div className={`bg-[#00000079] flex justify-center items-center absolute top-0 left-0 w-full h-full `}>
            <form action="get" method="get" className="bg-white drop-shadow-md rounded-md flex w-[500px] min-w-[300px] flex-col p-6 ">
                <div className="flex justify-between mb-[20px]">
                    <input className={`bg-zinc-100 placeholder:text-zinc-400 text-sm border-none focus:ring-rose-200 resize-none focus:ring-1 focus:border-pink-200 focus:outline-none pl-2 rounded-md w-full mr-6`} type="text" placeholder="Title" required />
                    <button className="bg-rose-200 text-zinc-50 px-4 rounded-md focus:bg-rose-300">Send</button>
                </div>
                <div className="flex justify-between mb-[20px]">
                    <div>
                        <input className={`bg-zinc-100 placeholder:text-zinc-400 pl-2 rounded-md mr-4 text-sm focus:ring-rose-200 resize-none  border-none focus:ring-1 focus:outline-none`} type="time" min="00:00" max="23:00" required/>
                        <span className="text-zinc-400 text-sm">Start</span>
                    </div>
                    <div>
                        <input  className={`bg-zinc-100 placeholder:text-zinc-400 pl-2 rounded-md mr-4 text-sm focus:ring-rose-200 border-none resize-none focus:ring-1 focus:outline-none`} type="time" min="00:00" max="23:00" required/>
                        <span className="text-zinc-400 text-sm">Finish</span>
                    </div>
                </div>
                <div className="relative">
                    <input className={`my-4 bg-zinc-100 relative placeholder:text-zinc-400 text-sm focus:ring-rose-200 resize-none focus:ring-1 border-none focus:outline-none pl-2 rounded-md w-full mr-6`} type="text" placeholder="Location" />
                    <MapPin height={'20px'} className="absolute right-2 bottom-6 text-zinc-400 bg-zinc-100"></MapPin>
                </div>
                <textarea name="description" id="description" placeholder="Short description" className={`h-[100px] w-full bg-zinc-100 placeholder:text-zinc-400 pl-2 pt-[1px] border-none rounded-md mr-4 text-sm focus:ring-rose-200 resize-none focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-rose-200 scrollbar-track-rose-50`}></textarea>
            </form>
        </div>
    )
}