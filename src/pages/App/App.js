import { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../../components/Header/Header'
import SortView from '../../components/SortView/SortView'
import * as Sorts from '../../control/sorts';
import { sleep } from '../../utils/utilities';
import convertGraphFormat from '../../control/convertGraphFormat';


function App() {

  const [isRunning, setIsRunning] = useState(false)
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();
  const refCancelFunc = useRef();
  const refStartFunc = useRef();
  const [curItr, setCurItr] = useState();

  const onStart = () => {
    if(isRunning || !sortType) {
      // sort is running, can't change it
      if(isRunning && curItr && refStartFunc.current) {
        return refStartFunc.current(undefined, inter_func, curItr).then();
      }
      return ;
    }
    setIsRunning(true);
    
    const initalData = [6,4,8,7,2,9,4,5,6];
    // const sTypeLowerCase = sortType.toLowerCase();
    const {start, stop} = Sorts[`${sortType}`]();
    refStartFunc.current = start;
    refCancelFunc.current = stop;
    start(initalData, inter_func);
  };

  const inter_func = async (list, swap_indexes) => {
    // console.log("inter func!!!");
    setData(convertGraphFormat({data:list, targets:swap_indexes}));
    await sleep(500);
  }

  const onCancel = () => {
    if(refCancelFunc.current !== undefined){
      const runningItr = refCancelFunc.current();
      if(runningItr) {
        setCurItr(runningItr);
      }
    }
    // setIsRunning(false);
  }
  
  const onReset = () => {
    if(isRunning) {
      onCancel();
      setIsRunning(false);
    }
    
    refStartFunc.current = undefined;
    refCancelFunc.current = undefined;
    setData([]);
    setSortType();
  };

  const onSelect = (sType) => {
    if(isRunning) {
      // sort is running, can't change it
      return ;
    }
    setSortType(sType);
  }

  const onDone = (ms_spend) => {
    console.log(`total time spent : ${ms_spend}ms`);
    setIsRunning(false);
  }

  // useEffect(()=>{
  // }, []);

  return (
    <div className="App">
      <Header onReset={onReset} onStart={onStart} onSelect={onSelect} onCancel={onCancel} sortType={sortType} />
      <SortView data={data} />
    </div>
  );
}

export default App;
