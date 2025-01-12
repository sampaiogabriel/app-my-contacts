import { useEffect, useRef, useState } from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';

import toast from '../../utils/toast';

import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

const EditContact = () => {
  const { id } = useParams();
  const history = useHistory();
  const contactFormRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        contactFormRef?.current?.setFieldsValue(contact);
        setIsLoading(false);
        setContactName(contact.name);
      } catch {
        history.push('/');
        toast({ type: 'danger', text: 'Contato não encontrado!' });
      }
    }

    loadContact();
  }, [id, history]);

  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        category_id: formData.categoryId,
      };

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

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default EditContact;
