import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { Avatar, Button, Card, BottomNavigation } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MusicRoute = () => <View style={{padding: 20}}>
<Image src={'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png'} />
  <ScrollView style={styles.scrollView}>
        <Text style={{width: '50%'}}>
          <Card style={{width: '100%'}}>
   <Card.Cover style={{borderRadius: 0, height: 300, width: '100%'}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card>
  <Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card>
  <Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card>
  <Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card><Card>
   <Card.Cover style={{borderRadius: 0, height: 300}} source={{ uri: 'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png' }} />
	
	<Card.Content>
      <Text variant="titleLarge">Cơm tấm</Text>
      <Text variant="bodyMedium">30.000</Text>
    </Card.Content>
  </Card>
        </Text>
      </ScrollView>
  
   </View>;

const AlbumsRoute = () => <Image src={'https://comtamtuonghan.vn/wp-content/uploads/2020/09/com-tam-suon-nuong-tang-1.png'}></Image>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;
export default function App() {
	const test = () => {
		console.log('aaa');
	}
	
	const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Trang chủ', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'albums', title: 'Lịch sử đơn hàng', focusedIcon: 'album' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });
	
  return (
  <SafeAreaProvider>
  

    
	
	<LinearGradient
        colors={['#FF7682', '#FF2900']}
		start={{x: 0, y: 0}}
		end={{x: 1, y: 1}}
        style={styles.button}>
		<Appbar.Header style={styles.header}>
	<Appbar.BackAction color='white' onPress={test} />
       <Appbar.Content color='white' title="Trưa nay ăn gì" subtitle={'Subtitle'} />
        <Appbar.Action size={30} icon="heart" style={styles.headerIcon} color='white' onPress={() => {}} />
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
		width: '100%'
	},

  container: {
	  width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  header: {
	backgroundColor: 'transparent',
	color: 'white'
  },
  
  headerIcon: {
	color: 'white',
	fill: 'white'
  },
  
  wFull: {
	width: 300
  }
});
