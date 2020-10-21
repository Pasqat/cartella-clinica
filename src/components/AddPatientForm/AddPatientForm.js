import React from "react";
import { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

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
import AdministrationsFieldArray from "../AdministrationFieldArray/AdministrationsFieldArray";

const AddPatientForm = () => {
  const { register, handleSubmit, control, getValues, setValue } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);

  const initialValues = {
    birthDate: null,
  };

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
          </Box>
          <Box display="flex" flexGrow={1} marginTop={5} flexWrap="wrap">
            <AdministrationsFieldArray
              {...{ control, register, getValues, setValue }}
              name="continuousInfusion"
              label="Infusione Continua"
            />
            <AdministrationsFieldArray
              {...{ control, register, getValues, setValue }}
              name="intravenous"
              label="Endovena"
            />
            <AdministrationsFieldArray
              {...{ control, register, getValues, setValue }}
              name="iM"
              label="I.M."
            />
            <AdministrationsFieldArray
              {...{ control, register, getValues, setValue }}
              name="sC"
              label="S.C."
            />
            <AdministrationsFieldArray
              {...{ control, register, getValues, setValue }}
              name="oral"
              label="Orale"
            />
            <AdministrationsFieldArray
              {...{ control, register, getValues, setValue }}
              name="other"
              label="Altro"
            />
          </Box>
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
    </MuiPickersUtilsProvider>
  );
};

export default AddPatientForm;
