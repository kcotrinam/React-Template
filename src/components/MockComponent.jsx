import { useEffect, useState } from "react";
import requestJoke from "./services/ApiRequest";

const Joke = () => {
  const [joke, setJoke] = useState('')
  useEffect(() => {
    requestJoke(setJoke)
  }, [])

  return(
    <>
      <div className="joke-container">{joke}</div>
    </>
  )
}

export default Joke;