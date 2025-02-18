import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

function App() {
  const [count, setCount] = useState(0) // декларативный
  const currentTime = new Date().getFullYear() //Императивный стиль - получение текущего года

  // без jsx

  const viteLink = React.createElement(
	'a', { href: 'https://vite.dev', target: '_blank' },
    React.createElement('img', { src: viteLogo, className: 'logo', alt: 'Vite logo' })
  );
const reactLink = React.createElement(
	'a', { href: 'https://react.dev', target: '_blank' },
    React.createElement('img', { src: reactLogo, className: 'logo', alt: 'React logo' })
  );
  const logosDiv = React.createElement('div',null, viteLink,reactLink)

  const button = React.createElement(
    'button',
    { onClick: () => setCount(count + 1) },
    `count is ${count}`
  );
  const cardDiv = React.createElement('div',
	{className: 'card'},
	button,
	React.createElement('p',
		null,
		'Edit',
		React.createElement('code',null, 'src/App.jsx'), ' and save to test HMR',
	),
	React.createElement('p', null, currentTime)
  )

  const readParagraph = React.createElement(
    'p',
    { className: 'read-the-docs' },
    'Click on the Vite and React logos to learn more'
  );

  const h1 = React.createElement('h1', null, 'Vite + React');

  return React.createElement(
    'div',
    null,
    logosDiv,
    h1,
    cardDiv,
    readParagraph
  );
}

// с jsx

//   return (  // начинается декларативный стиль
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
// 		<p>{currentTime}</p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


export default App
