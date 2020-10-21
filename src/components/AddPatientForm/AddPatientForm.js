import React from "react";

import { DatePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import { Link } from "react-router-dom";

import { Formik, Form, Field, FieldArray } from "formik";

import {
  Button,
  LinearProgress,
  Container,
  Box,
  ButtonGroup,
  Grid,
} from "@material-ui/core";

import { TextField } from "formik-material-ui";

import AdministrationFieldArray from "../AdministrationFieldArray/AdministrationsFieldArray";


const AddPatientForm = () => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          birthDay: "",
          continuousInfusion: ["test","test2"],
          intravenous: ["test3"],
          iM: [],
          sC: [],
          oral: [],
          aerosol: [],
          other: [],
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Obbligatorio";
          } else if (!values.lastName) {
            errors.lastName = "Obbligatorio";
          } else if (!values.birthDay) {
            errors.birthDay = "Obbligatorio";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting, values }) => (
          <Form>
            {console.log("render")}
            {isSubmitting && <LinearProgress color="secondary" />}
            <Container>
              <Box
                display="flex"
                flexGrow={1}
                paddingTop={1}
              >
                <Field
                  component={TextField}
                  name="firstName"
                  type="text"
                  label="Nome"
                />
                <Field
                  component={TextField}
                  name="lastName"
                  type="text"
                  label="Cognome"
                />
                <Field
                  component={DatePicker}
                  name="birthDay"
                  label="Data di Nascita"
                  disableFuture
                  openTo="year"
                  format="dd/MM/yyyy"
                  views={["year", "month", "date"]}
                />
              </Box>
              <Box display="flex" flexGrow={1} marginTop={5} flexWrap="wrap">
                <AdministrationFieldArray
                  name="continuousInfusion"
                  label="Infusione Continua"
                  values={values}
                />
                <AdministrationFieldArray
                  name="intravenous"
                  label="Endovena"
                  values={values}
                />
                <AdministrationFieldArray
                  name="iM"
                  label="I.M."
                  values={values}
                />
                <AdministrationFieldArray
                  name="sC"
                  label="S.C."
                  values={values}
                />
                <AdministrationFieldArray
                  name="oral"
                  label="Orale"
                  values={values}
                />
                <AdministrationFieldArray
                  name="other"
                  label="Altro"
                  values={values}
                />
              </Box>
              <Box display="flex" flexGrow={1} paddingTop={1}></Box>
              <br />
              <Grid container alignItems="center" justify="flex-end">
                <ButtonGroup variant="contained">
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    component={Link}
                    to="/"
                  >
                    Annulla
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Invia
                  </Button>
                </ButtonGroup>
              </Grid>
            </Container>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default AddPatientForm;
