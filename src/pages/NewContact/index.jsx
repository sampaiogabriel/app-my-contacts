import { useRef } from 'react';

import toast from '../../utils/toast';

import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

const NewContact = () => {
  const contactFormRef = useRef(null);

  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        category_id: formData.categoryId,
      };

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

  return (
    <>
      <PageHeader />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
};

export default NewContact;
