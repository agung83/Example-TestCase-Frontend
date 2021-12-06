
import { Label, Select } from '../../atoms'



interface TypeSelect {
    id: string;
    name: string;
    value?: string | number | undefined;
    className?: string;
    autoComplete?: string;
    error?: boolean;
    errorMsg?: string;
    labelTitle?: string;
    labelOption: string;
    onChange?: (event?: any, value?: string | number) => any;
    onBlur?: (event?: any) => any;
    onClick?: () => void;
    data: {
        name: string | number;
        value: string | number;
    }[]
}

const defaulClass = "w-full  shadow-sm focus:border-green-400 focus:outline-none placeholder-gray-400 hover:bg-green-50 text-sm text-gray-500 subpixel-antialiased dark:text-white dark:bg-gray-500  border border-t-0 border-r-0 border-l-0  border-gray-400 py-2 px-2"

export const SelectField = ({ autoComplete = 'off', labelTitle, labelOption, id, name, value, className = defaulClass, error, errorMsg, onChange, onBlur, onClick, data }: TypeSelect) => {
    return (
        <div className="space-y-1 mb-3">
            <Label labelTitle={labelTitle} />
            <Select
                labelOption={labelOption}
                id={id}
                autoComplete={autoComplete}
                name={name}
                className={className}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onClick={onClick}
                data={data}
                error={error}
                errorMsg={errorMsg}
            />
        </div>
    )
}
