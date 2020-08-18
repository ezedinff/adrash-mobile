import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonContent } from '@ionic/react';
import CustomSearch from '../../components/CustomSearch';
import CustomMap from '../../components/CustomMap';
import GoogleMap from '../../components/GoogleMap';
import { TAXIS } from '../../data/taxi';
const Home: React.FC = () => {
  const [position, setposition] = useState({lat: 18, lng: 38})
  useEffect(() => {
    if(! ("geolocation" in navigator)) {
      console.log("Not supported")
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setposition({lat: position.coords.latitude, lng: position.coords.longitude});
    })
  }, [])
    return (
        <IonPage>
           <CustomSearch />
          <IonContent>
            {!!position ? <GoogleMap position={position} data={TAXIS} google={""}/> : null}
          </IonContent>
        </IonPage>
      );
}
export default Home;