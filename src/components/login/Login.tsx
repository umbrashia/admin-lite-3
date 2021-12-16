import { Formik, Form, Field } from "formik";
import React from "react";
import * as Yup from 'yup';
import { Button } from "react-bootstrap";
import ErrorContainer from "../../containers/common/ErrorContainer";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";




class Login extends React.Component<{ [key: keyof any]: any }, { [key: keyof any]: any }> {


    constructor(props: any) {
        super(props)
        this.state = {
            islogged: false,
            loginParams: {
                user_id: "admin",
                user_password: "123456"
            }
        };
    }



    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/" />;
        }
        return (
            <div className="login-form">
                <Formik initialValues={this.state.loginParams}

                    validationSchema={Yup.object({
                        user_id: Yup.string().label("User Name").min(5).required(),
                        user_password: Yup.string().label("Password").min(6).required()
                    })}

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            if (values.user_id === "admin" && values.user_password === "123456") {
                                localStorage.setItem("token", "T");
                                this.setState({
                                    islogged: true
                                });
                            }
                            setSubmitting(false);
                        }, 400);
                    }}>
                    <Form>
                        <div style={{ textAlign: "center" }}>

                            <FontAwesomeIcon icon={faDoorOpen} />
                            <br /><br/> 
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_id" className="form-label">UserName</label>
                            <Field name="user_id" className="form-control" />
                            <ErrorContainer name="user_id" otherAttributes={{ info: 1 }} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_password" className="form-label">Password</label>
                            <Field name="user_password" className="form-control" />
                            <ErrorContainer name="user_password" />
                        </div>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Formik>

            </div>
        );
    }
}


export default Login;