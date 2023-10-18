import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { theme } from '../theme'
import { categoriesData } from '../constants'

export default function Categories() {
  return (
    <View style={{ marginBottom: 5 }}>
      <View style={{ marginHorizontal: wp(5), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: wp(4), fontWeight: '600', color: 'text-neutral-700' }}>Categories</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={{ flexDirection: 'row', marginHorizontal: wp(5), marginBottom: hp(5) }}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((cat, index) => (
          <TouchableOpacity key={index} style={{ flex: 1, alignItems: 'center', marginHorizontal: wp(2) }}>
            <Image source={cat.image} style={{ width: wp(20), height: wp(19), borderRadius: wp(3) }} />
            <Text style={{ fontSize: wp(3), color: 'text-neutral-700', fontWeight: '500' }}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
