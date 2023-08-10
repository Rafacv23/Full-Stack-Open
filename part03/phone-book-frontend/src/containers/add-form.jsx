import React from 'react';
import Input from '../components/input';
import Button from '../components/button';

const AddForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <Input value={props.value} onChange={props.onChange} placeholder={"Name"}></Input>
            <Input value={props.valueNumber} onChange={props.onChangeNumber} placeholder={"Number"}></Input>
            <Button name={"Add"} type={"submit"}></Button>
        </form>
    );
}

export default AddForm;
