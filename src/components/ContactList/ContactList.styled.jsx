import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;
  padding: 10px;
  max-width: 400px;

  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.In};
`;

export const Notice = styled.p`
  display: inline-block;
  padding: 4px 16px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.Out};
`;
