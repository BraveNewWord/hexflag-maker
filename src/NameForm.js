import React from 'react'

import './App.css';
import Canvas from './Canvas.js'


function NameForm() {
    const [value, setValue] = React.useState('');
    const [hex, setHex] = React.useState(['']);
    const [newHex, setNewHex] = React.useState(['white']);
    const [submitted, setSubmitted] = React.useState(false);


    const handleChange = (event) => {
        setValue(event.target.value);
        setHex(asciiHex(event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(`A name was submited: ${value}`);
        //console.log(hex)
        const newHex = hex.map(hexDisplay)
        /*
        if (newHex[newHex.length-1] === "white") {
            newHex.pop()
        }
        */
        //console.log(newHex)
        if (value !== "") {
            setNewHex(newHex)
            setSubmitted(true)
        }
        //console.log(`Submitted: ${submitted}`);
        //document.getElementById("forCanvas").innerHTML = <Canvas colors={newHex} />
    }

    const makeHex = (event) => {
        
        if (submitted) {
            return <Canvas colors={newHex}/>
        } 
    }
    
    function asciiHex(string) {
        var chars = string.split('');
        for (var i = 0; i < chars.length; i++) {
            chars[i] = string.charCodeAt(i).toString(16); //decimal 2 ascii
        }
        // chars is an array of hex numbers

        var hex_chain = '';
        var hex_chains = [];
        var chain_length = chars.length;
        var count = 0;
        
        while (chain_length > 0) {
            chain_length -= 3;
            if (chain_length < 0) {
                hex_chain = hex_chain.concat(chars[count]);
                if (chain_length === -1) { 
                    hex_chain = hex_chain.concat(chars[count+1]);
                }
                hex_chains.push(hex_chain);
                return hex_chains
            }

            for (let i = count; i < count+3; i++) {
                hex_chain = hex_chain.concat(chars[i]);
            }
            hex_chains.push(hex_chain);
            hex_chain = '';
            count += 3;

        }
        return hex_chains;
    } 

    function hexDisplay(aHex) {
        switch(aHex.length) {
            case 2:
                return 'white'
            case 4:
                return 'white'
            default:
                return '#' + aHex
            
       }
    }
    
    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <input type="button" value="Submit" onClick={handleSubmit}/>
            </form>
            <table id="cTable">
                <thead>
                    <tr>
                        {hex.map((r) => 
                        (<td>{r}</td>))}
                    </tr>
                </thead>
                        
                <tbody>
                <tr>
                    {hex.map((r) => 
                    (   
                        <td><div style={{ height: '150px', width: '100px', backgroundColor: hexDisplay(r)}}/></td>
                        //<td><img src={'https://dummyimage.com/100x150/'+ hexDisplay(r) +'/fff.jpg&text=+'}></img></td>
                    ))}
                </tr>
                </tbody>
            </table>

            <div id ="forCanvas">
                <h4>image:</h4>
                {makeHex()}
            </div>
        </div>

        
    );
}

export default NameForm;
