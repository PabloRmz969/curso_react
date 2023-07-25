import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
    cloud_name: 'curso-react-pablo',
    api_key: '122668555812579',
    api_secret: 'vL4ZSDHfDJpFGL-PVSv1B3U-BwM',
    secure: true
});

describe('Pruebas en fileUpload', () => {
    test('debe de subir el archivo correctamente a cloudinary', async() => {
        const imageUrl = 'https://m.media-amazon.com/images/I/61qpWL26-lL._AC_UF894,1000_QL80_.jpg';
        const resp = await fetch( imageUrl);
        const blop = await resp.blob();
        const file = new File([blop], 'link.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].toString().replace('.jpg','');
        await cloudinary.api.delete_resources([`journal/${imageId}`],{
            resource_type: 'image'
        });
    });

    test('debe de retornar null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    });
})