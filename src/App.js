import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";

import { CssBaseline } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import AddPatientForm from "./components/AddPatientForm/AddPatientForm";
import Bar from "./components/Bar/Bar";

// const initialState = {
//   theme: appearance.defaultTheme,
//   user: null,
// };

function App() {
  // const [state, setState] = useState(initialState);
  // const { user } = state;

  return (
    <MuiThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <Bar />
        <Switch>
          <Route path="/newpatient" exact>
            <AddPatientForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
