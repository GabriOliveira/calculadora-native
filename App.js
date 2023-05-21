import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Button,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  const [darkMode, setDarkmode] = useState(false);
  const [cor, setCor] = useState("#010b14");
  const [cortext, setCortext] = useState("#010b14");
  const [cortexte, setCortexte] = useState("#D5D6D7");
  const largura = Dimensions.get("screen").width;

  function trcarcor() {
    setDarkmode(!darkMode), darkMode ? setCor("#FFF2F1") : setCor("#010b14");
    darkMode ? setCortext("#010b14") : setCortext("#FFF2F1");
    darkMode ? setCortexte(" #28292A ") : setCortexte("#D5D6D7");
  }

  const [resultado, setResultado] = useState("");
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operador, setOperador] = useState("");
  const [numeroExistente, setNumeroExistente] = useState(false);
  const [operadorExistente, setOperadorExistente] = useState(false);
  const [contador, setContador] = useState(0);
  function contar() {
    setContador(contador + 1);
  }

  function operadores(operadorRecebido) {
    if (contador >= 16) {
      ToastAndroid.show('limite atingido', ToastAndroid.SHORT);
      operadorExistente ? setContador(0) : setContador(0);
    }else{
      switch (operadorRecebido) {
        case "0":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "1":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "2":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "3":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "4":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "5":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "6":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "7":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "8":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "9":
          numeroExistente
            ? setNumero2(numero2 + operadorRecebido)
            : setNumero1(numero1 + operadorRecebido);

          break;
        case "CE":
          setResultado(0);

          numeroExistente
            ? setNumero2(numero2.slice(0, -1))
            : setNumero1(numero1.slice(0, -1));

          if (numero2 == "") {
            setNumeroExistente(false);
            setOperadorExistente(false);
            setOperador(operador.slice(0, -1));
          } else {
            setNumeroExistente(true);
          }
          break;

        case "C":
          console.log("acionou");
          if (operadorExistente || numero1 || numero2) {
            //arrumei com os ou ||
            setResultado(0);
            setNumero2("");
            setOperador("");
            setNumero1("");
            setNumeroExistente(false);
            setOperadorExistente(false);
          }

          break;

        case "+":
          console.log(numero1);
          if (numero1 != "") {
            operadorExistente ? setOperador(operador) : setOperador("+");
            setNumeroExistente(true);
            setOperadorExistente(true);
          }

          break;
        case "-":
          if (numero1 != "") {
            operadorExistente ? setOperador(operador) : setOperador("-");
            setNumeroExistente(true);
            setOperadorExistente(true);
          }

          break;
        case "/":
          if (numero1 != "") {
            operadorExistente ? setOperador(operador) : setOperador("/");
            setNumeroExistente(true);
            setOperadorExistente(true);
          }

          break;
        case "x":
          if (numero1 != "") {
            operadorExistente ? setOperador(operador) : setOperador("*");
            setNumeroExistente(true);
            setOperadorExistente(true);
          }

          break;
        case "=":
          if (numero1 != "" && numero2 != "" && operadorExistente) {
            switch (operador) {
              case "+":
                setResultado(parseInt(numero1) + parseInt(numero2));
                break;

              case "-":
                setResultado(parseInt(numero1) - parseInt(numero2));
                break;

              case "*":
                setResultado(parseInt(numero1) * parseInt(numero2));
                break;

              case "/":
                if (numero2 == 0) {
                  setResultado("não existe");
                } else {
                  setResultado(parseInt(numero1) / parseInt(numero2));
                }

                break;

              default:
                break;
            }
          }

          break;

        default:
          break;
      }
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      backgroundColor: cor,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "row",
    },

    operadorestilo: {
      height: '25%',
      width: '25%',
      padding: '1%',
      borderRadius: 50,
      textAlign: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#aafac8",
      
    },

    corpo: {
      height: '25%',
      width: '25%',
      padding: '1%',
      borderRadius: 50,
      textAlign: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#011627",
    },

    container2: {
      display: "flex",
      backgroundColor: cor,
      textAlign: "center",
      flexDirection: "row",
      
    },
    resultados: {
      backgroundColor: cor,
      width: largura,
      height: '35%',
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    resultadoTexto: {
      margin: 6,
      fontSize: 25,
      color: "#00888F",
    },

    botoes: {
      display: "flex",
      flex: 2,
      flexDirection: "row",
      flexWrap: 'wrap',
      width: 200,
      height : '115%',
      alignItems: "center",
      justifyContent: "space-around",
      
    },

    temabotao: {
      backgroundColor: cortexte,
      alignSelf: "center",
      bottom: 90,
      alignItems: "center",
      justifyContent: "center",
      width: '20%',
      height: '20%',
      borderRadius: 25,
      marginTop : '1%',
    },
    seguradora: {},
  });

  return (
    <ScrollView style={styles.container2}>
      <View style={styles.resultados}>
        <TouchableOpacity style={styles.temabotao}>
          <Text>
            <Entypo
              name={darkMode ? "light-up" : "moon"}
              size={50}
              color={cor}
              onPress={trcarcor}
            />
          </Text>
        </TouchableOpacity>
        <Text style={styles.resultadoTexto}>
          {" "}
          {numero1}
          {operador}
          {numero2} {" "}
        </Text>
        <Text style={styles.resultadoTexto}> {resultado}</Text>
      </View>

      {/* parte dos botões */}

      <View style={styles.container2}>
        <View /* view da primeira linha*/ style={styles.botoes}>
          
        
          <View style={styles.corpo}>
            <Botao
              conteudo={"1"}
              onPress={() => {
                operadores("1");
                contar();
              }}
            />
          </View>
       
        
          
          <View style={styles.corpo}>
            <Botao
              conteudo={"2"}
              onPress={() => {
                operadores("2");
                contar();
              }}
            />
          </View>
          <View style={styles.corpo}>
            <Botao
              conteudo={"3"}
              onPress={() => {
                operadores("3");
                contar();
              }}
            />
          </View>
          
          <View style={styles.operadorestilo}>
            <Botao
              conteudo={"C"}
              onPress={() => {
                operadores("C");
              }}
            />
          </View>
        
          
          
          <View style={styles.corpo}>
            <Botao
              conteudo={"4"}
              onPress={() => {
                operadores("4");
                contar();
              }}
            />
          </View>
          <View style={styles.corpo}>
            <Botao
              conteudo={"5"}
              onPress={() => {
                operadores("5");
                contar();
              }}
            />
          </View>
          
          

          
          

          
          
          
          
          <View style={styles.corpo}>
            <Botao
              conteudo={"6"}
              onPress={() => {
                operadores("6");
                contar();
              }}
            />
          </View>
          <View style={styles.operadorestilo}>
            <Botao
              conteudo={"CE"}
              onPress={() => {
                operadores("CE");
              }}
            />
          </View>
          <View style={styles.corpo}>
            <Botao
              conteudo={"7"}
              onPress={() => {
                operadores("7");
                contar();
              }}
            />
          </View>
          <View style={styles.corpo}>
            <Botao
              conteudo={"8"}
              onPress={() => {
                operadores("8");
                contar();
              }}
            />
          </View>
          
          
          
         


          
         
          
          
          
          <View style={styles.corpo}>
            <Botao
              conteudo={"9"}
              onPress={() => {
                operadores("9");
                contar();
              }}
            />
          </View>
          
          <View style={styles.operadorestilo}>
            <Botao
              conteudo={"/"}
              onPress={() => {
                operadores("/");
              }}
            />
          </View>
          <View style={styles.corpo}>
            <Botao
              conteudo={"0"}
              onPress={() => {
                operadores("0");
                contar();
              }}
            />
          </View>

          <View style={styles.operadorestilo}>
            <Botao
              conteudo={"x"}
              onPress={() => {
                operadores("x");
              }}
            />
          </View>
          
          
          

          <View style={styles.operadorestilo}>
            <Botao
              conteudo={"+"}
              onPress={() => {
                operadores("+");
              }}
            />
          </View>
          
          
          <View style={styles.operadorestilo}>
            <Botao
              conteudo={"-"}
              onPress={() => {
                operadores("-");
              }}
            />
          </View>
          <View style={styles.operadorestilo}>
            <Botao
              conteudo={"="}
              onPress={() => {
                operadores("=");
              }}
            />
          </View>
          
          

          
          
        </View>
      </View>
    </ScrollView>
  );
}

export function Botao(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          height: 50,
          width: 50,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
          padding: 5,
          
        }}
      >
        <Text style={{ fontSize: 30, color: "#00888F", textAlign: "center" }}>
          {props.conteudo}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
