import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Entypo name="dots-three-horizontal" size={24} />
      </Pressable>
      {isMenuOpen && (
        <DropShadow
          style={{
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.1,
            shadowRadius: 5,
          }}
        >
          <DropShadow
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowOffset: {
                width: 10,
                height: 8,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5,
            }}
          >
            <View style={styles.menu}>
              <View style={styles.itemsContainer}>
                {items.map((item, i) => {
                  return (
                    <DropShadow
                      style={{
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffset: {
                          width: 2,
                          height: 2,
                        },
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                      }}
                    >
                      <Pressable
                        className="border-b-gray-400"
                        style={
                          i === items.length - 1
                            ? styles.lastItem
                            : i == 0
                              ? styles.firstItem
                              : styles.item
                        }
                        key={item.id}
                        onPress={item.onPress}
                      >
                        <View style={styles.itemButton}>
                          <Text style={styles.text}>{item.label}</Text>
                          {item.icon && (
                            <DropdownMenuIcon
                              lib={item.icon.lib}
                              icon={item.icon.icon}
                              color={'#44403C'}
                            />
                          )}
                        </View>
                      </Pressable>
                    </DropShadow>
                  );
                })}
              </View>
            </View>
          </DropShadow>
        </DropShadow>
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
  container: {
    position: 'relative',
  },
  menu: {
    minWidth: 200,
    position: 'absolute',
    top: 10,
    right: -30,
    borderRadius: 16,
    zIndex: 40,
  },
  button: {
    zIndex: 20,
  },
  itemButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 50,
  },
  itemsContainer: {
    display: 'flex',
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    marginHorizontal: 8,
  },
  firstItem: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginHorizontal: 8,
    marginBottom: 4,
  },
  lastItem: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 8,
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
