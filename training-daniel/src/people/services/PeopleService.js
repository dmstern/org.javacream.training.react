const url = "http://h2908727.stratoserver.net:8080/people";

export default class PeopleService {
  people = [];

  async loadData(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getPeople() {
    if (!this.people.length) {
      this.people = await this.loadData(url);
    }

    return new Promise((resolve, reject) => {
      resolve(this.people);
    });
  }
}
