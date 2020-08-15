import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonContent } from '@ionic/react';
import CustomSearch from '../../components/CustomSearch';
import CustomMap from '../../components/CustomMap';
import GoogleMap from '../../components/GoogleMap';
const Home: React.FC = () => {
  const [position, setposition] = useState({latitude: 18, longitude: 38})
  useEffect(() => {
    if(! ("geolocation" in navigator)) {
      console.log("Not supported")
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setposition({latitude: position.coords.latitude, longitude: position.coords.longitude});
    })
    // return () => {
    //   cleanup
    // }
  }, [])
  //console.log()
    return (
        <IonPage>
          <IonHeader>
            <CustomSearch />
          </IonHeader>
          <IonContent>
            {!!position ? <GoogleMap position={position}/> : null}
          </IonContent>
        </IonPage>
      );
}
export default Home;