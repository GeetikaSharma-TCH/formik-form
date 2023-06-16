import React from 'react';
const TextError = (props) => {
    console.log('props', props)
    return (
        <div style={{ color: 'Red'}}>
            {props.children}
        </div>
    );
}
 
export default TextError;