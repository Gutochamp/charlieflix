import React from 'react';

function FormField({ type, name, value, onChange, labelText }) {
    return (
        <div>
            <label>
                {labelText}
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
            </label>
        </div>
    );
}

export default FormField;