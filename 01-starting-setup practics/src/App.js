import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';
import Components from './assets/components/Components';
import Header from './assets/components/header';
import Child from './assets/components/Child';
import { useState } from 'react';

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  const [data, setData] = useState('')
  console.log(data);
  const ChildToParent = (childData) => {
    setTimeout(() => {
      console.log('Updating data:', childData);
      setData(childData);
    }, 2000);
  }
  return (
    <div>
      <Header keyImage={keyConceptsImage} />

      <Components items={concepts} />

      <Child ChildToParent={ChildToParent} />
      {data}
    </div >
  );
}

export default App;
