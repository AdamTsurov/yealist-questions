declare module '*.svg?react' {
  import * as React from 'react'
  const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
  export default SVG
}

