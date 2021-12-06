import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const Footer = lazyLoad(
    () => import('./index'), (module) => module.Footer

);


export default memo(Footer);