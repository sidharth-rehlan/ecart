import { red } from '@material-ui/core/colors';
import React from 'react'
import { useState } from 'react'

function ColorForm() {
    const [disableButton, setDisableButton] = useState(false);
    const [buttonColor, setButtonColor] = useState('red');

    const checkboxClickHandler = (e)=>{
        setDisableButton(e.target.checked);
        setButtonColor(e.target.checked ? 'grey' : 'red');

    }

    return (
        <div>
            <form action="">
                <input type="checkbox" name="" id="" onClick={checkboxClickHandler}/>
                <button disabled={disableButton} style={{backgroundColor: buttonColor}}>Action</button>
            </form>
        </div>
    )
}

export default ColorForm
