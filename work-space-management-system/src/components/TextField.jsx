import React from "react";

const TextField = ({label, text, placeholder, value, onChange, className}) => {
    return (
        <label className="text-field-label">
            <div>{label}</div>
            <input type={text} className={className} placeholder={placeholder} value={value} onChange={onChange} />
        </label>
    );
}

export default TextField;