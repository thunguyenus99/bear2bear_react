import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import {ContractContext} from "./ContractProvider";
import {AccountContext} from "./AccountProvider";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        justifyContent: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const VEHICLE_TYPE = [
    {
        value: 0,
        label: "Motorcycle"
    },
    {
        value: 1,
        label: "4-seat car"
    },
    {
        value: 2,
        label: "7-seat car"
    }
]
const RiderRequestScene = (props) => {
    const classes = useStyles();
    const history = useHistory()

    const [phoneNumber, setPhoneNumber] = useState(null)
    const [requestedVehicle, setRequestedVehicle] = useState(null)
    const [position, setPosition] = useState(null)

    const {account, setAccount} = useContext(AccountContext)
    const {contract, setContract} = useContext(ContractContext)

    const handleRequestButton = () => {
        history.push('/list-drivers')
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography variant="h6">
                        Request a new ride now!!!
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Phone Number"
                            autoFocus
                            onChange={(event) => {setPhoneNumber(event.target.value)}}
                        />
                        <TextField
                            select
                            label="Vehicle Type"
                            fullWidth
                            value={requestedVehicle}
                            variant="outlined"
                            margin="normal"
                            SelectProps={{
                                native: true,
                            }}>
                            {VEHICLE_TYPE.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                            onChange={(event) => {setRequestedVehicle(event.target.value)}}>
                        </TextField>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Position"
                            onChange={(event) => {setPosition(event.target.value)}}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleRequestButton}
                        >
                            Request
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
};

export default RiderRequestScene;
