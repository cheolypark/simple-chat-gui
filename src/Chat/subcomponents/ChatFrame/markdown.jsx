import "katex/dist/katex.min.css"
import ReactMarkdown from "react-markdown"
import RemarkMath from "remark-math"
import RemarkBreaks from "remark-breaks"
import RehypeKatex from "rehype-katex"
import RemarkGfm from "remark-gfm"
import RehypeHighlight from "rehype-highlight"
import {useRef} from "react"
import {LoadingIcon} from "../../resource/icons"
import styles from "@/Chat/subcomponents/ChatFrame/Chat.module.scss"


export function PreCode({children}) {
  const ref = useRef(null)

  return (
    <pre ref={ref}>
      <span
        onClick={() => {
          if (ref.current) {
            const code = ref.current.innerText
          }
        }}
      ></span>
      {children}
    </pre>
  )
}

export function Markdown({
                           content,
                           loading,
                           onContextMenu,
                           onDoubleClickCapture,
                           fontSize
                         }) {
  return (
    <div className={styles.chat_textarea}
      style={{fontSize: `${fontSize ?? 14}px`}}
      onContextMenu={onContextMenu}
      onDoubleClickCapture={onDoubleClickCapture}
    >
      {loading ? (
        <LoadingIcon/>
      ) : (
        <ReactMarkdown
          remarkPlugins={[RemarkMath, RemarkGfm, RemarkBreaks]}
          rehypePlugins={[RehypeKatex, [RehypeHighlight, {detect: false, ignoreMissing: true,}],]}
          components={{pre: PreCode}}
        >
          {content}
        </ReactMarkdown>
      )}
    </div>
  )
}
