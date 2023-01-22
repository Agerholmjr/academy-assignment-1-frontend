import React from 'react';
import './tab-4.module.css';
import { IonContent, IonTitle } from '@ionic/react';

import EditProfileForm from 'ui/components/profile/editProfileForm';

const Tab4: React.FC = () => {
  return (
    <IonContent color={'white-background'}>
      <IonTitle>Tab4</IonTitle>
      <EditProfileForm></EditProfileForm>
    </IonContent>
  );
};

export default Tab4;
