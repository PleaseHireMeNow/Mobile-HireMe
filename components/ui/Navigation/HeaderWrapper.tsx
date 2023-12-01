import { View } from 'react-native';
import TopTab from './TopTab';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function HeaderWrapper({ children }: Props) {
  return (
    <View className="flex flex-col gap-y-2 w-full items-center">
      <TopTab />
      <View className="w-full h-full px-8 flex items-center bg-sunglow-400">
        {children}
      </View>
    </View>
  );
}
