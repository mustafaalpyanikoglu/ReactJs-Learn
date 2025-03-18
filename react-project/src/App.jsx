import { useState } from 'react';

import './App.css'
import './components/header/AppHeader.css'
import './components/coreConcept/CoreConcept.css'

import AppHeader from './components/header/AppHeader.jsx';
import CoreConcept from './components/coreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

import { CORE_CONCEPTS, EXAMPLES } from './utils/data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Essential', 'Important', 'Necessary', 'Vital'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>;
    }

    return (
        <div>
            <AppHeader reactDescription={reactDescriptions[genRandomInt(5)]} />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => (
                            <CoreConcept key={conceptItem.title} {...conceptItem} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            isSelected={selectedTopic === 'components'}
                            onSelect={() => handleSelect('components')}>
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'jsx'}
                            onSelect={() => handleSelect('jsx')}>
                            Jsx
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'props'}
                            onSelect={() => handleSelect('props')}>
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'state'}
                            onSelect={() => handleSelect('state')}>
                            State
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    )
}

export default App