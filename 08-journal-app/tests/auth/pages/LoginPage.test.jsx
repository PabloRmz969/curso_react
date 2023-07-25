import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom'

import { authSlice } from '../../../src/store/auth/authSlice';
import { LoginPage } from '../../../src/auth/pages/LoginPage';


const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});

describe('Pruebas en LoginPage', () => {
    test('debe de mostrarse correctamente', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>

                    <LoginPage />

                </MemoryRouter>
            </Provider>
        )
    })
})

