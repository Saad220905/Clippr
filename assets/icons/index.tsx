import { View, Text } from 'react-native'
import React from 'react'
import Home from './Home';
import Mail from './Mail';
import Lock from './Lock';
import User from './User';
import Heart from './Heart';
import Plus from './Plus';
import Search from './Search';
import Location from './Location';
import Call from './Call';
import { theme } from '../../constants/theme';
import Camera from './Camera';
import Edit from './Edit';
import ArrowLeft from './ArrowLeft';
import ThreeDotsCircle from './ThreeDotsCircle';
import ThreeDotsHorizontal from './ThreeDotsHorizontal';
import Comment from './Comment';
import Share from './Share';
import Send from './Send';
import Delete from './Delete';
import Logout from './logout';
import Image from './Image';
import Video from './Video';
import { SvgProps } from 'react-native-svg';

const icons: Record<string, React.FC<SvgProps>> = {
    home: Home,
    mail: Mail,
    lock: Lock,
    user: User,
    heart: Heart,
    plus: Plus,
    search: Search,
    location: Location,
    call: Call,
    camera: Camera,
    edit: Edit,
    arrowLeft: ArrowLeft,
    threeDotsCircle: ThreeDotsCircle,
    threeDotsHorizontal: ThreeDotsHorizontal,
    comment: Comment,
    share: Share,
    send: Send,
    delete: Delete,
    logout: Logout,
    image: Image,
    video: Video,
} as const;

const Icon = ({ name, color, size = 24, strokeWidth = 1.9, ...props }: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" does not exist in the icon set`);
    return null;
  }
  return (
      <IconComponent
          height={size}
          width={size}
          strokeWidth={strokeWidth}
          color={theme.colors.textLight}
          {...props}
      />
  );
}

export default Icon;
