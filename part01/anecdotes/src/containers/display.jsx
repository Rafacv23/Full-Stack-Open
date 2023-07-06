import React from 'react';
import Anecdote from '../components/anecdote';
import RandomBtn from '../components/random-btn';
import VoteCounter from '../components/vote-counter';
import Title from '../components/title';

const Display = (props) => {

    return (
        <div className='body'>
                <Title name={"Anecdote of the day"} ></Title>
                <Anecdote name={props.anecdote} ></Anecdote>
                <VoteCounter name={"votes"} value={props.value}></VoteCounter>
            <div className='row'>
                <RandomBtn name={"Vote"} handleClick={props.vote}></RandomBtn>
                <RandomBtn name={"Random"} handleClick={props.random}></RandomBtn>
            </div>
                <Title name={"Anecdote with most votes"} ></Title>
                <Anecdote name={props.mostVotedAnecdote} ></Anecdote>
        </div>
    );
}

export default Display;
