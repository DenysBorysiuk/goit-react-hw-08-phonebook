import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Title, Label, FormBtn, Link, Desc } from './RegisterForm.styled';
import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Title>Register Here</Title>
      <Label>
        <input
          // type="text"
          // name="name"
          placeholder="enter username"
          {...register('Name', { required: true })}
        />
        <span>Username</span>
        {errors.exampleRequired && <span>This field is required</span>}
      </Label>
      <Label>
        <input type="email" name="email" placeholder="enter email" />
        <span>Email</span>
      </Label>
      <Label>
        <input type="password" name="password" placeholder="enter password" />
        <span>Password</span>
      </Label>
      <FormBtn type="submit">Register</FormBtn>
      <Desc>
        Have an account? <Link to="/login">LogIn</Link>
      </Desc>
    </Form>
  );
};
