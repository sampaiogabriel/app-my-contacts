import { useCallback, useEffect, useState } from 'react';

import { toastEventManager } from '../../../utils/toast';

import ToastMessage from '../ToastMessage';
import { Container } from './styles';

const ToastContainer = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleAddToast = ({ type, text, duration }) => {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    };

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveToast = useCallback((id) => {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id),
    );
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          onRemoveMessage={handleRemoveToast}
          message={message}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
