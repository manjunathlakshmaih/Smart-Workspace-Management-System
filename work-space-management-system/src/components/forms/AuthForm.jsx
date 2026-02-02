import { useForm } from "react-hook-form";

const AuthForm = ({
    onSubmit, 
    fields,
    titelIcon, 
    appName, 
    greatings, 
    subTitle, 
    socialProviders,
    submitText,
    footer
}) => {
    const {
        register, 
        handleSubmit, 
        formState : {errors, isSubmitting} 
    } = useForm();

    return (
        <div className="login">
            <header className="login-header">
                <img className = "logo" src={titelIcon} alt="WS"/>
                {appName &&<h1 className="app-name">{appName}</h1>}
            </header>

            <div className="welcome-header">
                <h2>{greatings}</h2>
                <p>{subTitle}</p>
            </div>
            <form onsSubmit = {handleSubmit(onSubmit)} className="login-form">
                {fields.map((field) => (
                    <div key={field.name} className="login-input-container">
                        <span className={field.className}><img src={field.icon} alt={field.alt}/></span>
                        <input
                            placeholder={field.placeholder}
                            type={field.type}
                            value={field.value}
                            className={field.className}
                            {...register(field.name, field.validation)}
                        />
                        {errors[field.name] && (
                            <p className={field.className}>{errors[field.error].message}</p>
                        )}
                    </div>  
                ))}
                <div className="remember_password">
                    <input type="checkbox" id="remeber_psw"/>
                    <label htmlFor="remeber_psw">Remember Me</label>
                </div>
                {submitText && <button className="login-button" type="submit" disabled={isSubmitting} >{submitText}</button>}
            </form>

            {/* social media */}
            {socialProviders && 
            <>
                <div className="or-border">
                    <hr/>
                    <span>or continue with</span>
                    <hr />
                </div>
                {socialProviders.map((provider)=>
                    <div className="social-login">
                        <button 
                            key={provider.name} 
                            type="button" 
                            className={`social-button", ${provider.name}`} 
                            onClick={provider.onClick}
                            >
                            <img src={provider.socialIcon} alt={provider.label}/>
                        </button>
                    </div>
                )}           
            </> 
            }

            {footer && <p className="login-meta">{footer}</p>}
        </div>
    )
}

export default AuthForm;