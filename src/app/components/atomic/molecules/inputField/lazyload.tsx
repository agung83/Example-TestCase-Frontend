import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const InputField = lazyLoad(
    () => import('./index'), (module) => module.InputField
)


export default memo(InputField)