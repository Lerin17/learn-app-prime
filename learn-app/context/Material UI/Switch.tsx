import * as React from 'react';
import {
  Switch as BaseSwitch,
  SwitchThumbSlotProps,
  SwitchProps,
} from '@mui/base/Switch';

const Switch = React.forwardRef(function Switch(
  props: SwitchProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  return (
    <BaseSwitch
      {...props}
      ref={ref}
      slotProps={{
        thumb: {
          className:
            'ring-cyan-500 dark:ring-cyan-400 ring-2 w-4 h-4 -mt-1 -ml-2 flex items-center justify-center bg-white rounded-full shadow absolute',
        },
        root: { className: 'w-full relative inline-block h-2 cursor-pointer' },
             track: {
          className: 'bg-cyan-500 dark:bg-cyan-400 h-2 absolute rounded-full',
        },
      }}
    />
  );
});

export default Switch;
