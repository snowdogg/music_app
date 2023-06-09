import { StyleSheet, Image } from 'react-native';
import styled from "styled-components";
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

const Dork = styled(Text)`
  background-color: red;
  color: white;
  font-size: 40px;
  font-weight: bold;
`

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
         <Image style={{width: 200, height: 200}} source={{uri: "album art.JPG"}}></Image>
      <Dork  style={{marginTop:20}}>Sun Spoiler</Dork>
      {/* <Text style={styles.title}>Tab One</Text> */}
      <Text style={styles.scream}>Moment Of Zen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <audio controls>
        <source src="moment of zen.mp3" type="audio/mpeg" />
      </audio>
    </View>
  );
}

const styles = StyleSheet.create({
  scream: {
    fontSize: 40
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
