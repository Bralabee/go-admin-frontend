import axios from 'axios';
import React, {Component, SyntheticEvent} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
import '../Login.css';

class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';

    submit = async (e: SyntheticEvent) =>{
        e.preventDefault();

        const response = await axios.post(
            'http://localhost:8000/api/register', {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm,

            });
        console.log(response.data)

    }


    render() {
        return (


            <main className="form-signin">
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    <input  className="form-control" placeholder="First Name" required
                           onChange={e => this.first_name = e.target.value}
                    />
                    <input  className="form-control" placeholder="Last Name" required
                           onChange={e => this.last_name = e.target.value}

                    />


                    <input className="form-control" placeholder="name@example.com" required
                           onChange={e => this.email = e.target.value}

                    />
                    <input  className="form-control" placeholder="Password" required
                           onChange={e => this.password = e.target.value}

                    />
                    <input  className="form-control" placeholder="Password Confirm" required
                           onChange={e => this.password_confirm = e.target.value}

                    />


                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
        );
    }
}

export default Register;
