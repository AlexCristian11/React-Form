# React Form

## About

In this project I made a Form using React. The main purpose of the project was to help me understand more how to use forms in React and make some simple validations. The project contains one component called Form.jsx in which resides the form.

![form.PNG](https://github.com/AlexCristian11/React-Form/blob/main/src/form.PNG)

## Form.jsx

Inside the component there are 4 inputs: “email address”(text), “password”(text), “confirm password”(text) and “newsletter”(checkbox); and a submit button.

 

```jsx
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
```

The data is saved inside a state: 

```jsx
const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmedPassword: "",
        okayToEmail: false
    })
```

### Function handleChange()

```jsx
function handleChange(event) {
        const {name, value, checked, type} = event.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
```

This function modifies the state on every change, so that when the form will get submitted the data will already be saved in the state. Also the function checks for the type of input, in order to also change the checkbox input. 

## Function handleSubmit()

```jsx
function handleSubmit(event) {
        event.preventDefault()
        console.log(formData.password === formData.confirmedPassword ? "Successfully signed up!" : "Passwords do not match!");
        console.log(formData.okayToEmail === true ? "Thanks for signing up for our newsletter!" : "");
    }
```

This function checks if the password and the cofirmed password match and if the “okayToEmail” is true, then the user will be subscribed to the newsletter.