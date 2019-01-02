import {Action, ActionCreator} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {Nav} from 'headless-poc-server/dist/types';

declare const process: any;

import {RootState} from '../store';
import {getCatalogueNav} from '../services/catalogue-service';
import {updateDrawerState, AppActionUpdateDrawerState, loadPage} from './app';

export const UPDATE_PATH = 'UPDATE_PATH';
export const UPDATE_NAV_ITEMS = 'UPDATE_NAV_ITEMS';

export interface NavigationActionUpdatePath extends Action<'UPDATE_PATH'> {pathName: string, hash: string};
export interface NavigationActionUpdateNavItems extends Action<'UPDATE_NAV_ITEMS'> {};
export type NavigationAction = NavigationActionUpdateNavItems | NavigationActionUpdatePath;

type ThunkResult = ThunkAction<void, RootState, undefined, NavigationAction|AppActionUpdateDrawerState>;

/**
 * Navigates to a certain path+hash combination.
 * Shows/hides relevant pages, and updates the path/hash state.
 * @param path Location path value.
 * @param hash Location hash value (without # sign).
 */
export const navigate: ActionCreator<ThunkResult> = (path: string, hash: string) => (dispatch) => {
  const pathName = path === '/' || !path ? 'home' : path.replace(/(^\/|\/$)/g, '');
  dispatch(loadPage(pathName));
  dispatch(updatePath(pathName, hash));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  dispatch(updateDrawerState(false));
};

export const loadNavItems: ActionCreator<ThunkResult> = () => async dispatch => {
  try {
    const response = await fetch(`/api/navigation`);
    const root: Nav = await response.json();
    const items = [
      {...root, routes: []},
      ...root.routes,
      (process.env.NODE_ENV === 'development' ? getCatalogueNav() : [])
    ];
    
    dispatch(updateNavItems(items));
  } catch(error) {
    dispatch(updateNavItems(null));
  }
};

const updateNavItems: ActionCreator<NavigationActionUpdateNavItems> = (routes: Nav[]) => {
  return {
    type: UPDATE_NAV_ITEMS,
    data: routes
  };
};

const updatePath: ActionCreator<NavigationActionUpdatePath> = (pathName: string, hash: string) => {
  return {
    type: UPDATE_PATH,
    pathName,
    hash
  };
};