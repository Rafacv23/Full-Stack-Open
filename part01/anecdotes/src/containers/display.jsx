import React from 'react';
import Anecdote from '../components/anecdote';
import RandomBtn from '../components/random-btn';
import VoteCounter from '../components/vote-counter';

const Display = (props) => {

    return (
        <div className='body'>
                <Anecdote name={props.anecdote} ></Anecdote>
                <VoteCounter name={"votes"} value={props.value}></VoteCounter>
            <div className='row'>
                <RandomBtn name={"Vote"} handleClick={props.vote}></RandomBtn>
                <RandomBtn name={"Random"} handleClick={props.random}></RandomBtn>
            </div>
        </div>
    );
}

export default Display;
