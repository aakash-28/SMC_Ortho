import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form className="signinform">
                <p className="loginphrase">Some Fancy<br></br>
                Catchy Text Here</p>
                <p className="loginphrase2">
                Some more fancy follow up text here about <br></br> why the user should login first
                </p>
                <div className="form-group">
                    <label className="formlabel">Email/Phone Number</label>
                    <input type="email" className="form-control" placeholder="" />
                </div>

                <button type="submit" className="loginbtn btn btn-primary btn-block">Continue to SMC Clinic</button>
                <p className="forgot-password text-center">
                     or
                </p>
            </form>
        );
    }
}
