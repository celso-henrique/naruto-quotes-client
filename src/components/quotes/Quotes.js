import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../button';

export const Quotes = ({ quote, speaker, onUpdate = () => {} }) => {
  return (
    <Wrapper>
      <Quote>"{quote}"</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onClick={onUpdate}>Quote No Jutsu</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func
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
