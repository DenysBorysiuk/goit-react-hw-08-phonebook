import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, FormBtn, Link, Title, Desc } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Title>Login</Title>
      <Label>
        <input type="email" name="email" placeholder="email@mail.com" />
        <span>Email</span>
      </Label>
      <Label>
        <input
          type="password"
          name="password"
          placeholder="enter your password"
        />
        <span>Password</span>
      </Label>
      <FormBtn type="submit">Login</FormBtn>
      <Desc>
        Not a member? <Link to="/register">Register</Link>
      </Desc>
    </Form>
  );
};
