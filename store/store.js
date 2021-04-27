import {createStore} from 'redux';
import ForumReducer from '../reducers/ForumReducer';
const store = createStore(ForumReducer);
export default store;