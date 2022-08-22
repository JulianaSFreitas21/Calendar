export function Weekdays(){
    const weedays = ['Mon','Tues','Wed','Thu','Fri','Sat','Sun'];

    return(
    <div className="flex justify-around py-4">
    { Object.entries(weedays).map(([key,value]) => {          
        return (
            <span key={key}>{value}</span>
        );
      })}
    </div>
  )
} 