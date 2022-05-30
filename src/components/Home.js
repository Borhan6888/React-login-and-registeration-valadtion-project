import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignImg from './SignImg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [inpVal, setInpVal] = useState({
    name: '',
    email: '',
    date: '',
    password: '',
  });

  const [data, setData] = useState([]);

  console.log(inpVal);

  const getdata = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    // console.log(value, name);
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    console.log(inpVal);
    const { name, email, date, password } = inpVal;
    if (name === '') {
      alert('name field is requred');
    } else if (email === '') {
      alert('email faield is required');
    } else if (!email.includes('@')) {
      alert('Please enter valid email');
    } else if (date === '') {
      alert('Date field is required');
    } else if (password === '') {
      alert('Password field is required');
    } else if (password.length < 5) {
      alert('Password length greater five');
    } else {
      console.log('Data added sucesfuly');
      localStorage.setItem('useryoutube', JSON.stringify({ ...data, inpVal }));
    }
  };

  return (
    <>
      <div className="container mt-2">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
            <h3 className="text-center">Sign Up</h3>
            <div className="mt-3">
              <Form>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={getdata}
                    placeholder="Enter Your Name"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Enter Your Email"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Control type="date" name="date" onChange={getdata} />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={getdata}
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>

                <Button
                  variant="primary"
                  className="col-lg-6"
                  onClick={addData}
                  style={{ background: 'rgb(67, 185, 127)' }}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
              <p className="mt-3">
                Already have an account{' '}
                <span>
                  <NavLink to="/login">SignIn</NavLink>
                </span>
              </p>
            </div>
          </div>
          <SignImg />
        </section>
      </div>
    </>
  );
};

export default Home;
