import React, { useEffect } from 'react';
import { IonContent, IonImg } from '@ionic/react';
import TakePicture from 'ui/components/frontpage/take-picture/TakePicture';
import { Photo } from '@capacitor/camera';
import { t } from 'i18next';
import logo from 'static/assets/img/fitness-logo-Graphics-9335486-1.jpeg';
import { useAuthUserStore } from 'store/user';
import { supabase } from 'apis/supabaseClient';

const Tab1: React.FC = () => {
  const [picture, setPicture] = React.useState<Photo>();
  const authUser = useAuthUserStore((state) => state.authUser);


  
  const uploadPhoto = async (p:Photo) => {
    console.log(p);
    setPicture(p);
    const webpath:any = p.webPath;
    const { data, error } = await supabase
    .storage
    .from('pictures')
    .upload(webpath, p.toString(), {
      
    cacheControl: '3600',
    upsert: false
    
  

    });
  };

  return (
    <IonContent color={'white-background'}>
      <h3 className='text-center mt-6'>{t('photo.takePhoto')}</h3>
      {!picture  && <IonImg className='my-20' src={ logo }></IonImg>}
      {picture && <img src={picture?.webPath} alt="your upload" className="h-full w-auto m-auto" />}

      <TakePicture onPictureTaken={(p) => uploadPhoto(p)} />
    </IonContent>
  );
};

export default Tab1;
