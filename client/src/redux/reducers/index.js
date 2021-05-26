import { combineReducers } from 'redux';

// import all reducers
import { userInfoReducer } from './userInfoReducer';
import { goodsInfoReducer } from './goodsInfoReducer';
import { goodsPerCategoryReducer } from './goodsPerCategoryReducer';

// all reducers takes an object with each properties express one reducers
const allReducers = combineReducers({
  userInfo: userInfoReducer,
  goods: goodsInfoReducer,
  categoryGoods: goodsPerCategoryReducer,
});

export default allReducers;
