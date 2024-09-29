// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// app.use(bodyParser.json());

// app.post('/api/endpoint', (req, res) => {
//   const { text } = req.body;
//   console.log('Received text from client:', text);
//   // Do something with the text here (e.g., save it to a database)
//   res.sendStatus(200);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//working URL


// const express = require('express');
// const bodyParser = require('body-parser');
// const sqlite3 = require('sqlite3').verbose();

// const app = express();
// const port = 5000;

// // Connect to the SQLite database
// const db = new sqlite3.Database('./dict.db');

// app.use(bodyParser.json());

// app.post('/api/endpoint', (req, res) => {
//   const { words } = req.body;

//   // Prepare the SQL query
//   const query = 'SELECT title_URL FROM titles WHERE title = ?';

//   // Initialize an array to store the results
//   const results = [];

//   // Loop through each word and query the database
//   words.forEach(word => {
//     db.get(query, [word], (err, row) => {
//       if (err) {
//         console.error('Error querying database:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       if (row) {
//         // If a matching row is found, push the corresponding title_URL to the results array
//         results.push(row.title_URL);
//       } else {
//         // If no matching row is found, push null to the results array
//         results.push(null);
//       }

//       // If results array length matches the number of words, send the results back to the client
//       if (results.length === words.length) {
//         res.json({ titleURLs: results });
//       }
//     });
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


//URL is title
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 5000;

// Connect to the SQLite database
const db = new sqlite3.Database('./dict.db');

app.use(bodyParser.json());

app.post('/api/endpoint', (req, res) => {
  const { words } = req.body;

  // Prepare the SQL query
  const query = 'SELECT title, title_URL FROM titles WHERE title = ?';

  // Initialize an array to store the results
  const results = [];

  // Loop through each word and query the database
  words.forEach(word => {
    db.get(query, [word], (err, row) => {
      if (err) {
        console.error('Error querying database:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      if (row) {
        // If a matching row is found, push the corresponding title and title_URL to the results array
        results.push({ title: row.title, titleURL: row.title_URL });
      } else {
        // If no matching row is found, push null to the results array
        results.push(null);
      }

      // If results array length matches the number of words, send the results back to the client
      if (results.length === words.length) {
        res.json({ titles: results });
      }
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
