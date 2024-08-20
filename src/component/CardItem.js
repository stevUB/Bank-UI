import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window");

export default function CardItem({
    imgUrl,
    price,
    cardType,
    cardNumber,
    backgroundColor,
}) {

  return (
    <TouchableOpacity className="mr-4">
        <View
            className="rounded-3xl py-4 justify-between mr-1"
            style={{
                width: width * 0.45,
                height: height * 0.3,
                backgroundColor: backgroundColor,
            }}
        >
            <Image
                source={imgUrl}
                style={{
                    width: 65,
                    height: 65,
                   
                }}
                 resizeeMode="contain"
            />

<View className="space-y-2  ">
                <Text 
                className="text-lg text-white ml-3"
                style={{
                    fontFamily: "spaceGroteskBold",
                }}>
                    {cardNumber}
                </Text>

              
            </View>


            <View className="space-y-2">
                <Text 
                className="text-2xl text-white ml-3"
                style={{
                    fontFamily: "spaceGroteskBold",
                }}>
                    {price}
                </Text>

                <Text
                    className="font-medium text-lg text-white ml-3"
                    style={{
                        fontFamily:"spaceGroteskBold"
                    }}
                >
                    {cardType}
                </Text>
            </View>
        </View>
        
    </TouchableOpacity>
    
  );
}