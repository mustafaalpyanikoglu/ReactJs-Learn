import './App.css'
import './components/header/AppHeader.css'
import './components/coreConcept/CoreConcept.css'

import AppHeader from './components/header/AppHeader.jsx';

import CoreConcepts from './components/coreConcept/CoreConcepts.jsx';
import Examples from './components/example/examples.jsx';

const reactDescriptions = ['Fundamental', 'Crucial', 'Essential', 'Important', 'Necessary', 'Vital'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function App() {
    return (
        <div>
            <AppHeader reactDescription={reactDescriptions[genRandomInt(5)]} />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </div>
    )
}

export default App