
import { useEffect, useState } from "react";
import PropTypes from "prop-types";


export default function App() {

  const [advice, setAdvice] = useState("");
  const [clickCount, setClickCount] = useState(0);
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()
    console.log(data)
    setAdvice(data.slip.advice)
    setClickCount((e) => e + 1)
  }
  useEffect(function () {
    getAdvice()
  }, []);

  return (<div>
    <h1>Hello World!</h1>
    <button onClick={getAdvice}>Get Advice</button>
    <h1>{clickCount} -- {advice}</h1>
    <Message count={clickCount} />
  </div>);

}



function Message(props) {
  return (<p>
    You have read {props.count} messages
  </p>);
}


Message.propTypes = {
  count: PropTypes.number.isRequired
}