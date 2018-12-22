import {Action, ActionCreator} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {RootState} from '../store';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_NAVIGATION = 'UPDATE_NAVIGATION';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export interface AppActionUpdatePage extends Action<'UPDATE_PAGE'> {page: string};
export interface AppActionUpdateOffline extends Action<'UPDATE_OFFLINE'> {offline: boolean};
export interface AppActionUpdateDrawerState extends Action<'UPDATE_DRAWER_STATE'> {opened: boolean};
export interface AppActionOpenSnackbar extends Action<'OPEN_SNACKBAR'> {};
export interface AppActionCloseSnackbar extends Action<'CLOSE_SNACKBAR'> {};
export interface AppActionUpdateNavigation extends Action<'UPDATE_NAVIGATION'> {};
export type AppAction = AppActionUpdatePage | AppActionUpdateOffline | AppActionUpdateDrawerState |
  AppActionOpenSnackbar | AppActionCloseSnackbar | AppActionUpdateNavigation;

type ThunkResult = ThunkAction<void, RootState, undefined, AppAction>;

export const navigate: ActionCreator<ThunkResult> = (path: string) => (dispatch) => {
  // Extract the page name from path.
  const page = path === '/' ? 'home' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  dispatch(updateDrawerState(false));
};

export const loadNavigation: ActionCreator<ThunkResult> = () => async dispatch => {
  try {
    const response = await fetch(`/api/navigation`);
    const data = await response.json();
    dispatch(updateNavigation(data.routeTree));
  } catch(error) {
    dispatch(updateNavigation(null));
  }
};

const loadPage: ActionCreator<ThunkResult> = (page: string) => async dispatch => {
  if (page === 'catalogue') {
      page = 'catalogue';
      import('../components/pages/catalogue');
      dispatch(updatePage(page, null));
      return;
  }

  const pageResponse = fetch(`/api/route/${page}`);
  import('../components/pages/page');

  try {
    const data = (await pageResponse).json();
    dispatch(updatePage(page, await data));
  } catch(error) {
    page = '404';
    import('../components/pages/page-404');
    dispatch(updatePage(page, null));
  }
};

const updateNavigation: ActionCreator<AppActionUpdateNavigation> = (data: any) => {
  return {
    type: UPDATE_NAVIGATION,
    data
  };
};

const updatePage: ActionCreator<AppActionUpdatePage> = (page: string, data: any) => {
  return {
    type: UPDATE_PAGE,
    page,
    data
  };
};

let snackbarTimer: number;

export const showSnackbar: ActionCreator<ThunkResult> = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  window.clearTimeout(snackbarTimer);
  snackbarTimer = window.setTimeout(() => dispatch({type: CLOSE_SNACKBAR}), 3000);
};

export const updateOffline: ActionCreator<ThunkResult> = (offline: boolean) => (dispatch, getState) => {
  // Show the snackbar only if offline status changes.
  if (offline !== getState().app!.offline) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};

export const updateDrawerState: ActionCreator<AppActionUpdateDrawerState> = (opened: boolean) => {
  return {
    type: UPDATE_DRAWER_STATE,
    opened
  };
};
