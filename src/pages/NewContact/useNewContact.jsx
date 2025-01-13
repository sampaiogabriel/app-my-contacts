import { useRef } from 'react';

import toast from '../../utils/toast';

import ContactsService from '../../services/ContactsService';

const useNewContact = () => {
  const contactFormRef = useRef(null);

  const handleSubmit = async (contact) => {
    try {
      await ContactsService.createContact(contact);
      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
      });
    } catch (error) {
      toast({ type: 'danger', text: 'Ocorreu erro ao cadastrar o contato!' });
    }
  };

  return { handleSubmit };
};

export default useNewContact;
