const NotesApi = require('./NotesApi')
require('jest-fetch-mock').enableMocks()

describe('github api', () => {
  it('calls and fetches data', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['buy milk']
    }));
    api.loadNotes((response) => {
      expect(response.notes).toEqual(['buy milk']);    })

  })


  it('#createNotes - posts data to POST/ notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({ content: "hello this is a new note" }));
    api.createNote("hello this is a new note", (response) => {
      expect(response.content).toEqual['hello this is a new note']
    })
  })
})