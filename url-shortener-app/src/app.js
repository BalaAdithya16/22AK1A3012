import React from 'react';
import ShortenerForm from './components/ShortenerForm';
import { log } from 'affordmed-logging-middleware';

function App() {
    React.useEffect(() => {
        log('frontend', 'info', 'page', 'App component mounted');
    }, []);

    return (
        <div className="App">
            <ShortenerForm />
        </div>
    );
}

export default App;