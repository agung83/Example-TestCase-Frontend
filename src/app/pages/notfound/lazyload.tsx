import { lazyLoad } from "../../../utils/lazyload.config"


const NotFound = lazyLoad(() => import('./index'), module => module.NotFound,)

export default NotFound;