import React, {useRef, useEffect, useState} from 'react'

import { LoremIpsum } from "lorem-ipsum";
import calculateSelectionResults from "./services/calculateSelectionResults";

const SelectCounter = (props) => {


  const [loremText, setLoremText] = useState(undefined);

  useEffect(() => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });


    setLoremText(lorem.generateParagraphs(1));
  }, [])

  const loremRef = useRef();

  if(!loremRef.current) {
    console.log("the ref's current is undefined")
  }

  const results = loremRef.current ? calculateSelectionResults(loremText) : "Nothing to select"

  return (
    <>

      <div ref={loremRef}>
        {loremText}

      </div>

      <div>
        {results}
      </div>
    </>
  )
}

export default SelectCounter