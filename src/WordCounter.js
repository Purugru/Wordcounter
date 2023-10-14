import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <textarea
        rows="5"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Write a paragraph..."
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
