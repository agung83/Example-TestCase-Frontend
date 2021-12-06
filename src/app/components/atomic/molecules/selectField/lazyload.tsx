import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const SelectField = lazyLoad(
    () => import('./index'), (module) => module.SelectField
)


export default memo(SelectField)