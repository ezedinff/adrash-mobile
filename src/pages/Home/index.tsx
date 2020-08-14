import React from 'react';
import { IonPage, IonHeader, IonContent } from '@ionic/react';
import CustomSearch from '../../components/CustomSearch';
import CustomMap from '../../components/CustomMap';
const Home: React.FC = () => {
    return (
        <IonPage>
          <IonHeader>
            <CustomSearch />
          </IonHeader>
          <IonContent>
            <CustomMap />
          </IonContent>
        </IonPage>
      );
}
export default Home;