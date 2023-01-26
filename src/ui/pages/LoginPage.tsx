import React from 'react';
import { IonButton, IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react';
import LoginForm from 'ui/components/authentication/login/LoginForm';
import img from 'static/assets/img/fitness-logo-Graphics-9335486-1.jpeg';
import { t } from 'i18next';

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="fixed h-full w-full">
      <div className=' mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col'>
        <IonImg className='mb-8 max-w-xl mx-auto' src={img}/>
        <LoginForm togglePasswordButtonType='icon'/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
