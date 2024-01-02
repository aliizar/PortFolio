import React, { useState, useRef } from 'react';

const TextEditor = () => {
  document.body.style.backgroundColor = '#334a4b'
  const [text, setText] = useState('');
  const textAreaRef = useRef(null);

  const handleGetText = () => {
    alert('Text: ' + text);
  };

  const handleClearText = () => {
    setText('');
  };

  const handleToUpperCase = () => {
    setText((prevText) => prevText.toUpperCase());
  };

  const handleToLowerCase = () => {
    setText((prevText) => prevText.toLowerCase());
  };

  const handleCopyText = async () => {
    try {
      if (textAreaRef.current) {
        await navigator.clipboard.writeText(textAreaRef.current.value);
        alert('Text copied to clipboard!');
      }
    } catch (err) {
      console.error('Unable to copy text to clipboard', err);
    }
  };

  return (
    <>
    <p className='font-bold relative top-4 left-16 text-white text-4xl font-serif'>Modify Your Text Here</p>
    <div className="container mx-auto my-8 p-4 bg-gray-800 rounded shadow-md">
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-gray-700 text-white h-40 p-2 border rounded"
        placeholder="Type your text here..."
      ></textarea>
<div className='flex space-x-9'>
      <button onClick={handleGetText} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Text
      </button>
      <button onClick={handleClearText} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Clear Text
      </button>
      <button onClick={handleToUpperCase} className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        To Uppercase
      </button>
      <button onClick={handleToLowerCase} className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        To Lowercase
      </button>
      <button onClick={handleCopyText} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
        Copy Text
      </button>
      </div>
    </div>

    <div className='h-40 w-[80rem] bg-gray-800 border-2 border-white rounded relative left-10 bottom-6'>
        <p className='text-white relative top-3 left-3'> Your Text Contain <span className='text-red-700'>{text.length}</span> Chracters and the Total words are {(text.match(/\S+/g) || []).length} </p>
        <p className='text-3xl relative left-10 top-4 font-bold  text-green-300'>Text Summary : </p>
        <textarea className='relative left-16 top-6 w-[70rem] text-red-400 pl-2 border-2 border-white rounded bg-gray-900' value={text}></textarea>
    </div>
    </>
  );
};

export default TextEditor;
