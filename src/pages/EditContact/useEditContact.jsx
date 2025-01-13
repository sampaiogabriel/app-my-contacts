import { useEffect, useRef, useState } from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';

import toast from '../../utils/toast';

import useIsMounted from '../../hooks/useIsMounted';
import ContactsService from '../../services/ContactsService';

const useEditContact = () => {
  const { id } = useParams();
  const history = useHistory();
  const contactFormRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const isMounted = useIsMounted();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        if (isMounted()) {
          contactFormRef?.current?.setFieldsValue(contact);
          setIsLoading(false);
          setContactName(contact.name);
        }
      } catch {
        if (isMounted()) {
          history.push('/');
          toast({ type: 'danger', text: 'Contato não encontrado!' });
        }
      }
    }

    loadContact();
  }, [id, history, isMounted]);

  const handleSubmit = async (contact) => {
    try {
      const contactData = await ContactsService.updateContact(id, contact);
      setContactName(contactData.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch (error) {
      toast({ type: 'danger', text: 'Ocorreu erro ao editar o contato!' });
    }
  };

  return { isLoading, contactName, contactFormRef, handleSubmit };
};

export default useEditContact;
