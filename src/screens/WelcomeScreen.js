import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      {/* background image */}
      <Image
        source={require('../../assets/images/welcome.png')}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />

      {/* content & gradient */}
      <View style={{ padding: wp(5), paddingBottom: wp(10), justifyContent: 'space-between' }}>
        <LinearGradient
          colors={['transparent', 'rgba(3, 105, 161, 0.8)']}
          style={{ width: '100%', height: hp(60), position: 'absolute', bottom: 0 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <View style={{ marginBottom: wp(10) }}>
          <Text style={{ fontSize: wp(10), fontWeight: 'bold', color: 'white' }}>Traveling made easy!</Text>
          <Text style={{ fontSize: wp(4), color: 'rgba(255, 255, 255, 0.8)' }}>
            Experience the world's best adventure around the world with us
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: theme.bg(1), alignSelf: 'center', padding: wp(3), paddingLeft: wp(12), paddingRight: wp(12), borderRadius: wp(12) }}>
          <Text style={{ fontSize: wp(5.5), fontWeight: 'bold', color: 'white' }}>Let's go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
