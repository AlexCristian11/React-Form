import React, { useState } from 'react';
// import styled from 'styled-components'

function Form() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmedPassword: "",
        okayToEmail: false
    })

    console.log(formData);

    function handleChange(event) {
        const {name, value, checked, type} = event.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData.password === formData.confirmedPassword ? "Successfully signed up!" : "Passwords do not match!");
        console.log(formData.okayToEmail === true ? "Thanks for signing up for our newsletter!" : "");
    }

  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="confirmedPassword"
                    value={formData.confirmedPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="okayToEmail"
                        checked={formData.okayToEmail}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button> 
            </form>
    </div>
  )
}

export default Form