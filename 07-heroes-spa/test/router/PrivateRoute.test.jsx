import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Pruebas en <PrivateRoute />', () => {
    test('debe de mostrar el children si esta autenticado', () => {
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Pablo'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/');
    });

    // test('debe de navegar si esta autenticado', () => {
    //     const contextValue = {
    //         logged: true,
    //         user:{
    //             id: 'ABC',
    //             name: 'Pablo'
    //         }
    //     }

    //     render(
    //         <AuthContext.Provider value={contextValue}>
    //             <MemoryRouter initialEntries={['/login']}>
    //                 <Routes>
    //                     <Route path="login" element={
    //                         <PrivateRoute>
    //                             <h1>Ruta pública</h1>
    //                         </PrivateRoute>
    //                     } />
    //                     <Route path="marvel" element={<h1>Página de marvel</h1>} />
    //                 </Routes>
    //             </MemoryRouter>

    //         </AuthContext.Provider>
    //     );

    //     expect(screen.getByText('Página de marvel')).toBeTruthy();
    // });
})