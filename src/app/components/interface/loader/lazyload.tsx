import { memo } from 'react'
import { lazyLoad } from 'utils/lazyload.config'


const Loader = lazyLoad(
    () => import('./index'), (module) => module.Loader
)

export default memo(Loader);