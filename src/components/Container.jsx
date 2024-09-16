import React,{useContext, useEffect, useRef, useState} from "react";
import Tweet from "./Tweet";
import Context from "../context/creator";

const Container = () => {
    const {globalObj, setGlobalObj} = useContext(Context);
    const [quote, setQuote] = useState(globalObj[globalObj.length - 1]);

    let ptr = useRef(globalObj.length - 1);

    useEffect(() => {
        ptr.current = globalObj.length - 1;
    }, [globalObj.length]);

    return (
        <>
        <div id="quote-box" style={{
            backgroundColor: '#f9f9f9', 
            borderRadius: '10px', 
            padding: '20px', 
            maxWidth: '600px', 
            margin: '30px auto', 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
        }}>

            <p id="text" style={{
                fontSize: '1.5em', 
                fontStyle: 'italic', 
                color: '#333', 
                marginBottom: '10px'
            }}>{quote.text}</p>

            <span id="author" style={{
                display: 'block', 
                fontSize: '1.2em', 
                fontWeight: 'bold', 
                color: '#555'
            }}>{quote.author}</span>

            <div id="footer" style={{
                marginTop: '20px',
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center'
            }}>
                <div id="footer-l" style={{
                    float: 'left', 
                    marginRight: '20px'
                }}>
                    <Tweet />
                </div>

                <div id="footer-r" style={{
                    display: 'flex', 
                    justifyContent: 'space-around', 
                    width: '50%'
                }}>
                    <button onClick={() => {
                        ptr.current = ptr.current - 1;
                        if (ptr.current < 0) {
                            setQuote({ text: "Lower limit reached", author: "" });
                        } else {
                            setQuote(globalObj[ptr.current]);
                        }
                    }} style={{
                        backgroundColor: '#e74c3c', 
                        color: '#fff', 
                        padding: '10px 15px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}>
                        Previous
                    </button>

                    <button id="new-quote" onClick={() => {
                        const newGlobalObj = [...globalObj, { text: 'new', author: 'blank' }];
                        setGlobalObj(newGlobalObj);
                        setQuote(newGlobalObj[newGlobalObj.length - 1]);
                    }} style={{
                        backgroundColor: '#2ecc71', 
                        color: '#fff', 
                        padding: '10px 15px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}>
                        New Quote
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Container;
