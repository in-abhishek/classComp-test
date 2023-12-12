import React, { useState } from 'react'

const Calc = () => {
    const [result, setResult] = useState("");
    const [lastOperator, setLastOperator] = useState(null);
    const [flagOper, setFlagOper] = useState(false);
    const [checkChar, setcheckChar] = useState(false);
    const [flag, setFlag] = useState(false);
    const hangleChange = (e) => {
        const value = e.target.value;
        if (!containsLetter(value) && !containsSpecialChars(value)) {
            console.log("value->>>>>>>>>>>>>>>>> ", value);
            setResult(value);
            console.log("lastOperator", lastOperator);
            setLastOperator(value);
        }
        else {
            setcheckChar(true);
        }
    }
    const containsLetter = (str) => {
        return /[a-z]/i.test(str);
    }
    const containsSpecialChars=(str)=> {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(!specialChars === '+' || !specialChars === '-' || !specialChars === '*' || !specialChars==='/')
        {
            return specialChars.test(str);
        }
      }
    const handleClick = (e) => {
        get_value(e.target.name);
    };
    const get_value = (val) => {
        const currentOperator = val;
        console.log("lastOperator", currentOperator);

        if (currentOperator === lastOperator) {
            if (currentOperator === '+' || currentOperator === '-' || currentOperator === '*' || currentOperator === '/' || currentOperator === '.') {
                setFlagOper(true);
                setResult('');
            }
            else {
                setResult(result + currentOperator);
            }
        }
        else if (((lastOperator === '+' || lastOperator === '-' || lastOperator === '*' || lastOperator === '/') && (currentOperator === '+' || currentOperator === '-' || currentOperator === '*' || currentOperator === '/'))) {
            setFlagOper(true);
            setResult('');
        }
        else if ((lastOperator === '/' && currentOperator === '0')) {
            setFlag(true);
            setResult('');
        }
        else {
            // Single click
            setResult(result + currentOperator);
            setLastOperator(currentOperator);
        }
    }
    const Clear = () => {
        setResult("");
    }
    const backSpace = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const calculate = () => {
        const value = eval(result);
        setResult(value);
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            calculate();
        }
    }
    return (
        <div className='calc-container'>
            <div className="keypad">
                <form>
                    <input id="search" value={result} onChange={hangleChange} onKeyDown={e => handleKeyDown(e)} />
                </form>
                <div className={`first_wrap ${flag || flagOper || checkChar ? "blur" : ""}`}>
                    <div className="button">
                        <button className='btn' onClick={Clear}>Clear</button>
                    </div>
                    <div className="button">
                        <button className='btn' onClick={backSpace}>C</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='/' onClick={handleClick}>&divide;</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='.' onClick={handleClick}>.</button>
                    </div>
                </div>
                <div className={`first_wrap ${flag || flagOper || checkChar ? "blur" : ""}`}>
                    <div className="button">
                        <button className='btn' name='7' onClick={handleClick}>7</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='8' onClick={handleClick}>8</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='9' onClick={handleClick}>9</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='+' onClick={handleClick}>+</button>
                    </div>
                </div>
                <div className={`first_wrap ${flag || flagOper || checkChar ? "blur" : ""}`}>
                    <div className="button">
                        <button className='btn' name='4' onClick={handleClick}>4</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='5' onClick={handleClick}>5</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='6' onClick={handleClick}>6</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='*' onClick={handleClick}>&times;</button>
                    </div>
                </div>
                <div className={`first_wrap ${flag || flagOper || checkChar ? "blur" : ""}`}>
                    <div className="button">
                        <button className='btn' name='1' onClick={handleClick}>1</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='2' onClick={handleClick}>2</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='3' onClick={handleClick}>3</button>
                    </div>
                    <div className="button">
                        <button className='btn' name='0' onClick={handleClick}>0</button>
                    </div>

                </div>
                <div className={`first_wrap ${flag || flagOper || checkChar ? "blur" : ""}`}>
                    <div className="button calcbtn">
                        <button className='btn' name='=' onClick={calculate}>=</button>
                    </div>
                </div>
                {flagOper ? <h1 className='error'>Can't press {result} At same time <button className='cross' onClick={() => setFlagOper(false)}>&times;</button></h1> : ""}
                {flag ? <h1 className='error'>Can't Devide By {result} with Any Number <button className='cross' onClick={() => setFlag(false)}>&times;</button></h1> : ""}
                {checkChar ? <h1 className='error'>plesse Enter an Interger {result}<button className='cross' onClick={() => setcheckChar(false)}>&times;</button></h1> : ""}
            </div>
        </div>
    )
}

export default Calc