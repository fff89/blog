// import './styles.scss'

import {
  BubbleMenu, EditorContent, useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Color } from "@tiptap/extension-color";
import React, { useEffect } from 'react'
import TextStyle from '@tiptap/extension-text-style'
import { Instruct } from "./extensions/instruct";

export default () => {
  const editor = useEditor({
    extensions: [
      
      Instruct,
      StarterKit,
      // Document,
      // Paragraph,
      // Text,
      TextStyle,
      Color,
    ],

    content: `
      <p>
        Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
      </p>
    `,
  })

  const [isEditable, setIsEditable] = React.useState(true)

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  const handleRemove = () => {
    if (!editor) return

    editor.chain().focus().deleteSelection().run()
  }


  const onEditorBlur = () => {
    if (!editor) return

    const content = editor.getJSON()
    console.log(content);
  }

  const handleInContent = () => {
    if (!editor) return
    // editor.chain().focus().insertContent({
    //   type: 'paragraph',
    //   content: [
    //     {
    //       type: 'text',
    //       text: 'First paragraph',
    //       marks: [{ type: 'bold' }]
    //     },
    //   ]
    // }).run()
    // editor.chain().focus().setColor('#F98181').run()
    editor.chain().insertContent({
      type: 'emoji',
      attrs: {
        emoji: '😀',
      },
    }).run();
  }


  return (
    <>
      <button onClick={handleRemove}>删除</button>
      <button onClick={handleInContent}>插入内容</button>
      <div>
        <input type="checkbox" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
        Editable
      </div>

      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          strike
        </button>
      </BubbleMenu>}
      <EditorContent editor={editor} onBlur={onEditorBlur} />
    </>
  )
}