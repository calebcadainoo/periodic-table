import React from 'react'

function PTDetailLabel(props) {
  return (
    <div className="pt-det-group-label flex-row">
      <img src={props.image} alt="Element Overview"/>
      <div className="pt-det-group-name">
        {props.label}
      </div>
    </div>
  )
}

export default PTDetailLabel
