import React, {useState} from 'react';
import { Dimensions,Animated,StyleSheet,View } from 'react-native';
import Card from './Card'
import HideCard from './HideCard';
import { SwipeListView } from 'react-native-swipe-list-view';

const rowTranslateAnimatedValues = {};
Array(20)
    .fill('')
    .forEach((_, i) => {
        rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
    });
export default function App() {
  const [listData, setListData] = useState(
    Array(20)
        .fill('')
        .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
);

const onSwipeValueChange = swipeData => {
    const { key, value } = swipeData;
    if (
        value < -Dimensions.get('window').width &&
        !animationIsRunning
    ) {
        animationIsRunning = true;
        Animated.timing(rowTranslateAnimatedValues[key], {
            toValue: 0,
            duration: 200,
        }).start(() => {
            const newData = [...listData];
            const prevIndex = listData.findIndex(item => item.key === key);
            newData.splice(prevIndex, 1);
            setListData(newData);
            animationIsRunning = false;
        });
    }
};

  return (
    <View style={styles.container}>
    <SwipeListView
                disableRightSwipe
                data={listData}
                renderItem={Card}
                renderHiddenItem={HideCard}
                rightOpenValue={-Dimensions.get('window').width}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onSwipeValueChange={onSwipeValueChange}
                useNativeDriver={false}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"rgba(252,248,237,1)",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
