import { Input, Label } from '../../atoms'

interface TypeInput {
    id: string;
    name: string;
    value?: string | number | undefined;
    type?: 'text' | 'password' | 'number' | 'date';
    labelTitle?: string;
    placeholder?: string;
    className?: string;
    autoComplete?: string;
    error?: boolean;
    errorMsg?: string;
    onChange?: (event?: any, value?: string | number) => any;
    onBlur?: (event?: any) => any;
    onClick?: () => void;
    onFocus?: () => void;
    required?: boolean;
}

const defaultClassInput = 'w-full dark:text-white dark:bg-gray-500  shadow-sm focus:border-green-400 focus:outline-none placeholder-gray-400 hover:bg-green-50 text-sm text-gray-500 subpixel-antialiased border border-t-0 border-r-0 border-l-0  border-gray-400 py-2 px-2';

export const InputField = ({ autoComplete = 'off', id, name, value, type, labelTitle, placeholder, className = defaultClassInput, error, errorMsg, onChange, onBlur, onClick, onFocus, required }: TypeInput) => {

    const props = {
        id: id,
        type: type,
        autoComplete: autoComplete,
        name: name,
        className: className,
        placeholder: placeholder,
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        onClick: onClick,
        onFocus: onFocus,
        error: error,
        errorMsg: errorMsg,
        required: required,
    }


    return (
        <div className="space-y-1 mb-3">
            <Label labelTitle={labelTitle} />
            <Input
                {...props}
            />
        </div>
    )
}
