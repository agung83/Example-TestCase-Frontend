import { memo, ComponentType } from "react";
import { lazyLoad } from "utils/lazyload.config";
import { connect } from 'react-redux';
import { compose } from 'redux';



const Navbar = lazyLoad(
    () => import('./index'), (module) => module.Navbar

);



const mapDispatchToProps = (dispatch: any) => {
    return {
        setLightMode: () => dispatch({ type: "LIGHT" }),
        setDarkMode: () => dispatch({ type: "DARK" }),
    }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose<ComponentType>(withConnect, memo)(Navbar);