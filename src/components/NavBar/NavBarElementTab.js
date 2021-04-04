import React from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'

function NavBarElementTab({element}) {
	const [{colorMap}] = useDataLayerValue()

	return (
		<div className="navbar-search-tab flex-row">
			{/* symbol */}
			<div className="navbar-search-tab-symbol" style={{
				background: colorMap[element.category],
			}}>
				{element.symbol}
			</div>
			{/* other details */}
			<div className="navbar-search-tab-main">
				<div className="navbar-search-tab-value">
					<label>Name</label>
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

export default NavBarElementTab
