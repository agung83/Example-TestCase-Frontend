

import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const Breadcrumb = lazyLoad(
    () => import('./index'), (module) => module.ShowBreadcrumb

);


export default memo(Breadcrumb);