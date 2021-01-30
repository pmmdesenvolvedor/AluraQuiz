import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 100%;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: bold;
  line-height: 1;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    background-color: #333;
    color: #777;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  children: PropTypes.node.isRequired
};

export default Button;