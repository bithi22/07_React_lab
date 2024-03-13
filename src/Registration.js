import React from 'react';
import './Registration.css'

function Registration() {
    return (
        <div className="registration-container">
            <h2>Registration</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />
                </div>

                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" required />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;
