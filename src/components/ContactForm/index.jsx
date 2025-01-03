import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';
import FormGroup from '../FormGroup';
import { Form, ButtonContainer } from './styles';

const ContactForm = ({ buttonLabel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const { errors, setError, getErrorMessageByFieldName, removeError } =
    useErrors();
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const isFormValid = name && errors.length === 0;

  useEffect(() => {
    loadCategories();
  }, []);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      phone,
      category,
    });
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(e) => handlePhoneChange(e)}
          maxLength={15}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isLoadingCategories}
        >
          <option value="">Sem categoria</option>

          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

export default ContactForm;
