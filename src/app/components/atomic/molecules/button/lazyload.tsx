import { memo } from 'react'
import { lazyLoad } from 'utils/lazyload.config'


const ButtonMolecules = lazyLoad(
    () => import('./index'), (module) => module.ButtonMolecules
)

export default memo(ButtonMolecules);