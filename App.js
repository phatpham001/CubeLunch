import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Avatar, Button, Card, BottomNavigation } from "react-native-paper";
import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { database } from "./firebase";
import { COLOURS } from "./constant";

const MusicRoute = () => <View style={{ padding: 20 }}></View>;
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const formatNumber = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const FoodCard = ({ data }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductInfo", { productID: data.id })}
      style={{
        width: "48%",
        marginVertical: 14,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
          backgroundColor: COLOURS.backgroundLight,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 190,
            resizeMode: "contain",
          }}
          source={{
            uri: data.image,
          }}
        />
      </View>
      <View>
        <Text>{data.name}</Text>
        <Text>{formatNumber(data.price)}</Text>
      </View>
    </TouchableOpacity>
  );
};
const OrderHistoryCard = ({ data }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HistoryInfo", { productID: data.id })}
      style={{
        width: "48%",
        width: "100%",
        height: 50,
      }}
    >
      <View>
        <View>
          <Text> Tháng 4</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEEEEE",
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              marginLeft: "10px",
            }}
          >
            <Text
              style={{
                textTransform: "uppercase",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "14px",
                lineNeight: "19px",
              }}
            >
              {data.total}
            </Text>
            <Text> {data.createdAt}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              justifyItems: "end",
              display: "grid",
              marginRight: "10px",
            }}
          >
            <Text>{formatNumber(data.total)}</Text>
            <Text
              style={{
                justifyContent: "flex-end",
                color:
                  "Chưa Thanh Toán" === "Chưa Thanh Toán" ? "red" : "green",
              }}
            >
              Chưa Thanh Toán
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const [foods, setFoods] = React.useState([]);
  const [hisotrys, setHistorys] = React.useState([]);

  React.useEffect(() => {
    const foodRef = ref(database, "Food");
    onValue(foodRef, (snapshot) => {
      console.log(snapshot);
      const data = snapshot.val();
      const food = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setFoods(food);
    });
  }, []);
  React.useEffect(() => {
    const historyRef = ref(database, "History");
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      const hisotry = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setHistorys(hisotry);
    });
  }, []);
  const [index, setIndex] = React.useState(0);

  const HomeScreen = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {foods.map((data) => {
          return data ? <FoodCard data={data} key={data.id} /> : null;
        })}
      </View>
    );
  };
  const OrderHistoryScreen = () => {
    return (
      <View style={{ width: "100%", height: 200 }}>
        {hisotrys.map((data) => {
          return data ? <OrderHistoryCard data={data} key={data.id} /> : null;
        })}
      </View>
    );
  };
  const RecentsRoute = () => <Text>Recents</Text>;
  const NotificationsRoute = () => <Text>Notifications</Text>;
  const [routes] = React.useState([
    {
      key: "home",
      title: "Trang chủ",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "orderHistory", title: "Lịch sử đơn hàng", focusedIcon: "album" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    orderHistory: OrderHistoryScreen,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={["#FF7682", "#FF2900"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction color="white" />
          <Appbar.Content color="white" title="Trưa nay ăn gì" />
          <Appbar.Action
            size={30}
            icon="heart"
            style={styles.headerIcon}
            color="white"
            onPress={() => {}}
          />
        </Appbar.Header>
      </LinearGradient>
      <BottomNavigation
        activeColor="#FF2B2B"
        inactiveColor="#c7c7c7"
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
  },

  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "transparent",
    color: "white",
  },

  headerIcon: {
    color: "white",
    fill: "white",
  },

  wFull: {
    width: 300,
  },

  // Food Component
  imageFood: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    borderRadius: 15,
  },

  nameFood: {
    fontSize: 14,
    color: "#424965",
  },

  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#424965",
  },

  //orderHistory Compoment
});
