import React from 'react';
import './tab-4.module.css';
import { IonContent, IonTitle } from '@ionic/react';
import ProfileForm from 'ui/components/profile/profileForm';

const Tab4: React.FC = () => {
  return (
    <IonContent color={'white-background'}>
      <IonTitle>Tab4</IonTitle>
      <ProfileForm></ProfileForm>
    </IonContent>
  );
};

export default Tab4;
