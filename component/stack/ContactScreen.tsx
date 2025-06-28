import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid, Platform } from 'react-native';
type ContactScreenRouteProp = RouteProp<
  {
    ContactScreen: {
      name: string;
      image: any;
      details: string;
    };
  },
  'ContactScreen'
>;

const ContactScreen: React.FC = () => {
  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const sdkInt =
        Platform.constants?.Release || parseInt(Platform.Version, 10);

      let permissionToRequest =
        sdkInt >= 13
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const granted = await PermissionsAndroid.request(permissionToRequest, {
        title: 'Storage Permission',
        message: 'App needs access to your media library',
        buttonPositive: 'OK',
      });

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const route = useRoute<ContactScreenRouteProp>();
  const { name, image, details } = route.params;
  const [selectedImage, setSelectedImage] = useState(image);

  const handleImagePick = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) {
      console.log('Permission denied');
      return;
    }

    launchImageLibrary({ mediaType: 'photo' }, response => {
      console.log('Picker response:', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image Picker Error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        console.log('Selected Image URI:', uri);
        setSelectedImage({ uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePick}>
        <Image source={selectedImage} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    color: '#E0E6ED',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    color: '#A5B0C2',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ContactScreen;
