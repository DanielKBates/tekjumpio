import hljs from "highlight.js";
import Typewriter from "./Typewriter";
import { textBody } from "../../utils/codeBlockText";
import "highlight.js/styles/github-dark-dimmed.css"; // THIS STYLE

const CodeBlock = () => {
  function unesc(s) {
    return s
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "«")
      .replace(/&gt;/g, "»")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"');
  }

  return (
    <div
      className="p-6 bg-gray-800 rounded-3xl 2xl:min-w-full shadow-3xl"
      style={{ color: "#adbac7" }}
    >
      <pre>
        <Typewriter
          txt={unesc(hljs.highlight(textBody, { language: "jsx" }).value)}
          speed={15}
        />
      </pre>
    </div>
  );
};

export default CodeBlock;
