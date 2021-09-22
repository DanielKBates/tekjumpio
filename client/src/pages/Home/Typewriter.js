import React, { useState, useEffect } from "react";
import { textBody } from '../../utils/codeBlockText'

function Typewriter({ loop }) {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex < textBody.length) {
            setTimeout(() => {
                setText(text + textBody[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, 400);
        } else if (loop) {
            // reset the text and the index
            setText("");
            setCurrentIndex(0);
        }
    }, [currentIndex]);
    return (text);
}

export default Typewriter