import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const Main = (props) => {
  return(
  <SafeAreaView style={styles.container}>
    <View>
      <Text>Taxtical</Text>
      <Text style={styles.title}>
      </Text>
      <Separator />
      <Button
        title="택시호출하기"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="동승자 찾기"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <View>
      <Text style={styles.title}>
      </Text>
      <View style={styles.fixToText}>
      </View>
    </View>
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Main;