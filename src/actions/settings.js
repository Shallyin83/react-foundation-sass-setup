import {CHANGE_BRAND} from '../constants/ActionTypes'
import store from '../store';

export function changeBrand() {
    console.log(store.getState().routing.locationBeforeTransitions.query.client);
    let brandName = store.getState().routing.locationBeforeTransitions.query.client
     return {
        type: CHANGE_BRAND,
        brandName
    }
}