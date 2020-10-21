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

import { makeStyles } from "@material-ui/core/styles";

import AdministrationFieldArray from "../AdministrationFieldArray/AdministrationsFieldArray";

const useStyles = makeStyles({
  textArea: {
    // width: "40%",
    // margin: "5px 5px 0 0"
  },
});

const AddPatientForm = () => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          birthDay: "",
          continuousInfusion: [],
          intravenous: [],
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
                // justifyContent="space-between"
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
              <Box display="flex" flexGrow={1} paddingTop={1} flexWrap="wrap">
                <AdministrationFieldArray
                  name="continuousInfusion"
                  label="Infusione Continua"
                  values={values.continuousInfusion}
                />
                <AdministrationFieldArray
                  name="intravenous"
                  label="Endovena"
                  values={values.intravenous}
                />
                <AdministrationFieldArray
                  name="iM"
                  label="I.M."
                  values={values.iM}
                />
                <AdministrationFieldArray
                  name="sC"
                  label="S.C."
                  values={values.sC}
                />
                <AdministrationFieldArray
                  name="oral"
                  label="Orale"
                  values={values.oral}
                />
                <AdministrationFieldArray
                  name="other"
                  label="Altro"
                  values={values.other}
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
