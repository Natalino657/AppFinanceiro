import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../Components/Header";
import Belance from "../../Components/Belance";
import Movments from "../../Components/Movments";
import Actions from "../../Components/Actions";

const list = [
  {
    id: 1,
    label: "Conta de luz",
    value: "30.00",
    date: "10/20/2024",
    type: 0, // 0 despesas
  },
  {
    id: 2,
    label: "salario",
    value: "1000",
    date: "09/28/2024",
    type: 1, // 1 entradas/receita
  },
  {
    id: 3,
    label: "trasnferencia 930xxxxxx",
    value: "30.00",
    date: "10/19/2024",
    type: 1, // 1 entradas/receita
  },
];
export default function Home() {
  return (
    <View style={styles.container}>
      <Header nome="Natalino Gomes" />

      <Belance saldo="2000" gastos="-500" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
