import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.mainBg};
  border-radius: ${({theme}) => theme.borderRadius};
  overflow: hidden;
  box-shadow: 3px 3px 6px #000;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
`;

Widget.Header = styled.header`
  padding: 18px 32px;
  background-color: ${({theme}) => theme.colors.primary};
  
  > h6 {
    margin-bottom: 10px;
    text-align: center;
    letter-spacing: 3px;
  }

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;