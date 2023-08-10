import React from 'react';

const ContactDisplay = ({array, removePerson }) => {
    return (
        <div>
            {array.map((arrayObject) => (
                <div className='row'>
                    <p key={arrayObject.id}> {arrayObject.name} {arrayObject.number}</p>
                    <button onClick={() => removePerson(arrayObject)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ContactDisplay;
