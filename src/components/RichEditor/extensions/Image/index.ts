// import { mergeAttributes, Node } from '@tiptap/core'
// import { ReactNodeViewRenderer } from '@tiptap/react'

// import Component from './Image'
// import { Image } from "@tiptap/extension-image";


// export default Image.extend({
//   addNodeView() {
//     return ReactNodeViewRenderer(Component)
//   }
// })

// // export default Node.create({
// //   name: 'reactComponent',

// //   group: 'block',

// //   atom: true,

// //   addAttributes() {
// //     return {
// //       count: {
// //         default: 0,
// //       },
// //     }
// //   },

// //   parseHTML() {
// //     return [
// //       {
// //         tag: 'react-component',
// //       },
// //     ]
// //   },

// //   renderHTML({ HTMLAttributes }) {
// //     return ['react-component', mergeAttributes(HTMLAttributes)]
// //   },

// //   addNodeView() {
// //     const com = ReactNodeViewRenderer(Component)
    
// //     return com
// //   },
// // })