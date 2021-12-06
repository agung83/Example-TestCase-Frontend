

interface TypeButton {
    type: 'button' | 'reset' | 'submit';
    className?: string;
    onClick?: () => void;
    children: JSX.Element | JSX.Element[] | String | any
}
const defaultClassButton = "w-full flex justify-center rounded text-gray-500 px-2 py-2 border border-gray-500 bg-green-200 hover:text-gray-600 dark:text-white dark:bg-gray-500 "

export const Button = ({ type, className = defaultClassButton, children, onClick }: TypeButton) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
