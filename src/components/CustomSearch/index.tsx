import React, { useState, useRef, MutableRefObject, useEffect } from 'react';
import { IonSearchbar, IonSelect, IonSelectOption, IonIcon, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import { filterOutline} from 'ionicons/icons';
import './index.css';
const CustomSearch: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [filterValue, setFilterValue] = useState("All")
    const filter = useRef() as MutableRefObject<HTMLIonSelectElement>

    useEffect(() => {
        const searchButton = filter.current.getElementsByClassName('searchbar-search-icon');
        console.log(searchButton);
    }, [])
    return (
            <div>
                <IonSelect ref={filter} style={{display: "none"}} value={filterValue} okText="Okay" cancelText="Dismiss" onIonChange={e => setFilterValue(e.detail.value)}>
                    <IonSelectOption value="All">All</IonSelectOption>
                    <IonSelectOption value="Hotel">Hotels</IonSelectOption>
                    <IonSelectOption value="Gov't Office">Gov't Offices</IonSelectOption>
                    <IonSelectOption value="Schools">Schools</IonSelectOption>
                </IonSelect>
                <IonButton
                 onClick={() => filter.current.click()}
                 color={"light"} size={"default"}
                className={"filter-button"}>
                            <IonIcon  icon={filterOutline}/>
                        </IonButton>
                        <IonSearchbar
                    searchIcon={filterOutline}
                    value={searchText}
                    onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            </div>
    )
}

export default CustomSearch;