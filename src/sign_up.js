import React from 'react';
import { Formik } from 'formik';
import './App.css';
import {Row,Col} from  'react-bootstrap';
import Union1 from './image/Union1.svg';
import SignIn from './image/Rectangle85.svg';
// import Google from './icon/Google.png';
import Facebook from './icon/Facebook.png';
import Login from './login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Sign_Up = () => (
  <div className="signup">
      <Row className="justify-content-center mt-5">
      <Col lg={5}>
          <img src={Union1} className="mt-5"></img>
           <h3 className="mt-3">Sign in to LBT</h3>
           <Link className="uline mt-1" to="/Sign_In"><button className="signin-btn">Sign In</button></Link>
           <Link className="uline mt-1" to="/Sign_Up"><button className="create-btn ms-3 mb-4">Create Account</button></Link>
     
    <Formik
      initialValues={{ first: '', last:'', password: '' ,email:''}}
      validate={values => {
        const errors = {};
        if (!values.first) {
            errors.first = 'First Name Required';
        }
        if (!values.last) {
            errors.last = 'Last Name  Required';
        }
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

          fetch("http://localhost:9000/test/adduser",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(values)
        }).then(function (response) {
            return response.json();
        }).then(function (data){
            console.log(data);
        });

          alert(JSON.stringify(values, null, 2));
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
            <input className="input-type1"
            type="first"
            name="first"
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.first}
          />
          {errors.first && touched.first && errors.first}
          <input className="input-type1 lastbtn"
            type="last"
            name="last"
            placeholder="Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.last}
          />
          {errors.last && touched.last && errors.last}<br/><br/>
          <input className="input-type"
            type="email"
            name="email"
            placeholder="Email"
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
          <Row>
            <Col lg={6}>
              {/* <a href=""><img src={Google} style={{height:"50px"}}/></a> */}
              {/* <Link className="uline mt-1 white fsize1" to="/Login">LOGin</Link> */}
              <Login/>

            </Col>
            <Col lg={5}>
              <a href=""><img src={Facebook} style={{width:"210px" , marginTop:"5px" , marginBottom:"15px"}}/></a>
            </Col>
          </Row>
          
          
          <button type="submit" className="Sign-in-submit" disabled={isSubmitting}>
            Submit
          </button>
          <p>
            <ul>
              <li>To activate your Law Block  Account, Kindly check your Inbox/Spam/Promotion Folder to verify 
              your email address.
              </li>
            </ul>
          </p>
          <p>
            <ul>
              <li>Verification Email might take upto 15 mintues.
              </li>
            </ul>
          </p>
        </form>
      )}
    </Formik>
    </Col>
    <Col lg={5}>
            <img src={SignIn} style={{height:"400px"}}></img>
        </Col> 
    </Row>
  </div>
);

export default Sign_Up;

