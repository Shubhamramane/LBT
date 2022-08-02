import React, { useContext } from 'react';
import { Formik } from 'formik';
import './App.css';
import {Row,Col,Button} from  'react-bootstrap';
import Union1 from './image/Union1.svg';
import SignIn from './image/Rectangle85.svg';
import {useHistory} from 'react-router-dom';
// import UserContext from './UserContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Sign_In = () => {
   const history = useHistory();
   return(
  <div>
      <Row className="justify-content-center mt-5">
      <Col lg={5} className="signinpage">
          <img src={Union1} className="mt-5"></img>
           <h3 className="mt-3">Sign in to LBT</h3>
           <Link className="uline mt-1" to="/Sign_In"><button className="signin-btn">Sign In</button></Link>
           <Link className="uline mt-1" to="/Sign_Up"><button className="create-btn ms-3 mb-4">Create Account</button></Link>
     
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.password) {
            errors.password = 'Password Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          fetch("http://localhost:9000/login/logininfo",{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    credentials:'include',
                    body:JSON.stringify({email: values.email,password: values.password})
                }).then(function (response) {
                    return response.json();
                }).then(function (data){
                    console.log(data);
                    if(data.status==true){
                      history.push("/Home")
                    }
                });

          alert("Login Successfully");
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input className="input-type"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}<br/><br/>
          <input className="input-type"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}<br/><br/>
          <button type="submit" className="Sign-in-submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    </Col>
    <Col lg={5} className="sign-in-img">
            <img src={SignIn} style={{height:"400px"}}></img>
        </Col> 
    </Row>
  </div>
);
};

export default Sign_In;

