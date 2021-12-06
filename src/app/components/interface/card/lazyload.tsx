import { memo } from 'react'
import { lazyLoad } from "utils/lazyload.config";


const Card = lazyLoad(
    () => import('./index'), (module) => module.CardBerita
)

export default memo(Card);