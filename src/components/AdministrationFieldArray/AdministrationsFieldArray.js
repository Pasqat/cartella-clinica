import React from "react";

import { FieldArray, Field } from "formik";

import { Button, TextField, InputLabel } from "@material-ui/core";

const AdministrationsFieldArray = ({ values, label, name }) => {
  return (
    <FieldArray name={name}>
      {(arrayHelpers) => (
        <div>
          <InputLabel>{label}</InputLabel>
          <Button
            color="primary"
            type="button"
            size="small"
            variant="contained"
            onClick={() => arrayHelpers.push( "")} // * insert empty string
          >
            +
          </Button>

           { values.map((item, index) => (
              <div key={index}>
                {console.log(name, item)}
                <Field
                  name={`${name}.${index}`}
                  component={TextField}
                  value={item}
                />
                <Button
                  type="button"
                  color="secondary"
                  onClick={() => arrayHelpers.remove(index)} // * remove the item
                >
                  -
                </Button>
              </div>
            ))
           }

        </div>
      )}
    </FieldArray>
  );
  // return(
  //   <div>ciao</div>
  // )
};

export default AdministrationsFieldArray;
