import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const Layout = lazyLoad(
    () => import('./index'), (module) => module.Layout

);


export default memo(Layout);