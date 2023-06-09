import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export const MapScreen = () => {
    return (
        <View style={styles.container}>
        <MapView
            style={styles.mapStyle}
            region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            mapType="standard"
            minZoomLevel={15}
            onMapReady={() => console.log('Map is ready')}
            onRegionChange={() => console.log('Region change')}
        >
            <Marker
            title="Photo"
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            />
        </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        fontFamily: 'RobotoRegular',
    },

    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})