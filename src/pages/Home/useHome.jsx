import { useEffect, useState, useCallback, useMemo } from 'react';

import toast from '../../utils/toast';

import ContactsService from '../../services/ContactsService';

const useHome = () => {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.includes(searchTerm.toLowerCase()),
      ),
    [contacts, searchTerm],
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setContacts(contactsList);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTryAgain = async () => {
    loadContacts();
  };

  const handleDeleteContact = (contact) => {
    setIsDeleteModalVisible(true);
    setContactBeingDeleted(contact);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };

  const handleConfirmDeleteContact = async () => {
    try {
      setIsLoadingDelete(true);
      await ContactsService.deleteContact(contactBeingDeleted.id);

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });

      handleCloseDeleteModal();
      handleTryAgain();
    } catch {
      toast({ type: 'danger', text: 'Ocorreu erro ao deletar o contato!' });
    } finally {
      setIsDeleteModalVisible(false);
    }
  };

  return {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    filteredContacts,
    handleConfirmDeleteContact,
    handleCloseDeleteModal,
    handleTryAgain,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  };
};

export default useHome;
