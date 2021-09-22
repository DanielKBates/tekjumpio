import { useState, useEffect } from "react"
import Highlight from 'react-highlight'
import Typewriter from "./Typewriter"
import { textBody } from "../../utils/codeBlockText"
import "highlight.js/styles/github-dark-dimmed.css"

const CodeBlock = () => {
  return (
    <div className=" p-6 bg-gray-800 rounded-3xl 2xl:min-w-full">
      <Highlight className="jsx rounded-3xl ">
        {textBody}
        {/* <Typewriter loop={true} /> */}
      </Highlight>
    </div>
  )
}

export default CodeBlock;