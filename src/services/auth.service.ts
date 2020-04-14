import axios from "axios";

const API_URL = "https://plm-mai.herokuapp.com/api/v1/auth/login";

interface LoginParams {
    username: string;
    password: string;
}

interface RegisterParams {
    username: string;
    email: string;
    password: string;
}

class AuthService {

    login({username, password}: LoginParams) {
        return axios({
            method: 'post',
            url: API_URL,
            withCredentials: true,
            auth: {
                username,
                password
            },
            headers: {
                'host': 'https://plm-mai.herokuapp.com',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
            .then((response: any) => {
                console.log(response);
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register({username, email, password}: RegisterParams) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(<string>localStorage.getItem('user'));;
    }
}

export default new AuthService();
