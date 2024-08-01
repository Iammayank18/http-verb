/**
 * HTTP status codes and their descriptions.
 */
const httpStatuses = {
  // Informational responses
  100: 'Continue: The server has received the request headers and the client should proceed to send the request body.',
  101: 'Switching Protocols: The server is switching protocols as requested by the client.',
  102: 'Processing: The server has received and is processing the request, but no response is available yet.',

  // Successful responses
  200: 'OK: The request has succeeded.',
  201: 'Created: The request has been fulfilled and a new resource has been created.',
  202: 'Accepted: The request has been accepted for processing, but the processing is not yet complete.',
  203: 'Non-Authoritative Information: The request was successful but the information is from a third-party source.',
  204: 'No Content: The server successfully processed the request, but is not returning any content.',
  205: 'Reset Content: The server successfully processed the request, but the client should reset the view.',
  206: 'Partial Content: The server is delivering only part of the resource due to a range header sent by the client.',
  207: 'Multi-Status: The message body contains a number of separate response codes, depending on the request.',
  208: 'Already Reported: The members of a DAV binding have already been enumerated in a previous part of the response.',
  226: 'IM Used: The server has fulfilled a request for a resource using the IMS request header.',

  // Redirection messages
  300: 'Multiple Choices: There are multiple options for the resource that the client may follow.',
  301: 'Moved Permanently: The resource has been permanently moved to a new location.',
  302: 'Found: The resource is temporarily located at a different URI.',
  303: 'See Other: The response to the request can be found under a different URI using the GET method.',
  304: 'Not Modified: The resource has not been modified since the last request.',
  305: 'Use Proxy: The requested resource must be accessed through a proxy.',
  306: 'Switch Proxy: No longer used. Originally meant to specify a proxy that should be used.',
  307: 'Temporary Redirect: The resource resides temporarily under a different URI.',
  308: 'Permanent Redirect: The resource has been permanently moved to a new URI.',

  // Client error responses
  400: 'Bad Request: The server could not understand the request due to invalid syntax.',
  401: 'Unauthorized: Authentication is required to access this resource.',
  402: 'Payment Required: Reserved for future use; not yet implemented.',
  403: 'Forbidden: You do not have permission to access this resource.',
  404: 'Not Found: The requested resource could not be found.',
  405: 'Method Not Allowed: The request method is not supported for the requested resource.',
  406: 'Not Acceptable: The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
  407: 'Proxy Authentication Required: The client must first authenticate itself with the proxy.',
  408: 'Request Timeout: The server timed out waiting for the request.',
  409: 'Conflict: The request could not be completed due to a conflict with the current state of the resource.',
  410: 'Gone: The requested resource is no longer available and will not be available again.',
  411: 'Length Required: The server refuses to accept the request without a defined Content-Length header.',
  412: 'Precondition Failed: One or more conditions in the request header fields were evaluated and found to be false.',
  413: 'Payload Too Large: The request entity is larger than the server is willing or able to process.',
  414: 'URI Too Long: The URI provided was too long for the server to process.',
  415: 'Unsupported Media Type: The request entity has a media type which the server or resource does not support.',
  416: 'Range Not Satisfiable: The server cannot provide the requested range of bytes.',
  417: 'Expectation Failed: The server cannot meet the requirements of the Expect request-header field.',
  418: 'I’m a teapot: Any attempt to instruct a teapot to do something it cannot do will result in a “418 I’m a teapot” error response.',
  421: 'Misdirected Request: The request was directed at a server that is not able to produce a response.',
  422: 'Unprocessable Entity: The request was well-formed but was unable to be followed due to semantic errors.',
  423: 'Locked: The resource that is being accessed is locked.',
  424: 'Failed Dependency: The request failed due to a failure in a previous request.',
  426: 'Upgrade Required: The client should switch to a different protocol.',
  428: 'Precondition Required: The origin server requires the request to be conditional.',
  429: 'Too Many Requests: The user has sent too many requests in a given amount of time.',
  431: 'Request Header Fields Too Large: The server is unwilling to process the request because its header fields are too large.',
  451: 'Unavailable For Legal Reasons: The user requested an illegal resource, such as a web page censored by a legal authority.',

  // Server error responses
  500: 'Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.',
  501: 'Not Implemented: The server does not support the functionality required to fulfill the request.',
  502: 'Bad Gateway: The server received an invalid response from an upstream server.',
  503: 'Service Unavailable: The server is currently unable to handle the request due to a temporary overload or maintenance of the server.',
  504: 'Gateway Timeout: The server did not receive a timely response from an upstream server.',
  505: 'HTTP Version Not Supported: The server does not support the HTTP protocol version that was used in the request.',
  506: 'Variant Also Negotiates: The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.',
  507: 'Insufficient Storage: The server is unable to store the representation needed to complete the request.',
  508: 'Loop Detected: The server detected an infinite loop while processing the request.',
  510: 'Not Extended: Further extensions to the request are required for the server to fulfill it.',
};

 /**
 * Get error message based on status code.
 * @param {number} statusCode - The HTTP status code.
 * @param {string} [customMessage] - Optional custom message to include.
 * @returns {string} The error message.
 */
function getStatusMessage(statusCode, customMessage = '') {
  const message = httpStatuses[statusCode] || 'Unknown Status Code: An unexpected error occurred.';
  return customMessage ? `${message} ${customMessage}` : message;
}

/**
 * Create a status object with a code and message.
 * @param {number} statusCode - The HTTP status code.
 * @param {string} [customMessage] - Optional custom message to include.
 * @returns {Object} The status object.
 */
function createStatus(statusCode, customMessage = '') {
  return {
    statusCode,
    message: getStatusMessage(statusCode, customMessage),
  };
}

module.exports = {
  getStatusMessage,
  createStatus,
};
