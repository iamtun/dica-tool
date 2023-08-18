const {client} = require('./db/index.js');
const { getSubTitleFromSubContent } = require('./update-subtitle.js');

// Connect to the database
client.connect((err) => {
    if (err) {
      console.error('Error connecting to PostgreSQL database:', err);
    } else {
      console.log('Connected to PostgreSQL database!');
    }
});


getSubTitleFromSubContent(client)