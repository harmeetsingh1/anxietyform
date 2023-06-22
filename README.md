# Getting Started

To get started, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/harmeetsingh1/anxietyform.git
cd anxietyform
```

## Client
To start the client, navigate to the `client` directory and run the following command:
```bash
npm install
npm run start
```
This will start the client on port `http://localhost:3000`.

## Server
To start the server, navigate to the `server` directory and run the following command:
```bash
npm install
npm run start
```
Make sure to create a `.env` file in the `server`, `.env.example` is provided as a reference.
This would start the server on port `http://localhost:4000` if no `PORT` is specified in the `.env` file.