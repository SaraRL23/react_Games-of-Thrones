/* eslint-disable no-restricted-globals */
import React from 'react'
import funcionAsociadaBoton from "react";

export const GoBack = () => {
    function funcionAsociadaBoton(){
           history.go(-1);
        
        }
  return (
<div>
    <div>GoBack</div>
    <input type="button" value="Mi botón" onClick="funcionAsociadaBoton()"></input>
    </div>
  )
}
