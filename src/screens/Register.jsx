import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slice/users/usersApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/Form/FormContainer";
import { setCredentials } from "../slice/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/loaders/Loader";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [register, {isLoading}] = useRegisterMutation();

  useEffect(() =>{
    if(userInfo){
        navigate("/login")
    }
}, [navigate, userInfo]);


  const onSubmit = async (e) => {
    e.preventDefault();

 if(password !== confirmPassword) {
  toast.error('Passwords do not match')
 } else{
  try {
    const res = await register({email, password, name}).unwrap();
    dispatch(setCredentials({...res}))
    navigate('/')
  } catch (err) {
    toast.error(err?.data?.message || err.error)

  }
 }


  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        {isLoading && <Loader />}
        <Button type="submit" variant="primary" className="mt-3">
          Sign Up
        </Button>

        <Row className="py-3">
          <Col>
            Already A Member? <Link to="/login">Sign In</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
}
