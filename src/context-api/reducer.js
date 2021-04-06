import pt from '../PeriodTableData.json'

export const initialState = {
	user: null,
	periodicTable: pt.elements,
	colorMap: {
    "noble gas": "#4d42b8",
    "alkaline earth metal":"#e45143",
    "diatomic nonmetal":"#D81159",
    // "alkali metal":"#8F2D56",
    "alkali metal":"#2a9df4",
    // "transition metal":"#56423e",
    // "transition metal":"#f1962e",
    // "transition metal":"#d4852a",
    "transition metal":"#806f52",
    // "post-transition metal":"#7f4800",
    "post-transition metal":"#f16c20",
    // "polyatomic nonmetal": "#00A300",
    // "polyatomic nonmetal": "#1e445d",
    "polyatomic nonmetal": "#005fda",
    // actinide: "#7f69e7",
    actinide: "#56423e",
    lanthanide:"#008f7a",
    // metalloid:"#1e445d",
    metalloid:"#00A300",
  },
	periodicElOpacity: 1,
	periodicDetails: false,
	periodicSelectedElement: undefined,
	periodicSearch: "hidebx",
	periodicSearchList: pt.elements,
}

export const actionTypes = {
	SET_USER: 'SET_USER',
	SET_PERIODIC_TABLE: 'SET_PERIODIC_TABLE',
	SET_PERIODIC_COLORS: 'SET_PERIODIC_COLORS',
	SET_PERIODIC_EL_OPACITY: 'SET_PERIODIC_EL_OPACITY',
	SET_DETAILS_MODAL: 'SET_DETAILS_MODAL',
	SET_SELECTED_ELEMENT: 'SET_SELECTED_ELEMENT',
	SEARCH_UI_TOGGLE: 'SEARCH_UI_TOGGLE',
	SEARCH_LIST: 'SEARCH_LIST',
}

const reducer = (state, action) => {
	console.log(action)

	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user,
			}
		case actionTypes.SET_PERIODIC_TABLE:
			return {
				...state,
				periodicTable: action.periodicTable,
			}
		case actionTypes.SET_PERIODIC_COLORS:
			return {
				...state,
				colorMap: action.colorMap,
			}
		case actionTypes.SET_PERIODIC_EL_OPACITY:
			return {
				...state,
				periodicElOpacity: action.periodicElOpacity,
			}
		case actionTypes.SET_DETAILS_MODAL:
			return {
				...state,
				periodicDetails: action.periodicDetails,
			}
		case actionTypes.SET_SELECTED_ELEMENT:
			return {
				...state,
				periodicSelectedElement: action.periodicSelectedElement,
			}
		case actionTypes.SEARCH_UI_TOGGLE:
			return {
				...state,
				periodicSearch: action.periodicSearch,
			}
		case actionTypes.SEARCH_LIST:
			return {
				...state,
				periodicSearchList: action.periodicSearchList
			}
		default:
			return state
	}
}

export default reducer 