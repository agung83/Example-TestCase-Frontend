import { memo } from 'react'
import { lazyLoad } from "../../../utils/lazyload.config";


const Home = lazyLoad(
    () => import('./index'),
    module => module.Home,
)

export default memo(Home)