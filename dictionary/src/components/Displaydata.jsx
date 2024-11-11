import React from 'react';

function Displaydata({ data }) {
  if (!data) return null;  // Handle case if no data is available

  const wordData = data[0]; // Since API returns an array, get the first object

  return (
    <div className='mt-6 p-4 border rounded-lg shadow-md'>
      {/* Word and Phonetic */}
      <h2 className="text-3xl font-semibold mb-2 text-blue-600">{wordData.word}</h2>

      {/* Pronunciation with audio */}
      <div className="mt-4 md-6">
  {wordData.phonetics.map((phonetic, index) => (
    <div key={index} className=" flex items-center space-x-4">
      {/* Phonetic Text */}
      <p className="italic text-xl text-gray-600">{phonetic.text}</p>

      {/* Audio Player */}
      {phonetic.audio && (
        <audio controls className="w-30">
          <source src={phonetic.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  ))}
</div>


      {/* Meanings and Synonyms/Antonyms */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Meanings:</h3>
        <div className="space-y-4 mt-4">
          {wordData.meanings.map((meaning, index) => (
            <div key={index} className="p-4 border-l-4 border-blue-500 bg-gray-50">
              <p className="text-lg font-bold">{meaning.partOfSpeech}</p>
              {meaning.definitions.map((def, defIndex) => (
                <div key={defIndex} className="mt-2">
                  <p className="font-semibold text-sm">{def.definition}</p>
                  {def.example && (
                    <p className="mt-1 italic text-sm">
                      <span className="font-bold">Example: </span>{def.example}
                    </p>
                  )}
                </div>
              ))}
              {/* Synonyms and Antonyms together */}
              <div className="mt-2">
                {meaning.synonyms.length > 0 && (
                  <p className="text-sm">
                    <span className="font-bold">Synonyms: </span>{meaning.synonyms.join(', ')}
                  </p>
                )}
                {meaning.antonyms.length > 0 && (
                  <p className="text-sm">
                    <span className="font-bold">Antonyms: </span>{meaning.antonyms.join(', ')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Source URLs */}
      <div className="mt-10">
  <h3 className="text-2xl font-semibold text-gray-800 sm:text-xl">Source URLs:</h3>
  <ul className="list-none pl-0 sm:pl-4">
    {wordData.sourceUrls.map((url, index) => (
      <li key={index}>
        <a
          href={url}
          className="text-blue-500 hover:underline text-sm sm:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
}

export default Displaydata;
