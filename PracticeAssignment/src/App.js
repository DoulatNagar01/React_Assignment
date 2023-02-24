import { BodyBox } from './component/BodyBox';
import { Heading } from './component/Heading';
import './CSS/App.css';



function App() {
  return (
    <>
      <Heading/>
      <div className='MainBody'>
      <BodyBox classname={"BoxFirst"}/>
      <BodyBox classname={"BoxMid"}/>
      <BodyBox classname={"BoxLast"}/>
      </div>
    </>
  );
}

export default App;
