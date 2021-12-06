

interface TypeInput {
    id: string;
    name: string;
    value?: string | number | undefined;
    type?: 'text' | 'password' | 'number' | 'date';
    placeholder?: string;
    className?: string;
    autoComplete?: string;
    error?: boolean;
    errorMsg?: string;
    onChange?: (event?: any, value?: string | number) => any;
    onBlur?: (event?: any) => any;
    onClick?: () => void;
    onFocus?: () => void;
    required?: boolean
}



export const Input = ({ autoComplete = 'off', id, name, value, type, placeholder, className, error, errorMsg, onChange, onBlur, onClick, onFocus, required }: TypeInput) => {

    return (
        <>
            <input
                id={id}
                type={type}
                autoComplete={autoComplete}
                name={name}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onClick={onClick}
                onFocus={onFocus}
                required={required}
            />
            {
                error ?
                    (<div className="text-xs text-green-500 px-1">{errorMsg}</div>)
                    :
                    (null)
            }
        </>
    )
}
