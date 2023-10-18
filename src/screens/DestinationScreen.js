import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-10';

export default function DestinationScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* destination image */}
            <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
            <StatusBar style={'light'} />

            {/* back button */}
            <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'absolute', ...topMargin }}>
                <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                    style={{ padding: wp(2), borderRadius: wp(50), marginLeft: wp(4), backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                    <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> toggleFavourite(!isFavourite)}
                    style={{ padding: wp(2), borderRadius: wp(50), marginRight: wp(4), backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                    <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite? "red": "white"} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* title & description & booking button */}
            <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 5, flex: 1, justifyContent: 'space-between', backgroundColor: 'white', paddingTop: 8, marginTop: -14 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 6 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: wp(7), fontWeight: 'bold', flex: 1, color: 'text-neutral-700' }}>
                            {item?.title}
                        </Text>
                        <Text style={{ fontSize: wp(7), color: theme.text, fontWeight: '600' }}>
                            $ {item?.price}
                        </Text>
                    </View>
                    <Text style={{ fontSize: wp(3.7), color: 'text-neutral-700', letterSpacing: 1, marginBottom: hp(2) }}>{item?.longDescription}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1 }}>
                        <View style={{ flexDirection: 'row', marginRight: 2, alignItems: 'center' }}>
                            <ClockIcon size={wp(7)} color="skyblue" />
                            <View style={{ flex: 1, marginTop: hp(2), flexDirection: 'column' }}>
                                <Text style={{ fontSize: wp(4.5), fontWeight: 'bold', color: 'text-neutral-700' }}>{item.duration}</Text>
                                <Text style={{ color: 'text-neutral-600', letterSpacing: 1 }}>Duration</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: 2, alignItems: 'center' }}>
                            <MapPinIcon size={wp(7)} color="#f87171" />
                            <View style={{ flex: 1, marginTop: hp(2), flexDirection: 'column' }}>
                                <Text style={{ fontSize: wp(4.5), fontWeight: 'bold', color: 'text-neutral-700' }}>{item.distance}</Text>
                                <Text style={{ color: 'text-neutral-600', letterSpacing: 1 }}>Distance</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SunIcon size={wp(7)} color="orange" />
                            <View style={{ flex: 1, marginTop: hp(2), flexDirection: 'column' }}>
                                <Text style={{ fontSize: wp(4.5), fontWeight: 'bold', color: 'text-neutral-700' }}>{item.weather}</Text>
                                <Text style={{ color: 'text-neutral-600', letterSpacing: 1 }}>Sunny</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{ backgroundColor: theme.bg(0.8), height: wp(15), width: wp(50), marginBottom: 6, marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', alignItems: 'center', borderRadius: wp(50) }}>
                    <Text style={{ fontSize: wp(5.5), color: 'white', fontWeight: 'bold' }}>Book now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
