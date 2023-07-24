import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleClearClick = (event)=>{
        // console.log("Text Cleared");
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared Successfully!", "success");
    }

    const handleCopy= ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to Clipboard!", "success");
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed..!", "success");
    }
  const [text, setText] = useState("");
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode===`dark`? `white`:`#042743`}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`? `#13466e`:`white`, color: props.mode===`dark`? `white`:`#042743`}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode===`dark`? `white`:`#042743`}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h3>Preveiw</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

