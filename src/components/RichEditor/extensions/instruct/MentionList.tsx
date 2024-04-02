import React, { forwardRef } from 'react';

export type MentionListRef = {
 onKeyDown: (props: { event: Event }) => boolean
}

export const MentionList = forwardRef<MentionListRef>((props, ref) => {
 // 组件逻辑...
 return (
    <div>
      <p>1</p>
      <p>2</p>
    </div>
 );
});