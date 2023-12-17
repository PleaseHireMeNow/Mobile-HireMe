import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

interface DropdownMenuProps {
  items: any;
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setIsMenuOpen(true)}>
        <Entypo name="dots-three-horizontal" size={24} />
      </Pressable>
      {isMenuOpen && (
        <View style={styles.card}>
          <Text>HELLO</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 40,
    backgroundColor: 'white',
    position: 'absolute',
  },
});
