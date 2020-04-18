import axios from 'axios';

import {API_URL} from './config.api';

const LOGIN_PATH = '/login';

interface LoginDTO {
    responseHeader: {
        responseDate: string;
    },
    responseBody: {
        token: string;
    }
}

interface LoginParams {
    username: string;
    password: string;
}

interface RegisterParams {
    userName: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

class AuthApi {
    login({username, password}: LoginParams) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${API_URL}${LOGIN_PATH}`, {
                    auth: {
                        username,
                        password
                    }
                })
                .then(response => {
                    const {
                        data: {
                            responseBody: {
                                token
                            }
                        }
                    } = response;
                    if (token) {
                        localStorage.setItem("token", JSON.stringify(token));
                        // setTimeout(resolve, 5000)
                        resolve();
                    }
                })
                .catch(err => reject(err));
        })

    }

    logout() {
        localStorage.removeItem("token");
    }

    register({userName, email, password}: RegisterParams) {
        return axios.post(API_URL + "signup", {
            userName,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(<string>localStorage.getItem('token'));
        ;
    }
}

export default new AuthApi();
