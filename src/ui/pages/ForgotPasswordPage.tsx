import React from 'react';
import { IonPage, IonContent, IonImg } from '@ionic/react';
import ForgotPasswordForm from 'ui/components/authentication/forgot-password/ForgotPasswordForm';
import img from 'static/assets/img/fitness-logo-Graphics-9335486-1.jpeg';

const ForgotPasswordPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="h-full w-full flex justify-center items-center">
        <div className='fixed object-cover h-45  w-auto mt-[30px]'>
        <IonImg className="mb-8" src={img}/>
        <ForgotPasswordForm />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPasswordPage;
