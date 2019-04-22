'use strict';

module.exports.helloworld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
    }),
  };
  callback(null, response);
};

module.exports.name = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `${JSON.stringify(context)}`,
    }),
  };
  callback(null, response);
}
