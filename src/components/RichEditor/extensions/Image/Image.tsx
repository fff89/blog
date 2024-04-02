// import { NodeViewWrapper  } from "@tiptap/react";
// import { Button, Modal, ButtonProps } from "antd";
// import { useState } from "react";

// export default (props) => {
//   console.log(props);
  
//   const [open, $open] = useState(false)

//   const handleClick:ButtonProps['onClick'] = (evt) => {
//     evt.stopPropagation()
//     evt.preventDefault()
//     $open(!open)
//   }
  
  
//   return <NodeViewWrapper>
//     <div>
//       <Button onClick={handleClick}>测试</Button>
      
//       <Modal
//         open={open}
//         onCancel={() => { $open(false) }}
//       >
//         测试弹窗
//       </Modal>
//     </div>
//   </NodeViewWrapper>
// }