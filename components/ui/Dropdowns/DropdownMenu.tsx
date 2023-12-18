import Animated from 'react-native-reanimated';
import { useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import Entypo from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export interface MenuItem {
  id: string;
  label: string;
  onPress?: () => void;
  icon?: DropdownMenuIconProps;
}

interface DropdownMenuProps {
  items: MenuItem[];
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const parentRef = useRef<View | null>(null);
  const { height, width } = useWindowDimensions();

  const onParentLayout = () => {
    parentRef.current?.measureInWindow((x, y, width, height) => {
      setMenuPosition({
        left: width - x * 1.3,
        top: height - y * 1.5,
      });
    });
  };

  return (
    <View ref={parentRef} onLayout={onParentLayout}>
      <Pressable
        style={styles.button}
        onPress={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Entypo name="dots-three-horizontal" size={24} />
      </Pressable>
      {isMenuOpen && (
        <>
          <Pressable
            style={[
              styles.overlay,
              menuPosition,
              { width: width * 1.5, height },
            ]}
            onPress={() => setIsMenuOpen(false)}
          />
          <DropShadow style={styles.innerDropShadow}>
            <DropShadow style={styles.outerDropShadow}>
              <View style={{ position: 'relative' }}>
                <Animated.View style={styles.menu}>
                  {items.map((item, i) => {
                    return (
                      <Pressable
                        className="border-b-gray-400"
                        key={item.id}
                        style={{
                          ...styles.item,
                          ...(i === items.length - 1
                            ? styles.lastItem
                            : i == 0
                              ? styles.firstItem
                              : styles.otherItem),
                        }}
                        onPress={() => alert('HELLO')}
                      >
                        <Text style={styles.text}>{item.label}</Text>
                        {item.icon && (
                          <DropdownMenuIcon
                            lib={item.icon.lib}
                            icon={item.icon.icon}
                            color={'#44403C'}
                          />
                        )}
                      </Pressable>
                    );
                  })}
                </Animated.View>
              </View>
            </DropShadow>
          </DropShadow>
        </>
      )}
    </View>
  );
}

interface DropdownMenuIconProps {
  icon: string;
  lib: 'FE' | 'FA' | 'AD' | 'MI';
  size?: number;
  color?: string;
}

function DropdownMenuIcon({
  icon,
  lib,
  size = 16,
  color = 'black',
}: DropdownMenuIconProps) {
  switch (lib) {
    case 'FE':
      return <FeatherIcon name={icon} size={size} color={color} />;
    case 'FA':
      return <FontAwesomeIcon name={icon} size={size} color={color} />;
    case 'AD':
      return <AntDesign name={icon} size={size} color={color} />;
    case 'MI':
      return <MaterialIcons name={icon} size={size} color={color} />;
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    top: 0,
    left: 0,
  },
  innerDropShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  outerDropShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  menu: {
    minWidth: 200,
    position: 'absolute',
    display: 'flex',
    top: 10,
    right: -30,
    borderRadius: 16,
  },
  button: {},
  itemButton: {},
  itemsContainer: {
    display: 'flex',
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  otherItem: {
    borderBottomWidth: 0.5,
  },
  firstItem: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginBottom: 4,
  },
  lastItem: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginTop: 4,
  },
  text: {
    color: '#44403C',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
});
