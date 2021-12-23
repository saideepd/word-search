import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Header from './components/Header/Header';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [status, setStatus] = useState("");

  const dictionaryApi = async () => {
    if (!(word === null || word === '')) {
      try {
        await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        ).then((response) => {
          setMeanings(response.data);
          setStatus(response.status);
        }).catch((error) => {
          setStatus(error.response.status);
          while (meanings.length) {
            meanings.pop();
          }
        })

      } catch (error) {
        console.log(error);
      }
    }
  };

  // console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >

        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />

        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            category={category}
            status={status}
          />
        )}

      </Container>
    </div>
  );
}

export default App;
