import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Destinations from '../components/destinations';
const ios = Platform.OS=='ios';
const topMargin = ios? 'mt-3': 'mt-10';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: topMargin }}>
        {/* avatar */}
        <View style={{ marginHorizontal: wp(5), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: hp(10) }}>
          <Text style={{ fontSize: wp(7), fontWeight: 'bold', color: 'text-neutral-700' }}>Let's Discover</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{ height: wp(12), width: wp(12) }} />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View style={{ marginHorizontal: wp(5), marginBottom: 4 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'neutral-100', borderRadius: wp(50), padding: wp(4), paddingHorizontal: wp(6), marginBottom: hp(1) }}>
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder='Search destination'
              placeholderTextColor={'gray'}
              style={{ flex: 1, fontSize: hp(2), marginBottom: hp(1), paddingLeft: 1, letterSpacing: 1 }}
            />
          </View>
        </View>

        {/* categories */}
        <View style={{ marginBottom: 4 }}>
          <Categories />
        </View>

        {/* sort categories */}
        <View style={{ marginBottom: 4 }}>
          <SortCategories />
        </View>

        {/* destinations */}
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
