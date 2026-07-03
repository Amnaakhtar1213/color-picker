  import React, {useState} from "react"
  
  
   function ColorPicker(){

    const [color, setColor] = useState("#fff");

    function handleColorChange(e) {
    setColor(e.target.value)
    }

  return(
    <div className="color-picker-container">
            <h1>Color-picker</h1>
            <div className="color-display" style={{background: color}}>
              <p>Selected color: {color}</p>
            </div>
            <label>Select a color: {color}</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
  )
} 
export default ColorPicker