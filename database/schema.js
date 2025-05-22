const query = require("./db")

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS sys.candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    phone_number VARCHAR(15) NOT NULL,
    preferred_start_time TIME,
    preferred_end_time TIME, 
    linkedin VARCHAR(512),
    github VARCHAR(512),
    comment TEXT
  );
`;

const createTable = async () =>{
    await query(createTableQuery)
}

createTable()