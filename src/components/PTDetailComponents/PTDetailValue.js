import React from 'react'

function PTDetailValue(props) {
  return (
    <aside className="pt-det-element-info-box">
      <label>{props.label}</label>
      <div className="pt-det-element-info-value">
        {props.value}
      </div>
    </aside>
  )
}

export default PTDetailValue
