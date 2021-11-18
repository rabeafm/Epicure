import { useSelector } from 'react-redux';
import { AppState } from '../store/AppState';

const Chef = (props: any) => {
  const chef = useSelector((state: AppState) => state.chef);
  console.log(props);
  
  return <div>Chef {props.id + ' ' + chef.name} Page</div>;
};

export default Chef;
