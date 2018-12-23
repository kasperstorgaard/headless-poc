import {Reducer} from 'redux';
import {Nav as NavItem} from 'headless-poc-server/dist/types';

import {
  UPDATE_PAGE,
  UPDATE_OFFLINE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  UPDATE_DRAWER_STATE,
  UPDATE_NAVIGATION
} from '../actions/app';
import {RootAction} from '../store';

export interface AppState {
  pathName: string;
  page: string;
  pageData: any;
  navigation: NavItem[];
  offline: boolean;
  drawerOpened: boolean;
  snackbarOpened: boolean;
}

const INITIAL_STATE: AppState = {
  page: '',
  pathName: '',
  pageData: {},
  navigation: [],
  offline: false,
  drawerOpened: false,
  snackbarOpened: false,
};

const app: Reducer<AppState, RootAction> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page,
        pathName: action.pathName,
        pageData: action.data
      };
    case UPDATE_NAVIGATION:
      return {
        ...state,
        navigation: action.data
      };
    case UPDATE_OFFLINE:
      return {
        ...state,
        offline: action.offline
      };
    case UPDATE_DRAWER_STATE:
      return {
        ...state,
        drawerOpened: action.opened
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbarOpened: true
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpened: false
      };
    default:
      return state;
  }
};

export default app;
