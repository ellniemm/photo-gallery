import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
} from '@ionic/react';
import './Tab1.css'; // Impor file CSS untuk styling

const Tab1: React.FC = () => {
  // Data contoh album
  const albums = [
    { name: 'Camera', cover: '/assets/kamera.png', href:'/tab2'},
    { name: 'Screenshots', cover: '/assets/screenshot.png', href: '' },
    { name: 'Travel', cover: '/assets/travels.png' },
    // Tambahkan album lain di sini sesuai kebutuhan
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Albums</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {albums.map((album, index) => (
            <IonItem key={index} routerLink={`/${album.name}`} >
              <IonThumbnail slot="start">
                <img src={album.cover} alt={`Cover for ${album.cover}`} />
              </IonThumbnail>
              <IonLabel>{album.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
