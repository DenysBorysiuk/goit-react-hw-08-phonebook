import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormWrap, Input, Message, Label, FormBtn } from './ContactForm.styled';
import { BsPersonPlusFill } from 'react-icons/bs';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim()
    .max(12, 'must be max 12 characters long')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: yup
    .string()
    .required()
    .trim()
    .max(12, 'must be max 12 characters long')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        option => option.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return alert(`${values.name} is already in contacts`);
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrap autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" placeholder="Enter contact name" />
          <Message name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" placeholder="Enter contact number" />
          <Message name="number" component="div" />
        </Label>
        <FormBtn type="submit">
          <BsPersonPlusFill />
          &nbsp; Add contact
        </FormBtn>
      </FormWrap>
    </Formik>
  );
};
