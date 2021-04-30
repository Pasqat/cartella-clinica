import { differenceInYears } from "date-fns"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { Container } from "@material-ui/core"

const ageCalc = (birthDate) => {
    return differenceInYears(new Date(), new Date(birthDate))
}

const useStyles = makeStyles({
    root: { marginTop: 40 },
    card: {
        minWidth: 325,
        marginTop: 15,
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

const PatientList = ({ patients, setPatients }) => {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            {patients.map((patient, i) => (
                <Card className={classes.card} key={i}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {patient.firstName} {patient.lastName}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {ageCalc(patient.birthDay)} anni
                        </Typography>
                        <div>
                            {patient.continuousInfusion?.map((a, i) => (
                                <p key={i}>{a.name}</p>
                            ))}
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            className={classes.button}
                            size="small"
                            variant="outlined"
                        >
                            Cartella Clinica
                        </Button>
                    </CardActions>
                </Card>
            ))}
            <Button
                onClick={() =>
                    setPatients(
                        patients.concat({
                            firstName: "Ciccio",
                            lastName: "Cappuccio",
                            birthDay: "2020-05-05T16:38:00.000Z",
                        })
                    )
                }
            >
                Aggiugi Ciccio
            </Button>
        </Container>
    )
}

export default PatientList
