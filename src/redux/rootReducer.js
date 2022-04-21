import {combineReducers} from 'redux';
// main app reducer
import {rootReducer as root} from '@containers/Root/reducer';
import {authReducer as auth} from '@containers/Auth/reducer';
import {dashboardReducer as dashboard} from '@containers/Dashboard/reducer';
import {createItemReducer as createItem} from '@containers/CreateItem/reducer';
import {ordersReducer as order} from '@containers/Orders/reducer';
import {updateItemReducer as updateItem} from '@containers/UpdateItem/reducer';
import {uploadReducer as upload} from '@containers/UploadFile/reducer';

const rootReducer = combineReducers({
  root,
  auth,
  dashboard,
  createItem,
  order,
  updateItem,
  upload,
});

export default rootReducer;
