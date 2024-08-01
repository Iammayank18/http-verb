# http-verb

A utility package to simplify HTTP status handling by providing a comprehensive list of HTTP status codes with helpful and descriptive messages. This package is designed to help developers easily manage and interpret HTTP responses in their applications.

## Features

- Provides descriptions for all standard HTTP status codes.
- Includes both successful responses and error responses.
- Allows for customizable messages to be appended to standard descriptions.
- Simplifies error handling and status message generation.

## Installation

You can install the package using npm:

```bash
npm install http-verb
```

## Usage

Here's how you can use the `http-verb` package in your Node.js application:

### Get a Status Message

Retrieve a descriptive message for a specific HTTP status code:

```javascript
const { getStatusMessage } = require('http-verb');

const message = getStatusMessage(404);
console.log(message); // Output: Not Found: The requested resource could not be found.
```

### Get a Status Message with a Custom Message

Add a custom message to the standard description:

```javascript
const { getStatusMessage } = require('http-verb');

const customMessage = getStatusMessage(500, 'Please contact support.');
console.log(customMessage); 
// Output: Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request. Please contact support.
```

### Create a Status Object

Create an object that includes both the status code and the descriptive message:

```javascript
const { createStatus } = require('http-verb');

const status = createStatus(403, 'Access denied.');
console.log(status);
// Output: { statusCode: 403, message: 'Forbidden: You do not have permission to access this resource. Access denied.' }
```

## API

### `getStatusMessage(statusCode, [customMessage])`

- **statusCode**: The HTTP status code (number).
- **customMessage**: Optional custom message to append to the standard description (string).
- **Returns**: A descriptive message for the given status code.

### `createStatus(statusCode, [customMessage])`

- **statusCode**: The HTTP status code (number).
- **customMessage**: Optional custom message to append to the standard description (string).
- **Returns**: An object with `statusCode` and `message` properties.

## Supported HTTP Status Codes

The package supports all standard HTTP status codes, including:

- Informational Responses (100-199)
- Successful Responses (200-299)
- Redirection Messages (300-399)
- Client Error Responses (400-499)
- Server Error Responses (500-599)

## License

This package is licensed under the [MIT License](LICENSE). See the `LICENSE` file for more details.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/your-repo/http-verb).

