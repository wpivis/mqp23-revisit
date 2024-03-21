import React from 'react';

function component({ parameters }: { parameters : object}){
    console.log(parameters);
    return(
        <div style={{display: 'flex',justifyContent: 'center'}}>
            <svg width="402px" height="468px" viewBox="0 0 402 468" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill={parameters.data[0]} rx="20" ry="20"></rect>
                <rect x="50" y="60" width="300" height="80" fill="black" rx="10" ry="10"></rect>
            </svg>
            <div style={{margin:'20px'}}>

            </div>
            <svg width="402px" height="468px" viewBox="0 0 402 468" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill={parameters.data[1]} rx="20" ry="20"></rect>
                <rect x="50" y="60" width="300" height="80" fill="black" rx="10" ry="10"></rect>
            </svg>
        </div>
    );
}

export default component;