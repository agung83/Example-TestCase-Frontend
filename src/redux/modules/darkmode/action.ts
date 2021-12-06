import { LIGHT, DARK } from "./initialconst";


const light = () => {
    return { type: LIGHT }
}

const dark = () => {
    return { type: DARK }
}


export {
    light,
    dark
}