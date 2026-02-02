import { forwardRef } from "react";
import "./TextField.css";

const TextField = forwardRef(({ icon, error, ...props }, ref) => {
    return (
        <div className="text-field">
            {icon && <img src={icon} alt="icon" className="text-field-icon" />}
            <div className="text-field-icon-spacer">
            < input {...props} ref={ref} />
            {error && <p>{error}</p>}
            </div>
        </div >
    );
}
);

export default TextField;