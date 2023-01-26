import React from 'react';
import { IonButton, IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react';
import img from 'static/assets/img/back.png';
import ResetPasswordForm from 'ui/components/authentication/reset-password/ResetPasswordForm';

const ResetPasswordPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="fixed h-full w-full">
      <div className=' mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col'>
      <IonImg className='mb-12 max-w-xl mx-auto' src={img}/>
         <ResetPasswordForm />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ResetPasswordPage;
