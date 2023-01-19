import { IonButton, IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react';
import React from 'react';
import RegisterForm from 'ui/components/authentication/register/RegisterForm';
import img from 'static/assets/img/fitness-logo-Graphics-9335486-1.jpeg';
import { t } from 'i18next';

const RegisterPage: React.FC = () => (
  <IonPage>
    <IonContent color={'background-color'}fullscreen className="fixed h-full w-full">
    <div className=' mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col'>
        <IonImg src={img} className='mb-8 max-w-xl mx-auto'/>
        <RegisterForm togglePasswordButtonType="icon" />
        </div>
    </IonContent>
  </IonPage>
);

export default RegisterPage;
