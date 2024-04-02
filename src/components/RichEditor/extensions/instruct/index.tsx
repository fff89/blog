import { Editor, mergeAttributes, Node } from '@tiptap/core'
import { Paragraph } from "@tiptap/extension-paragraph";
import Suggestion, { SuggestionOptions } from '@tiptap/suggestion'
import { ReactRenderer } from '@tiptap/react'
import Popup from "./Popup";

import { MentionList, MentionListRef } from './MentionList';

const pmPlugin = (editor: Editor, name: string) => {
  return Suggestion({
    editor,
    char: '#',
    items: ({ query }) => {
      return [
        'Lea Thompson',
        'Cyndi Lauper',
        'Tom Cruise',
        'Madonna',
        'Jerry Hall',
        'Joan Collins',
        'Winona Ryder',
        'Christina Applegate',
        'Alyssa Milano',
        'Molly Ringwald',
        'Ally Sheedy',
        'Debbie Harry',
        'Olivia Newton-John',
        'Elton John',
        'Michael J. Fox',
        'Axl Rose',
        'Emilio Estevez',
        'Ralph Macchio',
        'Rob Lowe',
        'Jennifer Grey',
        'Mickey Rourke',
        'John Cusack',
        'Matthew Broderick',
        'Justine Bateman',
        'Lisa Bonet',
      ]
        .filter(item => item.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5)
    },
    render: () => {
      let component: ReactRenderer<MentionListRef>;
      return {
        onStart: props => {
          component = new ReactRenderer(MentionList, {
            props,
            editor: props.editor,
          });
          console.log(component);
          
          const getReferenceClientRect = () => {
            const rect = props.clientRect?.()

            if (!rect) return null
            return rect
          }
          
          // 其他初始化逻辑...
        },
        
        // 其他渲染逻辑...
      };
      // return {
      //   // return 
      //   // onStart: props => {
      //   //   component = new ReactRenderer(Popup, {
      //   //     props,
      //   //     editor: props.editor,
      //   //   })
  
      //   //   if (!props.clientRect) {
      //   //     return
      //   //   }
  
      //   //   popup = tippy('body', {
      //   //     getReferenceClientRect: props.clientRect,
      //   //     appendTo: () => document.body,
      //   //     content: component.element,
      //   //     showOnCreate: true,
      //   //     interactive: true,
      //   //     trigger: 'manual',
      //   //     placement: 'bottom-start',
      //   //   })
      //   // },
  
      //   // onUpdate(props) {
      //   //   component.updateProps(props)
  
      //   //   if (!props.clientRect) {
      //   //     return
      //   //   }
  
      //   //   popup[0].setProps({
      //   //     getReferenceClientRect: props.clientRect,
      //   //   })
      //   // },
  
      //   // onKeyDown(props) {
      //   //   if (props.event.key === 'Escape') {
      //   //     popup[0].hide()
  
      //   //     return true
      //   //   }
  
      //   //   // return component.ref?.onKeyDown(props)
      //   // },
  
      //   // onExit() {
      //   //   popup[0].destroy()
      //   //   component.destroy()
      //   // },
      // }
    },
    command: ({ editor, range, props }) => {
      // increase range.to by one when the next node is of type "text"
      // and starts with a space character
      const nodeAfter = editor.view.state.selection.$to.nodeAfter
      const overrideSpace = nodeAfter?.text?.startsWith(' ')

      if (overrideSpace) {
        range.to += 1
      }

      editor
        .chain()
        .focus()
        .insertContentAt(range, [
          {
            type: name,
            attrs: props,
          },
          {
            type: 'text',
            text: ' ',
          },
        ])
        .run()

      window.getSelection()?.collapseToEnd()
    },
    allow: ({ state, range }) => {
      const $from = state.doc.resolve(range.from)
      const type = state.schema.nodes[name]
      const allow = !!$from.parent.type.contentMatch.matchType(type)

      return allow
    },
  })
}

export const Instruct = Node.create({
  name: 'instruct',
  group: 'inline',
  inline: true,
  selectable: false,
  atom: true,

  addAttributes() {
    return {};
  },

  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`,
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'span',
      HTMLAttributes,
      '😱',
    ];
  },
  addProseMirrorPlugins() {
    return [pmPlugin(this.editor, this.name)]
  }
})