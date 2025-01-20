const express = require('express');
const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// Route to display the clock
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GMT Clock</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #282c34;
          color: white;
        }
        h1 {
          font-size: 3em;
        }
      </style>
    </head>
    <body>
      <h1 id="clock">Loading...</h1>
      <script>
        function updateClock() {
          const now = new Date();
          const gmtTime = now.toUTCString(); // Get current GMT time
          document.getElementById('clock').textContent = 'Current Time (GMT): ' + gmtTime;
        }

        // Update clock every second
        setInterval(updateClock, 1000);

        // Initial clock update
        updateClock();
      </script>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
