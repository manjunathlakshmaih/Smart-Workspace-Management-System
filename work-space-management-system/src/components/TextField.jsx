import React from "react";

const TextField = ({label, text, placeholder, value, onChange}) => {
    return (
        <label className="text-field-label">
            <div>{label}</div>
            <input type={text} className="text-field" placeholder={placeholder} value={value} onChange={onChange} />
        </label>
    );
}

export default TextField;