import { CounterTitle } from './CounterTitle/CounterTitle';
import { increment, decrement, reset } from 'redux/counterSlice';
import { useDispatch } from 'react-redux';

export const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <CounterTitle />
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
