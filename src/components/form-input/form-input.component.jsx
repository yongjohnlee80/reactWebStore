import './form-input.styles.scss';

export const FormInput = ({ label, ...otherProps }) => {
    //console.log(otherProps.value.length)
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />

            {label && (
                <label
                    className={`${
                        otherProps.value ? "shrink" : ""
                    } form-input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};
