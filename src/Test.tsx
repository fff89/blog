import { Button } from "antd";
import { computePosition, flip, shift } from "@floating-ui/dom";
import { useEffect, useRef } from "react";

export default () => {

  const refButton = useRef<HTMLElement>(null)
  const refTooltip = useRef<HTMLDivElement>(null) 
  
  useEffect(() => {
    if (!refButton?.current || !refTooltip.current) return
    computePosition(refButton.current, refTooltip.current, {
      placement: 'right',
      middleware: [flip(), shift()],
    }).then(({x, y}) => {
      if (!refButton?.current || !refTooltip.current) return
      Object.assign(refTooltip.current.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    })
  }, [])

  return <div style={{ position: 'relative' }}>
    
    <Button ref={refButton}>测试</Button>
    <div ref={refTooltip} style={{ position: 'absolute' }}>提示提示</div>
  </div>
}