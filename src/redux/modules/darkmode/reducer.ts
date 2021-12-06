import { LIGHT, DARK } from './initialconst'

const initialState = {
    theme: 'light',
};

type Action = any;

export default function reducer(state = initialState, actions: Action) {
    // console.log(actions)

    switch (actions.type) {
        case LIGHT:
            let htmllight = (document.querySelector('html') as any)
            localStorage.setItem('theme', 'light')

            htmllight.setAttribute('class', 'light')
            return {
                theme: 'light'
            }
        case DARK:
            let htmldark = (document.querySelector('html') as any)
            localStorage.setItem('theme', 'dark')
            htmldark.setAttribute('class', 'dark')
            return {
                theme: 'dark'
            }

        default:
            return state;
    }
}
