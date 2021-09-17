import React, {Component} from 'react';
import Joi from "joi-browser";


class Login extends Component {
    state = { 
        username:"",
        password:"",
        errors:{},
     }
     
     schema = {
        username:Joi.string().required(),
        password:Joi.string().required(),
     }

     handleChange = (e) => {
         //clone
         const state = {...this.state};
         //edit
         state[e.currentTarget.name] = e.currentTarget.value;
         //setState
         this.setState(state)
     }
     handleSubmit= e =>{
        e.preventDefault();

        const errors = this.validate();
        if (errors) {
            return;
        } 
     }
     validate = () => {
         const errors = {};

         const state = {...this.state};
         delete state.errors;

         const res = Joi.validate(state, this.schema, {abortEarly: false})
         
         if(res.error === null ){
             this.setState({errors:{}});
             return null;
         }
         
         for (const error of res.error.details){
            errors[error.path] = error.message; 
        }

         /* 
         if(this.state.username.trim() === "") errors.username = "Username is required";
         if(this.state.password.trim() === "") errors.password = "Password is required";
         */
         
         this.setState({errors});

         return (Object.keys(errors).length ? errors : null)

     }
    render() {
        return ( 
            
                <form onSubmit = {this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange = {this.handleChange}
                        name = "username"
                        type="text" 
                        className="form-control" 
                        id="username" 
                        aria-describedby="emailHelp" 
                    />
                    {this.state.errors.username && <div className="alert alert-danger">{this.state.errors.username}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        value={this.state.password}
                        onChange = {this.handleChange}
                        name="password" 
                        type="password" 
                        className="form-control" 
                        id="password" 
                    />
                    {this.state.errors.password &&<div className="alert alert-danger">{this.state.errors.password}</div>}
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        
         );
    }
}
 
export default Login;