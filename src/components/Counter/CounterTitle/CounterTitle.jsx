import { useSelector } from 'react-redux';

export const CounterTitle = () => {
  const title = useSelector(state => state.counter.value);

  return <h1>{title}</h1>;
};
