import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const Label = lazyLoad(
    () => import('./index'), (module) => module.Label
)


export default memo(Label)