import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";

const Input = lazyLoad(
    () => import('./index'), (module) => module.Input
)


export default memo(Input);
