import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import {
  Item,
  ContactName,
  ContactNumber,
  ContactBtn,
  Avatar,
  TextWrapper,
} from './ContactListItem.styled';
import { BsPersonFill, BsXLg, BsFillTelephoneFill } from 'react-icons/bs';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Avatar>A</Avatar>
      <TextWrapper>
        <ContactName>
          <BsPersonFill />
          {name}
        </ContactName>
        <ContactNumber>
          <BsFillTelephoneFill size="14" />
          {number}
        </ContactNumber>
      </TextWrapper>
      <ContactBtn onClick={handleDelete}>
        <BsXLg />
      </ContactBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
