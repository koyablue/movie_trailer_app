import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Row} from './components/Row';
import {requests} from '../src/request'

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
    </div>
  );
}

export default App;
