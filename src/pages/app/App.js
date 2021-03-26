import { useState } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import jutsoSound from '../../sounds/jutso.mp3';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

const INITIAL_QUOTE = {
  quote:
    "I don't understand what's going on, but I'll just pretend that I do. *nods head in agreement*",
  speaker: 'Naruto Uzumaki'
};

const audio = new Audio(jutsoSound);

export function App() {
  const [quote, setQuote] = useState(INITIAL_QUOTE);

  const onUpdate = async () => {
    const resQuote = await getQuote();

    audio.play();
    setQuote(resQuote);
  };

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate} />
      <NarutoImg alt="Naruto holding a kunai" src={narutoImg} />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
