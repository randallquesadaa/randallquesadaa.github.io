import React from 'react'
import useForm from '../hooks/useForm'

const FormularioComponent = () => {
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const { formState, userName, email, password, onInputChange } = useForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState);
    }

    return (
        <>
            <h2>Formulario con React</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="userName"
                        placeholder="Enter username"
                        value={userName}
                        onChange={onInputChange}
                    />
                    <small id="usernameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={onInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default FormularioComponent
