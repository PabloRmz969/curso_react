export const events = [
    {
        id: '1',
        start: new Date('2023-08-30 13:00:00'),
        end: new Date('2023-08-30 15:00:00'),
        title: 'Cumpleaños de Pablo',
        notes: 'Alguna nota',
    },
    {
        id: '2',
        start: new Date('2023-09-01 13:00:00'),
        end: new Date('2023-09-01 15:00:00'),
        title: 'Cumpleaños de Melissa',
        notes: 'Alguna nota de melissa',
    },
]

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
}

export const calendarWithActiveEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: { ...events[0] }
}