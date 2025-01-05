import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3000');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`, {
      headers: {},
    });
  }

  async createContact(contact) {
    return this.httpClient.post(`/contacts`, { body: contact });
  }
}

export default new ContactsService();
