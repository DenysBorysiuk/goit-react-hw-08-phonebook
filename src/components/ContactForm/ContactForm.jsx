import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Form, Label, FormBtn, Title } from './ContactForm.styled';
import { BsPersonPlusFill } from 'react-icons/bs';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts.find(option => option.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(
      addContact({
        name,
        number,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Title>Contact</Title>
      <Label>
        <input type="text" name="name" placeholder="Enter contact name" />
        <span>Name</span>
      </Label>
      <Label>
        <input type="tel" name="number" placeholder="Enter contact number" />
        <span>Number</span>
      </Label>
      <FormBtn type="submit">
        <BsPersonPlusFill />
        &nbsp; Add contact
      </FormBtn>
    </Form>
  );
};
