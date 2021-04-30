import React from "react"
import { useState } from "react"

import { Patients } from "./data"

import { MuiThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import AddPatientForm from "./components/AddPatientForm/AddPatientForm"
import PatientList from "./components/PatientList/PatientList"
import Bar from "./components/Bar/Bar"

// const initialState = {
//   patients: Patients,
//   user: null,
// };

function App() {
    const [patients, setPatients] = useState(Patients)

    return (
        <MuiThemeProvider>
            <CssBaseline />
            <BrowserRouter>
                <Bar />
                <Switch>
                    <Route path="/newpatient" exact>
                        <AddPatientForm setPatients={setPatients} />
                    </Route>
                    <Route path="/" exact>
                        <PatientList
                            patients={patients}
                            setPatients={setPatients}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default App
