import { Form, ButtonContainer } from './styles';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import FormGroup from '../FormGroup';
import PropTypes from 'prop-types';

const ContactForm = ({ buttonLabel }) => {
  return (
    <Form>
      <FormGroup>
        <Input placeholder='Nome' />
      </FormGroup>

      <FormGroup>
        <Input placeholder='E-mail' />
      </FormGroup>

      <FormGroup>
        <Input placeholder='Telefone' />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">
            Instagram
          </option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type='submit'>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ContactForm;