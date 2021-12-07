import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext:{
    flex: 1,
    width: "100%",
    height: "auto",
    paddingTop:20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  formLabel:{
    color: '#000000',
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: '400',
  }, 
  
  input : {
  width: "90%",
  borderRadius: 50,
  backgroundColor: "#DCDCDC",
  height: 40,
  margin: 10,
  paddingLeft: 10,
  fontSize: 18,
},

butonContainer:{

  width: "100%",

 
},

buttonCalculator:{
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#191970",
  paddingTop: 10,
  paddingBottom: 10,
  margin: 50,
},  

textButtonCalculator:{
  fontWeight: 'bold',
  letterSpacing:3,
  fontSize: 25,
  color: '#ffffff',
}, 

errorMessage:{
  fontSize: 12,
  color: '#ff0000',
  fontWeight: 'bold',
  paddingLeft: 20,
},
resultContaExibition:{
  width:"100%",
  height:"50%",
},


});

export default styles;