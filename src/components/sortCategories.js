import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { sortCategoryData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { theme } from '../theme'

export default function SortCategories() {
    const [activeSort, setActiveSort] = useState('Popular')

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: wp(4), backgroundColor: 'neutral-100', borderRadius: wp(50), padding: wp(2), paddingHorizontal: wp(4), marginBottom: hp(2) }}>
            {sortCategoryData.map((sort, index) => {
                let isActive = sort === activeSort
                let activeButtonStyle = isActive ? { backgroundColor: 'white', shadow: 'true' } : {}
                return (
                    <TouchableOpacity
                        onPress={() => setActiveSort(sort)}
                        key={index}
                        style={{ padding: wp(3), paddingHorizontal: wp(4), borderRadius: wp(50), flex: 1, ...activeButtonStyle }}
                    >
                        <Text style={{ fontSize: wp(4), fontWeight: '600', color: isActive ? theme.text : 'rgba(0,0,0,0.6)' }}>{sort}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
