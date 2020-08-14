import React, { useState } from 'react';
import { IonSearchbar } from '@ionic/react';
import { filterOutline} from 'ionicons/icons';
const CustomSearch: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    // filters, hotel, government office, libraries
    return (
<IonSearchbar
searchIcon={filterOutline}
 value={searchText}
  onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
    )
}

export default CustomSearch;