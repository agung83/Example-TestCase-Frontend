import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";

const Select = lazyLoad(
    () => import('./index'), (module) => module.Select
)


export default memo(Select);