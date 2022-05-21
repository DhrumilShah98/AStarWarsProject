// Server status code - 200 (Success).
export const SC200_OK = 200;

// Server status code - 500 (Internal Server Error).
export const SC_500_INTERNAL_SERVER_ERROR = 500;

/**
 * Represents a typical response.
 * @param {Number} _status - Server status code sent in the response body.
 * @param {Object} _data - Payload data sent in the response body.
 * @param {String} _message - Message sent in the response body.
 * @returns response body.
 */
export const preparePayload = (_status, _data, _message) => {
  return {
    status: _status,
    data: _data,
    message: _message,
  };
};
