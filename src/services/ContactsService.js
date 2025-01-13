import HttpClient from './utils/HttpClient';

import ContactMapper from './mappers/ContactMapper';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3000');
  }

  async listContacts(orderBy = 'asc') {
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy}`, {
      headers: {},
    });

    return contacts.map(ContactMapper.toDomain);
  }

  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.post(`/contacts`, { body });
  }

  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.put(`/contacts/${id}`, { body });
  }

  async getContactById(id) {
    const contact = await this.httpClient.get(`/contacts/${id}`);
    return ContactMapper.toDomain(contact);
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
