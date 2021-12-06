

interface TypeLabel {
    labelTitle?: string;
    className?: string;
}

const defaultClass = "text-sm text-gray-600 font-semibold"

export const Label = ({ labelTitle, className = defaultClass }: TypeLabel) => {
    return (
        <>
            <label htmlFor={labelTitle} className={className}>{labelTitle}</label>
        </>
    )
}
