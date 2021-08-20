const handleError = message => ({
  success: false,
  body: null,
  error: message,
});

const handleSuccess = body => ({
  success: true,
  body,
  error: null,
});

const handleFormError = ({ errors }) =>
  handleError(
    Object.entries(errors).reduce(
      (acc, [key, value]) => `${acc ? `${acc}, ` : ''}${key}: ${value}`,
      ''
    )
  );

module.exports = { handleError, handleSuccess, handleFormError };
