import { Button } from "../../atoms"

interface TypeButton {
    type: 'button' | 'reset' | 'submit';
    classNameButton?: string;
    classNameMolecules?: string;
    onClick?: () => void;
    children: JSX.Element | JSX.Element[] | String | any
}

const defaultClassButtonMolecules = "mt-5"
export const ButtonMolecules = ({ type, classNameButton, classNameMolecules = defaultClassButtonMolecules, children, onClick }: TypeButton) => {

    const props = {
        type: type,
        className: classNameButton,
    }
    return (
        <div className={classNameMolecules}>
            <Button
                onClick={onClick}
                {...props}>
                {children}
            </Button>
        </div>
    )
}
