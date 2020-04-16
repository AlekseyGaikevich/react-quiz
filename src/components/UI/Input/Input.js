import React from 'react';
import classes from './Input.css';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && touched &&shouldValidate
};

const Input = props => {

    const inputType = props.type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;
    const cls = [classes.Input];

    if(isInvalid(props)) {
        cls.push(classes.invalid)
    };


    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                value={props.value}
                type={inputType}
                id={htmlFor}
                onChange={props.onChange}
            />

            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Введите верное значение'}</span>
                    : null
            }

        </div>
    )
};

export default Input;