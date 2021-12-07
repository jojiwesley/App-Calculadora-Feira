import React, {useState} from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Vibration, 
  Pressable, 
  Keyboard,
  FlatList,
} from "react-native";
import ResultConta from './ResultConta/index';
import styles from './style';


export default function Form() {
  const [pastel, setPastel] = useState(null);
  const [especial, setEspecial] = useState(null);
  const [garrafa, setGarrafa] = useState(null);
  const [lata, setLata] = useState(null);

  
  const [conta, setConta] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [messageConta,  setMessageConta] = useState(null)
  const [contaList,  setContaList] = useState([])
  

function verificationConta(){
  if(conta == null){
    Vibration.vibrate();
    setErrorMessage("Campo Obrigatorio!!!");
  }
}


function contaCalculada(){
  const valorPastel = pastel * 6;
  const valorEspecial = especial * 13;
  const valorGarrafa = garrafa * 7;
  const valorLata = lata * 5;
  let totalConta = (valorPastel+valorEspecial+valorGarrafa+valorLata);
  setContaList ((arr) => [...arr, {id: new Date().getTime(),totalConta}])
  setConta(totalConta)
}

function validationConta(){
   if((pastel || especial || garrafa || lata) != null){
    contaCalculada();
    setMessageConta("Sua Conta É:");
    setErrorMessage(null)
   
  }else{
    verificationConta();
    setConta(null);
  } 
}
function setNullButton(){
  setPastel(null);
  setEspecial(null);
  setGarrafa(null);
  setLata(null);
  setConta(null);
}


  return (

    <View style={styles.formContext}>
      {conta == null ?
        <Pressable onPress={Keyboard.dismiss} style={styles.form}> 
          <Text style={styles.formLabel}>Pastel</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPastel}
            value={pastel}
            placeholder="Quantos Pasteis ?"
            keyboardType="decimal-pad"
          />
          <Text style={styles.formLabel}>Pastel Especial</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEspecial}
            value={especial}
            placeholder="Qantos Especiais ?"
            keyboardType="decimal-pad"
          />
          <Text style={styles.formLabel}>Refri 600ML</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setGarrafa}
            value={garrafa}
            placeholder="Quntas 600Ml ?"
            keyboardType="decimal-pad"
          />
          <Text style={styles.formLabel}>Lata 350ML</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLata}
            value={lata}
            placeholder="Quantas Latas ?"
            keyboardType="decimal-pad"
          />
              <View style={styles.butonContainer}>
                <TouchableOpacity style={styles.buttonCalculator}
                  onPress={() => validationConta()}
                  >
                  <Text style={styles.textButtonCalculator}>Calcular</Text>
                </TouchableOpacity>
              </View>

        </Pressable>

      :
        
        <View style={styles.resultContaExibition}>
          <View style={styles.resultContaExibition}>
            <ResultConta messageResultConta={messageConta}  resultConta={conta}/>
          </View>  
          
          <TouchableOpacity 
          style={styles.buttonCalculator}
          onPress={() => setNullButton()}
          >
            <Text style={styles.textButtonCalculator}>Voltar</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
      
  );
}
