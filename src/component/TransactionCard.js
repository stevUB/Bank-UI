import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window");

export default function TransactionCard({
    imageSource,
    name,
    type,
    amount,
    date,
}) {
  return (
    <View className="rounded-3xl py-8 px-4 justify-between flex-row items-center bg-[#e5e5e5]"
        style={{
            width: "100%",
            maxWidth: width,
             height: height * 0.12,
        }}
    >
      <View className="flex-row space-x-6 items-center justify-center shadow-sm">
        <View className="bg-white rounded-xl">
            <Image source={imageSource}
                style={{
                    width: 65,
                    height: 65,
                }}
                resizeMode="contain"
            />

        </View>
        <View className="space-y-1">
            
            <Text 
                className="text-2xl"
                style={{
                    fontFamily: "spaceGroteskBold",
                }}
            >
                {name}
            </Text> 
                
            <Text 
                className="text-sm text-neutral-500"
                style={{
                    fontFamily: "spaceGroteskMedium",
                }}
            >
                {type}
            </Text> 

        </View>
      </View>

      <View
      className="space-y-1">
        <Text
        className="text-xl"
        style={{
            fontFamily: "spaceGroteskBold",
        }} >
       {amount}</Text>

       <Text
        className="text-sm text-neutral-500"
        style={{
            fontFamily: "spaceGroteskBold",
        }} >
       {date}</Text>
        
      </View>
    </View>
  );
}