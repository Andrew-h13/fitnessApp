/* eslint-disable prettier/prettier */
import React, {useRef} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface DoubleTapProps extends TouchableOpacityProps {
  onDoubleTap: () => void;
  children: React.ReactNode;
}

const DoubleTap: React.FC<DoubleTapProps> = ({
  onDoubleTap,
  children,
  ...props
}) => {
  const lastTap = useRef<number | null>(null);

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap.current && now - lastTap.current < 300) {
      onDoubleTap();
    } else {
      lastTap.current = now;
    }
  };

  return (
    <TouchableOpacity onPress={handleDoubleTap} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default DoubleTap;
