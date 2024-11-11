import {fetchWordData} from './Api_call/Api'
import React, { useState } from 'react';
import Heading from './components/Heading'
import Inputarea from './components/Inputarea'
import Displaydata from './components/Displaydata'
import Briefnote from './components/Briefnote'
import Footer from './components/Footer'


function App() {

  const [word, setWord] = useState('');  // To store the word entered by the user
  const [wordData, setWordData] = useState(null);  // To store the fetched word data
  const [loading, setLoading] = useState(false); 
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleSearch = async () => {
    if (word.trim()) {
      setLoading(true); 
      setSearchInitiated(true)
      const data = await fetchWordData(word, selectedLanguage);
      setWordData(data);  // Sets the fetched data to state

      setLoading(false); 
      setWord('');
    }
  };


  return (
    <>
      <Heading />
      <div className="flex flex-col w-full sm:w-4/5 mx-auto p-4 sm:px-4 px-6">
  <Inputarea 
    word={word}
    setWord={setWord}
    onSearch={handleSearch}
    setSelectedLanguage={setSelectedLanguage}
  />

{loading && (
          <div className="mt-4 text-center text-xl text-gray-600">
            Please wait...
          </div>
        )}

{!searchInitiated && word.trim() === '' && <Briefnote />}

  {wordData && <Displaydata data={wordData} />}
</div>

<Footer />

    </>
  )
}

export default App
