import {useState} from "react";
import * as React from "react";
import {useHistory} from "react-router";

import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    createStyles,
    Grid, Snackbar,
    TextField,
    Theme,
    Typography,
} from "@material-ui/core";
import Alert  from '@material-ui/lab/Alert';


import AuthService from "../../services/API/auth.api";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            maxWidth: 300,
        },
        textField: {
            margin: 10
        },
        gridMain: {
            minHeight: 500
        },
        gridHeader: {
            marginLeft: 20,
            marginTop: 10
        },
        textError: {
            color: 'red'
        }
    }),
);

export enum LOGIN_STATUS {
    NOT_LOGIN,
    LOADING,
    LOADED,
    ERROR
}

interface LoginProps {

}

interface LoginState {
    username: string;
    password: string;
    loginStatus: LOGIN_STATUS;
    isOpenSnackbar: boolean;
    message: string;
}

const LoginAuth: React.FC<LoginState> = (props: LoginProps) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.NOT_LOGIN);
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
    const [message, setMessage] = useState('');

    const history = useHistory();
    const classes = useStyles();

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setMessage('');
        setLoginStatus(LOGIN_STATUS.LOADING);

        await AuthService.login({username, password})
            .then(() => {
                setLoginStatus(LOGIN_STATUS.LOADED);
                history.push('/products');
            })
            .catch(() => {
                setLoginStatus(LOGIN_STATUS.ERROR);
                setIsOpenSnackbar(true);
            });

    }

    const handleCloseSnackbar = () => {
        setIsOpenSnackbar(false);
    }

    const statusRender = () => {
        if (loginStatus === LOGIN_STATUS.LOADING) {
            return <CircularProgress size={25}/>
        }
    }

    const headerAuth = () => (
        <Grid container className={classes.gridHeader} >
            <Grid item xs={5}>
                <Typography variant="subtitle1">
                    Enter to PLM
                </Typography>
            </Grid>
            <Grid item xs={5}>
                {statusRender()}
            </Grid>
        </Grid>
    )

    const authForm = () => (
        <React.Fragment>
            <TextField className={classes.textField} onChange={onChangeUsername} label="Login"
                       variant="outlined"/>
            <TextField className={classes.textField} onChange={onChangePassword} label="Password"
                       variant="outlined"/>
            <Button onClick={handleLogin} className={classes.textField} variant="outlined" color="primary">
                LOGIN
            </Button>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <Grid className={classes.gridMain} container justify="center" alignItems="center">
                <Card className={classes.card}>
                    {headerAuth()}
                    <CardContent>
                        {authForm()}
                    </CardContent>
                </Card>
            </Grid>
            <Snackbar open={isOpenSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert severity="error" onClose={handleCloseSnackbar}>
                    Login error!
                </Alert>
            </Snackbar>
        </React.Fragment>
    )
}

export default LoginAuth;
