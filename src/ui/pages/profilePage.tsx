import React from 'react';
import { IonContent, IonTitle } from '@ionic/react';
import ProfileForm from 'ui/components/profile/profileForm';


const ProfilePage: React.FC = () => {
    return (
      <IonContent color={'white-background'}>
        <IonTitle>Tab4</IonTitle>
        <ProfileForm></ProfileForm>
      </IonContent>
    );
  };

  export default ProfilePage;