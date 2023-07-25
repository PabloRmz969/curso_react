import { addNewEmpyNote, clearNotesLogout, deleteNoteById, journalSlice, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "../../../src/store/journal/journalSlice";
import { demoNote as demoEmptyNote, demoImageUrls, demoNote, demoStateNotes, initialState, notes } from "../../fixtures/journalFixtures";

describe('Pruebas en JournalSlice', () => {
    test('debe de regresar el estado inicial y llamarse "journal"', () => {
        const state = journalSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
        expect(journalSlice.name).toBe('journal');
    });

    test('savingNewNote debe de indicar que esta guardando una nota', () => {
        const state = journalSlice.reducer(initialState, savingNewNote(initialState));
        expect(state).toEqual({ isSaving: true, messageSaved: '', notes: [], active: null })
    });

    test('addNewEmpyNote debe de agregar una nota vacía', () => {
        const state = journalSlice.reducer(initialState, addNewEmpyNote(demoEmptyNote));
        expect(state.notes).toEqual([demoEmptyNote]);
    });

    test('setActiveNote debe poner activa una nota', () => {
        const state = journalSlice.reducer(demoStateNotes, setActiveNote(demoNote));
        expect(state.active).toEqual(demoNote);
        expect(state.messageSaved).toBe('');
    });

    test('setNotes debe asignar las notas', () => {
        const state = journalSlice.reducer(initialState, setNotes(notes));
        expect(state.notes).toEqual(notes);
    });

    test('setSaving debe habilitar la bandera de guardando', () => {
        const state = journalSlice.reducer(demoStateNotes, setSaving());
        expect(state.isSaving).toBe(true);
        expect(state.messageSaved).toBe('');
    });

    test('updateNote debe actualizar la nota activa', () => {
        const state = journalSlice.reducer(demoStateNotes, updateNote(demoNote));
        const noteChanged = state.notes.reduce(note => note.id == demoNote.id);
        expect(noteChanged).toEqual(demoNote);
    });

    test('setPhotosToActiveNote debe de asignar las urls de fotos a la nota activa', () => {
        const beforState = journalSlice.reducer(demoStateNotes, {});
        const imgBefore = beforState.notes.reduce(note => note.id == state.active.id);

        const state = journalSlice.reducer(demoStateNotes, setPhotosToActiveNote(demoImageUrls));
        const imgUrls = [...imgBefore.imageUrls, ...demoImageUrls];
        expect(state.active.imageUrls).toEqual(imgUrls);
    });

    test('clearNotesLogout debe de limpiar la data', () => {
        const state = journalSlice.reducer(demoStateNotes, clearNotesLogout());
        expect(state).toEqual({ isSaving: false, messageSaved: '', notes: [], active: null });
    });

    test('deleteNoteById debe de borrar la nota por Id', () => {
        const state = journalSlice.reducer(demoStateNotes, deleteNoteById(demoNote.id));
        expect(state.active).toBe(null);
        expect(state.notes).toEqual([]);
    });
})