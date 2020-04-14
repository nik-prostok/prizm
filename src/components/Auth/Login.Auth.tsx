import {useState} from "react";
import * as React from "react";
import {useHistory} from "react-router";

import {Button, Card, CardContent, createStyles, Grid, TextField, Theme, Typography} from "@material-ui/core";

import AuthService from "../../services/auth.service";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            maxWidth: 300,
        },
        textField: {
            margin: 10
        },
        grid: {
            minHeight: 500
        }
    }),
);

interface LoginProps {

}

interface LoginState {
    username: string;
    password: string;
    loading: boolean;
    message: string;
}

const LoginAuth = (props: LoginProps) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const history = useHistory();
    const classes = useStyles();

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setMessage('');
        setLoading(true);

        AuthService.login({username, password}).then(() => {
            history.push('/products')
        }, err => console.log(err))

    }

    return (
        <Grid className={classes.grid} container justify="center" alignItems="center">
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                        Enter to PLM
                    </Typography>
                    <TextField className={classes.textField} onChange={onChangeUsername} label="Login"
                               variant="outlined"/>
                    <TextField className={classes.textField} onChange={onChangePassword} label="Password"
                               variant="outlined"/>
                    <Button onClick={handleLogin} className={classes.textField} variant="outlined" color="primary">
                        LOGON
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default LoginAuth;
