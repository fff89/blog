// import './styles.scss'

import {
  BubbleMenu, EditorContent, useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Color } from "@tiptap/extension-color";
import TextStyle from '@tiptap/extension-text-style'
import { Instruct } from "./extensions/instruct";
// import Image from '@tiptap/extension-image'

export default () => {
  const editor = useEditor({
    extensions: [
      TextStyle,
      Color,
      Instruct,
      StarterKit,
      // Document,
      // Paragraph,
      // Text,
      
      // Image
    ],

    content: `
      <p>
        Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
      </p>
    `,
  })

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
    // editor.chain().insertContent({
    //   type: 'emoji',
    //   attrs: {
    //     emoji: '😀',
    //   },
    // }).run();
    // editor.chain().setImage({
    //   src: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
    // }).run()
  }


  return (
    <div>
      <button onClick={handleRemove}>删除</button>
      <button onClick={handleInContent}>插入内容</button>

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
    </div>
  )
}