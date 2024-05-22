
import * as actionTypes from './actions';

const getBorderRadiusFromLocalStorage = () => {
  const storedBorderRadius = localStorage.getItem('borderRadius');
  return storedBorderRadius ? parseInt(storedBorderRadius, 10) : 4;
};

export const initialState = { 
  isOpen: [],
  defaultId: 'default',
  borderRadius: getBorderRadiusFromLocalStorage(),
  opened: false,
  openNotif: false,
  openSidebarMobile: false
};

const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.OPEN_NOTIF:
      return {
        ...state,
        openNotif: action.openNotif
      };
    case actionTypes.OPEN_SIDEBAR_MOBILE:
      return {
        ...state,
        openSidebarMobile: action.openSidebarMobile
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state;
  }
};

export default customizationReducer;
