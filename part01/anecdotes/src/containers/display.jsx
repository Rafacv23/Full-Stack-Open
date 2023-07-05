import React from 'react';
import Anecdote from '../components/anecdote';
import RandomBtn from '../components/random-btn';

const Display = (props) => {

    return (
        <div className='body'>
            <Anecdote name={props.anecdote} ></Anecdote>
            <RandomBtn name={"Random"} handleClick={props.random}></RandomBtn>
        </div>
    );
}

export default Display;
