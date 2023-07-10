import React from 'react';

const ContactDisplay = ({array}) => {
    return (
        <div>
            {array.map((arrayObject) => (
                <p key={arrayObject.id}> {arrayObject.name} </p>
            ))}
        </div>
    );
}

export default ContactDisplay;
