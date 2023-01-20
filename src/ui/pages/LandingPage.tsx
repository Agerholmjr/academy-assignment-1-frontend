import React from 'react';
import { IonButton, IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react';
import img from 'static/assets/img/fitness-logo-Graphics-9335486-1.jpeg';
import { t } from 'i18next';

/**
 * Notice that the img will "underlap" under the content, to keep its proportion.
 * This is the desired behavior, because it allows for any amount of content and takes the space from the bottom of the img.
 */
const LandingPage: React.FC = () => {
  const router = useIonRouter();
  return (
    <IonPage>
      <IonContent fullscreen className='fixed h-full w-full'>
      <div className=' mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col'>
      <IonImg className='max-w-xl mx-auto' src={img}/>
        <h3 className='text-white mt-4 text-center'>{t('landingPage.motivationMsg')}</h3>
        </div>
        <div className="fixed w-full bottom-0 p-5">
          <h1>{t('landingPage.welcomeT')}</h1>
          <p className=' indent-5 subpixel-antialiased  font-serif mb-5 text-base mt-5'>{t('landingPage.welcomeMsg')}</p>

          <IonButton onClick={() => router.push('/login')} expand="full" className="h-[50px] w-auto bottom-0">
           <h2 className='text-white'>{t('landingPage.goButton')}</h2>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
