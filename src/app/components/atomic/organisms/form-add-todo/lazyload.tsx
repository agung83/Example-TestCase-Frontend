import { memo } from "react";
import { lazyLoad } from "utils/lazyload.config";


const FormAddTodo = lazyLoad(
    () => import('./index'), (module) => module.FormAddTodo
)

export default memo(FormAddTodo)