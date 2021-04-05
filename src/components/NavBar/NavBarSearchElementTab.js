import React from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'

function NavBarSearchElementTab({element, func}) {
	const [{colorMap}] = useDataLayerValue()

	return (
	<div onClick={() => func(element?.number)} className="navbar-search-tab flex-row">
		{/* symbol */}
		<div className="navbar-search-tab-symbol" style={{
			background: colorMap[element?.category],
		}}>
			{element.symbol}
		</div>
		{/* other details */}
		<div className="navbar-search-tab-main">
			<div className="navbar-search-tab-value">
				<label>{`${element?.number}. Name`}</label>
				<div>{element?.name}</div>
			</div>
			<div className="navbar-search-tab-value">
				<label>Density</label>
				<div>{`${element?.density} g/cm³`}</div>
			</div>
		</div>
	</div>
	)
}

export default NavBarSearchElementTab
