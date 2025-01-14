import { useEffect, useImperativeHandle, useState } from 'react';

import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';

import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';

const useContactForm = ({ ref, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const { errors, setError, getErrorMessageByFieldName, removeError } =
    useErrors();
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = name && errors.length === 0;

  useEffect(() => {
    loadCategories();
  }, []);

  useImperativeHandle(ref, () => ({
    setFieldsValue: (contact) => {
      setName(contact.name);
      setEmail(contact.email ?? '');
      setPhone(contact.phone ?? '');
      setCategoryId(contact.category.id ?? '');
    },
    resetFields: () => {
      setName('');
      setEmail('');
      setPhone('');
      setCategoryId('');
    },
  }));

  const loadCategories = async () => {
    try {
      const categoriesList = await CategoriesService.listCategories();
      setCategories(categoriesList);
    } catch {
      //
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({ name, email, phone, categoryId });

    setIsSubmitting(false);
  };

  return {
    handleSubmit,
    getErrorMessageByFieldName,
    name,
    handleNameChange,
    isSubmitting,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    isLoadingCategories,
    categoryId,
    setCategoryId,
    categories,
    isFormValid,
  };
};

export default useContactForm;
