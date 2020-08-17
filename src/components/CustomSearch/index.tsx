import React, { useState, useRef, MutableRefObject } from 'react';
import { IonSearchbar, IonSelect, IonSelectOption, IonIcon } from '@ionic/react';
import { filterOutline} from 'ionicons/icons';
const CustomSearch: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [filterValue, setFilterValue] = useState("All")
    const filter = useRef() as MutableRefObject<HTMLIonSelectElement>
    // filters, hotel, government office, libraries

    const FilterIcon = () => <IonIcon  icon={filterOutline}/>
    return (
            <div>
                <IonSelect ref={filter} style={{display: "none"}} value={filterValue} okText="Okay" cancelText="Dismiss" onIonChange={e => setFilterValue(e.detail.value)}>
                    <IonSelectOption value="All">All</IonSelectOption>
                    <IonSelectOption value="Hotel">Hotels</IonSelectOption>
                    <IonSelectOption value="Gov't Office">Gov't Offices</IonSelectOption>
                    <IonSelectOption value="Schools">Schools</IonSelectOption>
                </IonSelect>
                <IonSearchbar
                    searchIcon={filterOutline}
                    value={searchText}
                    onIonFocus={(e) =>  filter.current.click()}
                    onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            </div>
    )
}

export default CustomSearch;