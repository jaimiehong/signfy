// import React, { useState } from 'react';

// const TextInputForm = () => {
//   const [text, setText] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('/api/endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send text to the backend');
//       }

//       // Handle successful response here
//       console.log('Text sent successfully');
//     } catch (error) {
//       console.error('Error sending text to the backend:', error);
//     }
//   };

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter Text:
//         <input type="text" value={text} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default TextInputForm;

//works, link text but not URL
// import React, { useState } from 'react';

// const TextInputForm = () => {
//   const [sentence, setSentence] = useState('');
//   const [words, setWords] = useState([]);
//   const [titleURLs, setTitleURLs] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Split the sentence into words
//     const wordArray = sentence.split(' ');

//     try {
//       const response = await fetch('/api/endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ words: wordArray }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch title URLs from the backend');
//       }

//       const data = await response.json();
//       setTitleURLs(data.titleURLs);
//     } catch (error) {
//       console.error('Error fetching title URLs from the backend:', error);
//     }
//   };

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setSentence(value);
//     // Split the sentence into words as the user types
//     const wordArray = value.split(' ');
//     setWords(wordArray);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter Sentence:
//         <input type="text" value={sentence} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//       <div>
//         <h3>Title URLs:</h3>
//         <ul>
//           {titleURLs.map((titleURL, index) => (
//             <li key={index}>{titleURL || 'No URL found'}</li>
//           ))}
//         </ul>
//       </div>
//     </form>
//   );
// };

// export default TextInputForm;

// import React, { useState } from 'react';

// const TextInputForm = () => {
//   const [sentence, setSentence] = useState('');
//   const [words, setWords] = useState([]);
//   const [titleURLs, setTitleURLs] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Split the sentence into words
//     const wordArray = sentence.split(' ');

//     try {
//       const response = await fetch('/api/endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ words: wordArray }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch title URLs from the backend');
//       }

//       const data = await response.json();
//       setTitleURLs(data.titleURLs);
//     } catch (error) {
//       console.error('Error fetching title URLs from the backend:', error);
//     }
//   };

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setSentence(value);
//     // Split the sentence into words as the user types
//     const wordArray = value.split(' ');
//     setWords(wordArray);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter Sentence:
//         <input type="text" value={sentence} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//       <div>
//         <h3>Title URLs:</h3>
//         <ul>
//           {titleURLs.map((titleURL, index) => (
//             <li key={index}>
//               {titleURL ? (
//                 <a href={titleURL} target="_blank" rel="noopener noreferrer">
//                   {titleURL}
//                 </a>
//               ) : (
//                 'No URL found'
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </form>
//   );
// };

// export default TextInputForm;

//URL is title! Works


// import React, { useState } from 'react';

// const TextInputForm = () => {
//   const [sentence, setSentence] = useState('');
//   const [words, setWords] = useState([]);
//   const [titles, setTitles] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Split the sentence into words
//     const wordArray = sentence.split(' ');

//     try {
//       const response = await fetch('/api/endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ words: wordArray }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch titles from the backend');
//       }

//       const data = await response.json();
//       setTitles(data.titles);
//     } catch (error) {
//       console.error('Error fetching titles from the backend:', error);
//     }
//   };

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setSentence(value);
//     // Split the sentence into words as the user types
//     const wordArray = value.split(' ');
//     setWords(wordArray);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter Sentence:
//         <input type="text" value={sentence} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//       <div>
//         <h3>Titles:</h3>
//         <ul>
//           {titles.map((titleData, index) => (
//             <li key={index}>
//               {titleData ? (
//                 <a href={titleData.titleURL} target="_blank" rel="noopener noreferrer">
//                   {titleData.title}
//                 </a>
//               ) : (
//                 'No Title found'
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </form>
//   );
// };

// export default TextInputForm;

import React, { useState } from 'react';
import './textInputForm.css';

const TextInputForm = () => {
  const [sentence, setSentence] = useState('');
  const [titles, setTitles] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Split the sentence into words
    const wordArray = sentence.split(' ');

    try {
      const requests = wordArray.map(word => (
        fetch('/api/endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ words: [word] }), // Send one word at a time
        })
      ));

      const responses = await Promise.all(requests);
      const responseData = await Promise.all(responses.map(response => response.json()));

      const titles = responseData.map(data => (data.titles[0])); // Extract titles from response data

      setTitles(titles);
    } catch (error) {
      console.error('Error fetching titles from the backend:', error);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSentence(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Sentence:
        <input className = "input" type="text" value={sentence} onChange={handleChange} />
      </label>
      <button className = "subbut" type="submit">submit</button>
      <div>
        <h3>Words:</h3>
        <ul>
          {titles.map((titleData, index) => (
            <li key={index}>
              {titleData ? (
                <a href={titleData.titleURL} target="_blank" rel="noopener noreferrer">
                  {titleData.title}
                </a>
              ) : (
                'No link found'
              )}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default TextInputForm;