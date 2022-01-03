import { AllAPIData } from './SubReducer/ApiData';
import {combineReducers} from 'redux';

const Reducer=combineReducers({
    Allapidata:AllAPIData,
});

export default Reducer;