import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const Card = ({field1, field2, field3, field4, field5, ...props}) => {
  return (
    <Pressable style={styles.card} {...props}>
      <View style={styles.cardTitle}>
        {field1 && <Text style={styles.cardText}>{field1}</Text>}
      </View>
      <View style={styles.cardBody}>
        {field2 && <Text style={styles.cardText}>{field2}</Text>}
      </View>
      <View style={styles.cardBody}>
        {field3 && <Text style={styles.cardText}>{field3}</Text>}
      </View>
      <View style={styles.cardBody}>
        {field4 && <Text style={styles.cardText}>{field4}</Text>}
      </View>
      <View style={styles.cardBody}>
        {field5 && <Text style={styles.cardText}>{field5}</Text>}
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // height: 100,
    width: '100%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1,
  },

  cardTitle: {},
  cardBody: {marginTop: 10},
  cardText: {fontSize: 16},
});
