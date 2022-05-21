export const SC200_OK = 200;
export const SC_500_INTERNAL_SERVER_ERROR = 500;

export const preparePayload = (_status, _data, _message) => {
  return {
    status: _status,
    data: _data,
    message: _message,
  };
};
