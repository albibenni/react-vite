// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Redirect, Route, withRouter } from 'react-router-dom';
import App from './App';

function Routes(): JSX.Element {
  return (
    <>
      {/* <Route path="/login"> <Redirect to="/" /> <Route/> */}
      <Route path="/">
        <App />
      </Route>
    </>
  );
}

export default withRouter(Routes);
