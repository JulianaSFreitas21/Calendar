import './index.css';
import {Calendar} from './Components/Calendar'
import { WidgetForm } from './Components/WidgetForm';
import { WidgetSchedule } from './Components/idgetSchedule';

function App() {
  var click = false;

  return (
      <div className='flex-inline justify-center mt-[85px]'>
        <Calendar/>
        {click? <WidgetForm/> : ''}
        <WidgetSchedule/>
      </div>
  );
}

export default App;
