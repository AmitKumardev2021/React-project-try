import React from 'react'

const Alert = (props) => {

    const capitali=(word)=>{
        const first = word.toLowerCase();
        return first.charAt(0).toUpperCase()+first.slice(1)
 
    }
    return (
        <div style={{height:'10px'}}>

      { props.alert&& <div>
             <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert">
        <strong>{capitali(props.alert.type)}</strong> : {props.alert.msg}
       
      </div>
        </div>}
        </div>
    )
}

export default Alert;
