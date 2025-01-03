import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

const NewContact = () => {
  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        category_id: formData.categoryId,
      };

      const response = await ContactsService.createContact(contact);
      console.log(response);
    } catch (error) {
      alert('Ocorreu um erro ao cadastrar o contato!');
      console.log(error);
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
