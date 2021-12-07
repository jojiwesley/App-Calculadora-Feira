import React from "react";
import { View, Text } from "react-native";

import styles from "./style"

export default function ResultConta(props) {

  return (
    <View style={styles.resultConta}> 
      <Text style={styles.information}>{props.messageResultConta}</Text>  
      <Text style={styles.numberInfo}>{props.resultConta}</Text>  
      
    </View>
  );
}
