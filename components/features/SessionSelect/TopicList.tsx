import { Fragment, useState } from 'react';
import { View, ScrollView } from 'react-native';
import DevIcons from '../../../constants/DevIcons';
import TopicItem from './TopicItem';

export default function TopicList() {
  return (
    <ScrollView className="h-1/2 shadow-2xl  rounded-3xl">
      <View className="flex items-center p-6 justify-center flex-row  flex-wrap">
        {DevIcons.map((icon) => (
          <Fragment key={icon.name}>
            <TopicItem Icon={icon} />
          </Fragment>
        ))}
      </View>
    </ScrollView>
  );
}
