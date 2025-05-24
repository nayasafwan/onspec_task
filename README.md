# Candidadate API

## Description
This is a Node.js + Express + Sequelize + MySQL API to manage candidates.


## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/nayasafwan/onspec_task.git
   cd onspec_task

2. Install Dependencies
   ```bash
   npm install

3. Configure Database 
Update config/config.json with your MySQL database credentials:

4. Run the server
   ```bash
   npm run start
5. Run test cases
   ```bash
   npm run test

## Run using Docker 
   ```bash
   docker-compose up --build
   ```

## API Endpoints

### Create a new candidate

```http
POST /candidate
```

### Edit a new Candidate

```http
PATCH /candidate/:id
```