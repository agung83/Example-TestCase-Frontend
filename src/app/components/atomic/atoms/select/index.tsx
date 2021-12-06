

interface TypeSelect {
    id: string;
    name: string;
    value?: string | number | undefined;
    className?: string;
    autoComplete?: string;
    error?: boolean;
    errorMsg?: string;
    labelOption: string;
    onChange?: (event?: any, value?: string | number) => any;
    onBlur?: (event?: any) => any;
    onClick?: () => void;
    data: {
        name: string | number;
        value: string | number;
    }[]
}



export const Select = ({ autoComplete = 'off', id, name, value, className, labelOption, error, errorMsg, onChange, onBlur, onClick, data }: TypeSelect) => {
    return (
        <>
            <select
                id={id}
                autoComplete={autoComplete}
                name={name}
                className={className}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onClick={onClick}
            >
                <option value="">{labelOption}</option>
                {
                    data.map((value, key) => (
                        <option key={key} value={value.value}>{value.name}</option>
                    ))
                }
            </select>
            {
                error ?
                    (<div className="text-xs text-green-500 px-1">{errorMsg}</div>)
                    :
                    (null)
            }
        </>
    )
}
