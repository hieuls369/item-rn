import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CategoryList from './component/CategoryList'

import peru from './assets/peru.png';
import calendar from './assets/calendar.png'
import grapes from './assets/grapes.png'
import pizza from './assets/pizza.png'
import popcorn from './assets/popcorn.png'
import wine from './assets/wine.png'


export default function App() {

  const category = [
    { id: 1, title: 'Flag', image: peru },
    { id: 2, title: 'Date', image: calendar },
    { id: 3, title: 'Fruits', image: grapes },
    { id: 4, title: 'Fast Food', image: pizza },
    { id: 5, title: 'Movie', image: popcorn },
    { id: 6, title: 'Bar', image: wine }
  ];

  const [useCategory, changeCategory] = useState(category);

  return (
    <View style={styles.container}>
      <ScrollView>
        {category.map( item  => 
          <CategoryList key={item.id} category={item} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#663399',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
