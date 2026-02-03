import { useForm } from "react-hook-form";
import './AuthForm.css';

const AuthForm = ({
    onSubmit,
    fields,
    titelIcon,
    appName,
    greatings,
    subTitle,
    socialProviders,
    submitText,
    footer,
    rememberPassword
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    return (
        <div className="login">
            <header className="login-header">
                <img className="logo" src={titelIcon} alt="WS" />
                {appName && <h1 className="app-name">{appName}</h1>}
            </header>

            <div className="welcome-header">
                <h2>{greatings}</h2>
                <p>{subTitle}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                {fields.map((field) => (
                    <div key={field.name} className="login-input-container">
                        <div class="input-wrapper">
                            <span className="input_icon"><img src={field.icon} alt={field.alt} /></span>
                            <input
                                placeholder={field.placeholder}
                                type={field.type}
                                value={field.value}
                                className={field.className}
                                {...register(field.name, field.validation)}
                            />
                        </div>
                        <div className="error_field">
                            {errors[field.name] && (

                                <p className="error-message">{errors[field.name]?.message}</p>

                            )}
                        </div>
                    </div>
                ))}
                {rememberPassword?.map((check) => (
                    <div key={check.name} className="remember_password">
                        <input type={check.type} id={check.name} />
                        <label htmlFor={check.name}>{check.text}</label>
                    </div>
                ))}
                {submitText && <button className="login-button" type="submit" disabled={isSubmitting} >{submitText}</button>}
            </form>

            {/* social media */}
            {socialProviders &&
                <>
                    <div className="or-border">
                        <hr />
                        <span>or continue with</span>
                        <hr />
                    </div>
                    <div className="social-buttons-container">
                        {socialProviders.map((provider) =>
                            <button
                                key={provider.name}
                                type="button"
                                className={`social-button ${provider.name}`}
                                onClick={provider.onClick}
                            >
                                <img src={provider.socialIcon} alt={provider.socialLabel} />
                            </button>

                        )}
                    </div>
                </>
            }

            {footer && <p className="login-meta">{footer}</p>}
        </div>
    )
}

export default AuthForm;