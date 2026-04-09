import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import parse, { Element, Text, type HTMLReactParserOptions } from 'html-react-parser'
import DOMPurify from 'dompurify'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface ContentViewerProps {
  content: string
}
const cleanDirtyMarkdown = (htmlString: string) => {
  return htmlString
    .replace(/^<p>/, '')
    .replace(/<\/p>$/, '')
    .replace(/&gt;/g, '>')
    .replace(/<\/?strong>/g, '')
    .replace(/python Copy Download/g, '')
    .replace(/javascript Copy Download/g, '')
    .replace(/&nbsp;/g, ' ')
}

const isMarkdown = (text: string) => {
  return text.includes('```') || text.includes('## ')
}

const extractTextFromNode = (children: any[]): string => {
  let text = ''
  for (const child of children) {
    if (child instanceof Text) {
      text += child.data.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    } else if (child instanceof Element) {
      text += extractTextFromNode(child.children)
    }
  }
  return text
}

export const MarkdownViewer: React.FC<ContentViewerProps> = ({ content }) => {
  if (!content) return null

  const isMd = isMarkdown(content)

  if (isMd) {
    const cleanedMarkdown = cleanDirtyMarkdown(content)
    return (
      <div
        className="content-viewer markdown-style"
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // @ts-ignore
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              const { ref, ...rest } = props

              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus as any}
                  language={match[1]}
                  PreTag="div"
                  {...rest}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} ref={ref as any} {...rest}>
                  {children}
                </code>
              )
            },
          }}
        >
          {cleanedMarkdown}
        </ReactMarkdown>
      </div>
    )
  }
  const cleanHtml = DOMPurify.sanitize(content)

  const htmlOptions: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === 'pre') {
        const codeNode = domNode.children.find(
          (child) => child instanceof Element && child.name === 'code'
        ) as Element | undefined

        if (codeNode) {
          const className = codeNode.attribs?.class || ''
          const match = /language-(\w+)/.exec(className)
          const language = match ? match[1].replace('react', '') : 'javascript'
          const rawCodeString = extractTextFromNode(codeNode.children)

          return (
            <SyntaxHighlighter style={vscDarkPlus as any} language={language} PreTag="div">
              {rawCodeString.trim()}
            </SyntaxHighlighter>
          )
        }
      }
    },
  }

  return <div className="content-viewer html-style">{parse(cleanHtml, htmlOptions)}</div>
}
