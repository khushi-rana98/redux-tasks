import {useDispatch,useSelector} from 'react-redux';
import { increment, decrement , reset } from './slice';

function Counter(){

    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();

    return(
       <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=>dispatch(increment(5))}>increment</button>
        <button onClick={()=>dispatch(decrement(2))}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
       </div>
    )
}
export default Counter;