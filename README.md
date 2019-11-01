# API Project: Request Header Parser Microservice for freeCodeCamp

## User stories:

1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

### Example Usage: 

* https://fobabs-request-header-parser-microservice.glitch.me/api/whoami

### Example Output:

* {"ipaddress":"197.211.58.130","language":"en-US,en;q=0.9","software":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36"}

## To run this project locally:

1. You will need to clone this project
```bash
$ git clone https://github.com/fobabs/request-header-parser-microservice.git
$ cd request-header-parser
```
2. To install the dependencies needed for the project, run
```bash
$ npm install
```
3. If you have the devDependency located in package.json installed globally, you can skip this step, otherwise install it using
```bash
$ npm install --only-dev
```
4. Start up the server
```bash
$ npm start
```

**NOTE**: The server is available at `http://localhost:5000` OR `http://127.0.0.1/5000`.