export const requiredField = (value) => {
  if (value) {
    return undefined;
  }
  return "Field is required";
};

export const maxLengthCreator = (max) => (value) => {
  if (value && value.length >= max) {
    return `max length is ${max}, you length is ${value.length}`;
  }
  return undefined;
};
