import React from 'react'

export default function Alert(props) {
  return (
 <div className={`alert alert-${props.alt.type}`} role="alert">
 {props.alt.msg}
</div>
  )
}
