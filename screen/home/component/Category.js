import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../styles/styles'
import { FlatList } from 'react-native-gesture-handler'
import { categoryData } from '../../../common/Contant'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories, onSelectedCategory } from '../HomeSlice'

export default function Category() {
  return (
    <View style={styles.category}>
      <Text style={styles.category__text}>Main</Text>
      <Text style={styles.category__text}>Categories</Text>
      <CategoriesList />
    </View>
  )
}

export const CategoriesList = () => {
    //useSelector: lay State tren store
    const categoriesData = useSelector((state) => state.home.categoryData)
    const currentCategory = useSelector((state) => state.home.currentCategory) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [categoriesData])

    renderItem = ({item}) => (
        <TouchableOpacity 
            style={[styles.category_list, currentCategory == item.id ? styles.category_list__selected : styles.category_list ]}
            onPress={()=> dispatch(onSelectedCategory(item.id))} 
        >
            <View style={styles.category_list__circle}>
                <Image style={styles.category_list__circle__icon} source={item.icon} />
            </View>

                <Text style={styles.category_list__text}>{item.name}</Text>

        </TouchableOpacity>
    )

    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {categoriesData}
            renderItem = {renderItem}
        />
    )
}