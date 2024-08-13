import React, { useCallback } from 'react'
// Import React dependencies.
// import { useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
const initialValue = [
    {
        type:'header',
        children: [{ text: 'paragraph.' }],
    }
    ,
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]




const Statement = () => {

    const [editor, onChange] = React.useState(() => withReact(createEditor()))

    const renderElement = useCallback(({ attributes, children, element }:any) => {
        switch (element.type) {
          case 'quote':
            return <blockquote {...attributes}>{children}</blockquote>
          case 'link':
            return (
              <a {...attributes} href={element.url}>
                {children}
              </a>
            )
            case 'header':
                return (
                  <p className='text-2xl' {...attributes} href={element.url}>
                    {children}
                  </p>
                )
          default:
            return <p {...attributes}>{children}</p>
        }
      }, [])


    return  (
    <div>
        <Slate editor={editor} initialValue={initialValue}>
      <Editable
      renderElement={renderElement}
      />
    </Slate>
    </div>
  )
}


export default Statement