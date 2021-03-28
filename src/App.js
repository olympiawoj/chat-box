import React, {useState} from 'react';
import useInterval from '@use-it/interval'
import './App.css';


const messages = [
  { text: 'How do I get better at React?' },
  { text: 'Just build something!' },
  { text: 'OK! What should I build?' },
  { text: 'Iono. Just Google it?' },
  { text: 'Oh! This course looks cool!' },
  { text: 'Send me the link?!' },
  { text: '20ReactApps.com!' },
];

export default function App() {
  const [messageToShow, setMessageToShow] = useState(0) // 1st message to start

  useInterval(()=>{
    setMessageToShow(messageToShow => messageToShow + 1)
  }, 2000)

  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          const even = index % 2 === 0;
          //logic goes here
                    
          // are we supposed to show a typing indicator?
          if(messageToShow + 1 === index){
            return <Typing key="index" even={even}/>
          }
          // are we supposed to show this message?
          if(index > messageToShow) return <div key={index}/>
          return <Message message={message} key={index}/>
          
        })}
      </div>
    </div>
  );
}

function Typing({even}){
    return (
      <div className={`typing ${even ? 'is-right' : 'is-left'}`}>
        <div className="dots">
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    )
}

function Message({message, index}){
  return (
    <div className="message">
    <div className="avatar">🐸</div>
    <div className="text">{message.text}</div>
    <div className="avatar">🐙</div>
  </div>
  )
}
