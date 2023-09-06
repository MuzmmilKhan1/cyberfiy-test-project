const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080;
app.use(cors())


app.get('/api', (req, res) => {
    res.json({
        "People": [
          {
            "name": "Muzamil",
            "email": "muzamil@gmail.com",
            "phone": "+923001234567"
          },
          {
            "name": "Taha",
            "email": "whyme@gmail.com",
            "phone": "+923219876543"
          },
          {
            "name": "Usman",
            "email": "usman@gmail.com",
            "phone": "+923334567890"
          },
          {
            "name": "Uneeb",
            "email": "pubgplayer@gmail.com",
            "phone": "+923458765432"
          },
          {
            "name": "Haris",
            "email": "nomansland@gmail.com",
            "phone": "+923112345678"
          }
        ]
      }
      )
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
