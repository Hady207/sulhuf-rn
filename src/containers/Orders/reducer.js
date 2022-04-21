import {createActions} from 'reduxsauce';

export const {Types: OrdersTypes, Creators: OrdersActions} = createActions({
  ordersReq: null,
  ordersRes: ['data'],
  ordersPageReq: null,
  ordersPageRes: ['moreData'],
  orderFail: ['errorMessage'],
});

export const initialState = {
  isLoading: false,
  ordersData: [],
  pageLoader: false,
  offset: 10,
  errorMessage: null,
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrdersTypes.ORDERS_REQ:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case OrdersTypes.ORDERS_PAGE_REQ:
      return {
        ...state,
        pageLoader: true,
        offset: state.offset + 10,
      };
    case OrdersTypes.ORDERS_RES:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        ordersData: action.data,
      };
    case OrdersTypes.ORDERS_PAGE_RES:
      return {
        ...state,
        pageLoader: false,
        ordersData: [...state.ordersData, ...action.moreData],
        errorMessage: null,
      };
    case OrdersTypes.ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        ordersData: [],
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
