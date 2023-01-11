import React, { useState } from 'react'

export default function TF1(props){
    const[text,setText]=useState('');
    // setText="new text";
    const handleUpClick = () =>{
        console.log("Button was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","sucess")
    }

    const handleOnChange=(event) =>{
        setText(event.target.value);
    }
    const lower=() =>{
        let newText= text.toLowerCase();
        setText(newText)
    }
    const clear=()=>{
        let newText="";
        setText(newText)
    }
    return(
        <>
        <br />
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Enter your text below</h2>
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#6B0889',color:props.mode==='light'?'black':'white'}}  placeholder='Type Text Here' value={text} onChange={handleOnChange} id="myBox"rows="8"></
                textarea>
            
            <br />
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={lower}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={clear}>Clear Text Area</button>
            <br />
            </div>

            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Summary of text </h2>
                <span>There are {text.length} characters and {text.split(" ").length} words</span>
                <br />
                <span>Estimated Read Time is <b>{0.08*text.split(" ").length}</b> minutes</span>
            </div>
        </>
    )
}


