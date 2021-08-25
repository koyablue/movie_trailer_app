import React from 'react';
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
