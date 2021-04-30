import React from "react"

import { InputLabel, makeStyles, TextField } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import { useFieldArray } from "react-hook-form"

const useStyles = makeStyles({
    root: {
        minWidth: 325,
        marginTop: 10,
        marginRight: 10,
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
})

const AdministrationsFieldArray = ({
    values,
    label,
    name,
    control,
    register,
    setValue,
    getValue,
}) => {
    const classes = useStyles()
    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    })

    return (
        <Card className={classes.root}>
            <CardContent>
                <InputLabel className={classes.pos}>{label}</InputLabel>

                {fields.map((item, index) => (
                    <div key={item.id}>
                        <TextField
                            name={`${name}[${index}].name`}
                            inputRef={register}
                            type="text"
                        />

                        <Button
                            type="button"
                            color="secondary"
                            onClick={() => remove(index)} // * remove the item
                        >
                            -
                        </Button>
                    </div>
                ))}
                <CardActions>
                    <Button
                        className={classes.button}
                        size="small"
                        onClick={() => append({ name: append })} // * insert empty string
                    >
                        Aggiungi
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default AdministrationsFieldArray
