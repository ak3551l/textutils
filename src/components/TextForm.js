import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () => {
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearClick = () => {
        
        let newText = '';
        setText(newText);
        props.showAlert("Clear the text!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.ariaSelected();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('');
    // const [text, setText] = useState('Enter text here');
    
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.
        mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
