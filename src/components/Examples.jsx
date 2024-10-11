import { useState } from "react";
import TabButton from './TabButton.jsx'
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'


import { EXAMPLES } from '../data.js';
export default function Examples() {

    const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    // selected button => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
}
    return (
        <Section title="Examples" id="examples">
          <Tabs
          buttonsContainer="menu"
          buttons ={ <>
           <TabButton 
          isSelected={selectedTopic === 'components'}
          onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton 
          isSelected={selectedTopic === 'jsx'}
          onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton 
          isSelected={selectedTopic === 'props'}
          onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton 
         onClick={() => handleSelect('state')}>State
         </TabButton>
         </> }>
         {tabContent} 
        
         </Tabs>
         
        
            {!selectedTopic ? <p>Please select a topic.</p> : null}
            {selectedTopic ? (
          <div id="tab-content">
              
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div>
            ) : null}
        
        </Section>
    )

}