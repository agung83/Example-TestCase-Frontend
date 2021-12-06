import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";

const Button = lazyLoad(
    () => import('./index'), (module) => module.Button
)


export default memo(Button);