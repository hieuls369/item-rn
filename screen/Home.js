import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CategoryList from '../component/CategoryList';
import data from '../db/data.json';

// import peru from '../assets/peru.png';
// import calendar from '../assets/calendar.png';
// import grapes from '../assets/grapes.png';
// import pizza from '../assets/pizza.png';
// import popcorn from '../assets/popcorn.png';
// import wine from '../assets/wine.png';

export default function Home(props) {

    const { navigation } = props;

    const categoryList = data;
    // const test = {
    //   list:[]
    // }
  
    const [useCategory, changeCategory] = useState(categoryList.category);
    // const [list, changeList] = useState(test.list);

    // useEffect(() => {
    //   axios.get('http://localhost:3000/category')
    //   .then(res => { console.log(res.data)
    //     // changeList({
    //     //   list: res.data
    //     // })
    //   })
    //   .catch(e => console.error(e));
    // }, [])
    
   
    
    return (
      <FlatList
        style={styles.container}
        data={useCategory}
        renderItem={({ item }) =>
          <View style={styles.list}>
            <CategoryList
              style={styles.list}
              category={item}
              onPress={() => navigation.navigate('Category', {
                title: item.title,
                image: item.image
              })}
            />
          </View>}
        keyExtractor={item => `${item.id}`}
        horizontal={false}
        numColumns={2}
      />
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#663399',
      paddingTop: 10,
    },
    list:{
      flex: 1
    }
  });
