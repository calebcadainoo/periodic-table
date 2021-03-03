export const initialState = {
	user: null,
	colorMap: {
    "noble gas": "#4d42b8",
    "alkaline earth metal":"#e45143",
    "diatomic nonmetal":"#D81159",
    "alkali metal":"#8F2D56",
    "transition metal":"#56423e",
    "post-transition metal":"#7f4800",
    "polyatomic nonmetal": "#00A300",
    actinide: "#7f69e7",
    lanthanide:"#008f7a",
    metalloid:"#1e445d",
  },
}

export const actionTypes = {
	SET_USER: 'SET_USER',
	SET_PERIODIC_COLORS: 'SET_PERIODIC_COLORS',
}

const reducer = (state, action) => {
	
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user,
			}
		case actionTypes.SET_PERIODIC_COLORS:
			return {
				...state,
				colorMap: action.colorMap,
			}
		default:
			return state
	}
}

export default reducer 