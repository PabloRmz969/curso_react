import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { addNewEmpyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "../../../src/store/journal/journalSlice";
import { onDeletingNote, startLoadingNotes, startNewNote, startSaveNote, startUploadingFiles } from "../../../src/store/journal/thunks";
import { fileUpload } from "../../../helpers";

describe('Pruebas en thunk.js', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    const uid = 'TEST-01';
    const active = {
        id: 'ABC123',
        title: '',
        body: '',
        date: 123456,
        imageUrls: [] //https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
    }
    const newfile = new File(["foo"], "foo.txt", {
        type: "text/plain",
    });
    test('startNewNote debe crear una nueva nota en blanco', async () => {

        getState.mockReturnValue({ auth: { uid } });

        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmpyNote({
            body: '',
            title: '',
            date: expect.any(Number),
            id: expect.any(String)
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            date: expect.any(Number),
            id: expect.any(String)
        }));

        //Borrar de firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
        const docs = await getDocs(collectionRef);

        const deletePromesies = [];
        docs.forEach(doc => deletePromesies.push(deleteDoc(doc.ref)));
        await Promise.all(deletePromesies);
    }, 10000);

    test('startLoadingNotes debe obtener las notas', async () => {
        getState.mockReturnValue({ auth: { uid } });
        await startNewNote()(dispatch, getState);


        await startLoadingNotes()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(setNotes(
            [
                {
                    id: expect.any(String),
                    date: expect.any(Number),
                    body: '',
                    title: ''
                }
            ]
        ));

        //Borrar de firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
        const docs = await getDocs(collectionRef);

        const deletePromesies = [];
        docs.forEach(doc => deletePromesies.push(deleteDoc(doc.ref)));
        await Promise.all(deletePromesies);
    });

    test('startSaveNote debe guardar la nota activa', async () => {
        getState.mockReturnValue({ auth: { uid }, journal: { active } });

        await startSaveNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(setSaving());
        expect(dispatch).toHaveBeenCalledWith(updateNote({
            id: expect.any(String),
            date: expect.any(Number),
            body: '',
            title: '',
            imageUrls: []
        }));

        //Borrar de firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
        const docs = await getDocs(collectionRef);

        const deletePromesies = [];
        docs.forEach(doc => deletePromesies.push(deleteDoc(doc.ref)));
        await Promise.all(deletePromesies);
    }, 10000);

    test('startUploadingFiles debe de subir las urls de las imagenés', async () => {
        getState.mockReturnValue({ auth: { uid } });

        await startUploadingFiles([newfile])(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(setSaving()); 
        expect(dispatch).toHaveBeenCalledWith(setPhotosToActiveNote([expect.any(String)]));
    });

    test('onDeletingNote debe de subir las urls de las imagenés', async () => {
        getState.mockReturnValue({ auth: { uid }, journal: { active } });

        await onDeletingNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(deleteNoteById(expect.any(String)));
    });
})