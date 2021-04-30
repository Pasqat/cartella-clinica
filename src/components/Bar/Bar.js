import React from "react"

import { Link as RouterLink } from "react-router-dom"

import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Link,
} from "@material-ui/core"

const Bar = () => {
    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Box display="flex" flexGrow={1}>
                    <Typography color="inherit" variant="h6">
                        <Link
                            color="inherit"
                            component={RouterLink}
                            to="/"
                            underline="none"
                        >
                            Cartella Clinica
                        </Link>
                    </Typography>
                </Box>
                <Button
                    color="inherit"
                    variant="outlined"
                    component={RouterLink}
                    to="/newpatient"
                >
                    Aggiungi Paziente
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Bar
