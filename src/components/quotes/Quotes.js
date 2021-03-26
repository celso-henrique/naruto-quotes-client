import styled from 'styled-components';
import { Button } from '../button';

export const Quotes = () => {
  return (
    <Wrapper>
      <Quote>
        "I don't understand what's going on, but I'll just pretend that I do.
        *nods head in agreement*"
      </Quote>
      <Speaker>- Naruto Uzumaki</Speaker>
      <Button>Quote No Jutsu</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 2em;
  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
  flex: 1;
  margin: 0;
`;

const Speaker = styled(Quote)`
  text-align: right;
  width: 100%;
  margin-bottom: 50px;
`;
