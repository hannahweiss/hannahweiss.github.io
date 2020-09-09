import React from "react"
import Button from 'react-bootstrap/Button'
import buttonStyle from './../styles/classButton.module.css'


export default function classButton(props){


    function handleClick() {
        
      }
    
    
    return (
        <div>
            <Button variant="link" className={buttonStyle.expandButton} onClick={handleClick}>
                hello
            </Button>
        </div>
        
    )

}