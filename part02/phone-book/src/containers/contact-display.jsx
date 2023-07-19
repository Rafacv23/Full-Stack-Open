import React from 'react';

const ContactDisplay = ({array}) => {
    return (
        <div>
            {array.map((arrayObject) => (
                <p key={arrayObject.id}> {arrayObject.name} {arrayObject.number}</p>
            ))}
        </div>
    );
}

export default ContactDisplay;
