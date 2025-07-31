import SocialMedia from './Components/SocialMedia'
import useCountDown from './Hooks/useCountDown';
import { useEffect, useState } from 'react';
import Card from './Components/Card'
import './App.css'

function App() {
  const { days, hours, minutes, seconds } = useCountDown(14);
  const [info, setInfo] = useState([
    {
      name: "Days",
      time: days,
      animation: false
    },
    {
      name: "Hours",
      time: hours,
      animation: false
    },
    {
      name: "Minutes",
      time: minutes,
      animation: false
    },
    {
      name: "Seconds",
      time: seconds,
      animation: false
    }
  ]);

  useEffect(() => {
    const times = [days, hours, minutes, seconds];
    setInfo(prevInfo =>
      prevInfo.map((item, i) => ({
        ...item,
        time: times[i],
        animation: item.time !== times[i]
      }))
    );
  }, [days, hours, minutes, seconds]);

  return (
    <div className='app'>
      <div className="app-top">
        <h1>We're launching soon</h1>
        <div className="cards">
          {info.map((n, i) => <Card key={i} card={n} />)}
        </div>
      </div>
      <SocialMedia />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/savchrisostomidhs">savchrisostomidhs</a>.
      </div>
    </div>
  )
}

export default App
