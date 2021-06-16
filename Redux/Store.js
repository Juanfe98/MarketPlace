import {
  createStore,
  combineReducer,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

//Reducers Connect Actions with Store
import cartItems from './Reducers/cartItems';
import productDetail from './Reducers/productDetail';

const reducers = combineReducers({
  cartItems: cartItems,
  productDetail: productDetail,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
