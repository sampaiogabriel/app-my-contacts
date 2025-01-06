import { useEffect, useState } from 'react';

import ToastMessage from '../ToastMessage';
import { Container } from './styles';

const ToastContainer = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleAddToast = (event) => {
      const { type, text } = event.detail;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    };

    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage key={message.id} {...message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
