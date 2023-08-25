import React from 'react';

const Loading = () => {
    return (
        <div className='loading'>
            <div className="circle circle-1 animate top left"></div>
            <div className="circle circle-2 animate top rigth"></div>
            <div className="circle circle-3 animate Bottom left"></div>
            <div className="circle circle-4 animate Bottom right"></div>
        </div>
    )
}

export default Loading;