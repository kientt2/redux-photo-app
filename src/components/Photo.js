import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route, matchRoutes,useRouteMatch, Switch, Redirect
} from "react-router-dom";
import AddEditPage from "feature/Photo/pages/AddEdit";
import MainPage from "feature/Photo/pages/MainPage";

function Photo () {
    const match = useRouteMatch();
    
    return(
        <div>
            <h1>Photos page</h1>
            <Switch>
                <Route exact path={match.url} component={MainPage} />
                <Route path={`${match.url}/add`} component={AddEditPage} />
                <Route path={`${match.url}/:photoId`} component={AddEditPage} />
            </Switch>
        </div>
    );
}

export default Photo;