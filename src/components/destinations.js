import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function Destinations() {
    const navigation = useNavigation()
    return (
        <View style={{ marginHorizontal: wp(4), flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {destinationData.map((item, index) => (
                <DestinationCard navigation={navigation} item={item} key={index} />
            ))}
        </View>
    )
}

const DestinationCard = ({ item, navigation }) => {
    const [isFavourite, toggleFavourite] = useState(false)
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Destination', { ...item })}
            style={{ width: wp(44), height: wp(65) }}
        >
            <View style={{ flex: 1, justifyContent: 'flex-end', position: 'relative', padding: wp(4), paddingVertical: wp(6), marginBottom: hp(5) }}>
                <Image
                    source={item.image}
                    style={{ width: wp(44), height: wp(65), borderRadius: 35, position: 'absolute' }}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={{ width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35, position: 'absolute', bottom: 0 }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={{ backgroundColor: 'rgba(255,255,255,0.4)', position: 'absolute', top: wp(1), right: wp(3), borderRadius: wp(5), padding: wp(3) }}>
                    <HeartIcon size={wp(5)} color={isFavourite ? "red" : "white"} />
                </TouchableOpacity>
                <Text style={{ fontSize: wp(4), color: 'white', fontWeight: '600' }}>{item.title}</Text>
                <Text style={{ fontSize: wp(2.2), color: 'white' }}>{item.shortDescription}</Text>
            </View>
        </TouchableOpacity>
    )
}
