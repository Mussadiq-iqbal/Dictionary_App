import React from 'react';
import {categories} from './Catogires';

function Inputarea({ word, setWord, onSearch, setSelectedLanguage}) {
  return (
    <>
      <div className="flex items-center w-full gap-4 border-b pb-2 flex-wrap sm:flex-nowrap">
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          type="text"
          placeholder="Search word..."
          className="w-1/2 p-2 border rounded-lg"
        />
        <select className="w-1/3 p-2 border rounded-lg"
        onChange={(e) => setSelectedLanguage(e.target.value)}>
        {categories.map((option) => (
          <option key={option.label} value={option.label}>
            {option.value}
          </option>
        ))}
      </select>
        <button 
  onClick={onSearch}
  className="w-full sm:w-1/6 p-3 sm:p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
>
  Search
</button>

      </div>
    </>
  );
}

export default Inputarea;
