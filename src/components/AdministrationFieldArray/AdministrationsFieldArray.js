import React from "react";

import { InputLabel, makeStyles, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    minWidth: 300,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    marginLeft: "auto",
  },
});

const AdministrationsFieldArray = ({ values, label, name }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <FieldArray name={name} key={name}>
        {(arrayHelpers) => (
          <CardContent >
            <InputLabel className={classes.pos}>{label}</InputLabel>

            {values[name].map((item, index) => (
              <div key={index}>
                {console.log(name, item, index)}
                <Field
                  name={`${name}.${index}`}
                  component={TextField}
                  type="text"
                />
                <Button
                  type="button"
                  color="secondary"
                  onClick={() => arrayHelpers.remove(index)} // * remove the item
                >
                  -
                </Button>
              </div>
            ))}
            <CardActions>
              <Button
                className={classes.button}
                size="small"
                onClick={() => arrayHelpers.push("")} // * insert empty string
              >
                Aggiungi
              </Button>
            </CardActions>
          </CardContent>
        )}
      </FieldArray>
    </Card>
  );
  // return(
  //   <div>ciao</div>
  // )
};

export default AdministrationsFieldArray;
