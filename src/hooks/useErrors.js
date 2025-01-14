import { useState, useCallback } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(
    ({ field, message }) => {
      setErrors((prevState) => {
        const errorAlreadyExists = prevState.find(
          (error) => error.field === field,
        );

        if (errorAlreadyExists) {
          return prevState;
        }

        return [...prevState, { field, message }];
      });
    },
    [errors],
  );

  const removeError = useCallback((fieldName) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName),
    );
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldName) => {
      return errors.find((error) => error.field === fieldName)?.message;
    },
    [errors],
  );

  return { errors, setError, removeError, getErrorMessageByFieldName };
}
