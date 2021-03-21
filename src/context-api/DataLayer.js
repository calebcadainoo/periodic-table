import React, {
	createContext,
	useContext,
	useReducer
} from 'react'

// prepare the datalayer
export const DataLayerContext = createContext()

export const DataLayer = ({ initialState, reducer, children }) => (
	<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</DataLayerContext.Provider>
)

// allow data pulling from DataLayer
export const useDataLayerValue = () => useContext(DataLayerContext)