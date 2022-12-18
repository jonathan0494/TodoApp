import React from 'react';
import styled from 'styled-components';
import './InputField.scss';

const Input = styled.input`
    padding: 0.5em;
    outline: none;
    border: 1px solid #adb5bd;
    border-radius: 3px;
    transition: 0.5s;
    &:focus{
        border: 1px solid #009EFF;
    }
`;

const InputField = (props) => {
    const { label, error } = props;
    return (
        <div className='input-field-wrapper'>
            { label && <label htmlFor={ label }> { label }</label> }
            <Input className={error ? 'error' : ''}
                   type={props.type ?? 'text'}
                   name={props.name}
                   value={props.value ?? ''}
                   placeholder={props.placeholder ?? ''}
                   onChange={props.onChange} />
            { error && <span> { error?.message }</span> }
        </div>
    );
};

export default InputField;