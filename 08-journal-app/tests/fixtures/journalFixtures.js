export const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
}

export const demoStateNotes = {
    isSaving: false,
    messageSaved: '',
    notes: [
        {
            id: 'ABC123',
            title: 'Test title',
            body: 'Test body',
            date: 123456,
            imageUrls: ['https://foto.jpg']
        }
    ],
    active: {
        id: 'ABC123',
        title: 'Test title',
        body: 'Test body',
        date: 123456,
        imageUrls: ['https://foto.jpg']
    },
}
export const demoEmptyNote = {
    title: '',
    body: '',
    date: new Date().getTime()
}
export const demoNote = {
    id: 'ABC123',
    title: 'Test title',
    body: 'Test body - qwerty',
    date: 123456,
    imageUrls: []
}

export const notes = [
    {
        id: 'ABC123',
        title: 'Test title',
        body: 'Test body',
        date: 123456,
        imageUrls: []
    },
    {
        id: 'ABC124',
        title: 'Test title 2',
        body: 'Test body 2',
        date: 1234567,
        imageUrls: []
    }
]


export const demoImageUrls = ["https://foto1.jpg", "https://foto2.jpg", "https://foto3.jpg"]; 