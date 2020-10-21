import React from "react";
import { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from "@material-ui/pickers";

import { Link } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";

import {
  Button,
  LinearProgress,
  Container,
  Box,
  ButtonGroup,
  Grid,
  TextField,
} from "@material-ui/core";

// import AdministrationFieldArray from "../AdministrationFieldArray/AdministrationsFieldArray";

const AddPatientForm = () => {
  const { register, handleSubmit, control } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);

  const initialValues = {
    birthDate: null
  }

  const onSubmit = (data) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(data, null, 2));
    }, 500);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        {console.log("render")}
        {isSubmitting && <LinearProgress color="secondary" />}
        <Container>
          <Box display="flex" flexGrow={1} paddingTop={1}>
            <TextField
              name="firstName"
              type="text"
              label="Nome"
              required
              inputRef={register}
            />
            <TextField
              name="lastName"
              type="text"
              label="Cognome"
              required
              inputRef={register}
            />
            <Controller
              as={DatePicker}
              control={control}
              label="Data di Nascita"
              name="birthDay"
              disableFuture
              openTo="year"
              format="dd/MM/yyyy"
              views={["year", "month", "date"]}
              required
              defaultValue={initialValues.birthDate}
            />
            {console.log(control)}
          </Box>
          {/* <Box display="flex" flexGrow={1} marginTop={5} flexWrap="wrap">
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
              </Box> */}
          <Box display="flex" flexGrow={1} paddingTop={1}></Box>
          <br />
          <Grid container alignItems="center" justify="flex-end">
            <ButtonGroup variant="contained">
              <Button
                variant="contained"
                color="secondary"
                disabled={isSubmitting}
                component={Link}
                to="/"
              >
                Annulla
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                type="submit"
              >
                Invia
              </Button>
            </ButtonGroup>
          </Grid>
        </Container>
      </form>
      )}
    </MuiPickersUtilsProvider>
  );
};

export default AddPatientForm;
