
import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const Modal = lazyLoad(
    () => import('./index'), (module) => module.Modal
)


export default memo(Modal)