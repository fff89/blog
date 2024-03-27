import { mergeAttributes, Node } from '@tiptap/core'
import { Paragraph } from "@tiptap/extension-paragraph";

export const Instruct = Node.create({
  name: 'emoji',
  group: 'inline',
  inline: true,
  // selectable: false,
  atom: true,
  addAttributes() {
    return {
      'emoji': {
        default: null,
        parseHTML: element => {
          return {
            emoji: element.getAttribute('emoji'),
          };
        },
        renderHTML: attributes => {
          if (!attributes.emoji) {
            return {};
          }

          return {
            'emoji': attributes.emoji,
            'bbc': 'aac'
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'emoji',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    console.log(7788, HTMLAttributes);
    
    return [
      'span', 
      HTMLAttributes, 
      '😱',
    ];
  }
})