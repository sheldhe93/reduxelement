import { combineReducers } from 'redux';
import agree from './agree';
import about from './about';


const reducers = combineReducers({
  agree, about
});

export default reducers;