import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/slices/counter';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
    const { counter } = useSelector(state => state.counter);
    const distpatch = useDispatch();

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Counter is {counter}</h1>
            <div className="card">
                <button onClick={() => distpatch( increment() )}>
                    Increment
                </button>
                <button onClick={() => distpatch( decrement() )}>
                    Decrement
                </button>
                <button onClick={() => distpatch( increment(2) )}>
                    Increment by 2
                </button>
            </div>
        </>
    )
}

export default App
