import { memo } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Public } from './routes';
import { NotFound } from './pages';
import { setUpAxios } from 'service';


setUpAxios();
function App() {

    return (
        <BrowserRouter>
            <Switch>
                {
                    Public.map(({ key, path, component }) => (
                        <Route key={key} path={path} component={component} exact ></Route>
                    ))
                }
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}


export default memo(App);
