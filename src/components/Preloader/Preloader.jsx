import React from 'react';
import style from './Preloader.module.css';

let Preloader = (props) => {
    return (
        <div className = {style.wrapper}>
            <img className = {style.content} src='https://i.gifer.com/ZZ5H.gif' alt=''/>
        </div>
    )
}

export default Preloader;