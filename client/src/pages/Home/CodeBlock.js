import { useState, useEffect } from "react"
import Highlight from 'react-highlight'
import Typewriter from "./Typewriter"
import { textBody } from "../../utils/codeBlockText"
import "highlight.js/styles/github-dark-dimmed.css"

const CodeBlock = () => {
  return (
    <div>
      <Highlight className="jsx rounded-xl shadow-3xl">
        {textBody}
        {/* <Typewriter loop={true} /> */}
      </Highlight>
    </div>
  )
}

export default CodeBlock;