import { SafeAreaView, Text, View } from 'react-native'
import React, { Component, useRef, useEffect } from 'react'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet } from 'react-native'

export default MapScreen = () => {

  const mapRef = useRef()

  const coordinator = {
    latitude: 10.76,
    longtitude: 104.4
  }

  useEffect(() => {
    mapRef.current.animateToRegion(coordinator, 350)
  })

  return (
    <SafeAreaView style={{flex: 1}}> 
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        zoomControlEnabled
        zoomEnabled
        maxZoomLevel={15}
        minZoomLevel={2}
      >
      </MapView>
    </SafeAreaView>
  )
}