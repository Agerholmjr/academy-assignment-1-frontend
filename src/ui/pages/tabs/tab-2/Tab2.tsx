import React from 'react';
import { IonButton, IonContent, IonImg, IonPage, IonCol, IonRow, IonGrid } from '@ionic/react';
import 'static/css/custom_ion.css';
import logo from 'static/assets/img/gym.jpeg';
import chest from'static/assets/img/chest.jpeg';
import back from 'static/assets/img/back.png';
import leg from 'static/assets/img/legs.jpeg';
import shoulder from 'static/assets/img/shoulder.webp';
import { t } from 'i18next';


const Tab2: React.FC = () => (


<IonContent fullscreen className="fixed h-full w-full">
        <div className=' mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col'>
          <IonImg className='mb-8 max-w-xl mx-auto' src={logo}/>
        <h1 className='text-center'>{t('tab2.chooseExercise')}</h1>
        </div>
            <div className="w-full border-2 border-black  mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col">
             <div>
          <IonGrid>
        <IonRow>
          <IonCol>
            <div className='text-center'>
          <IonButton routerLink='/tab1/details' className='h-fit' color="#1f2937">
             <IonImg className='mb-4 max-w-xl mx-auto' src={chest}/>
        </IonButton>
          <p className='text-center'>{t('tab2.catChest')}</p>
          </div>
        
        </IonCol>
        <IonCol>
            <div className='text-center'>
          <IonButton routerLink='/tabs/tab1/details2' className='h-fit' color="#1f2937" >
          <IonImg className='mb-4 max-w-xl mx-auto' src={back}/>
        </IonButton>
          <p className='text-center'>{t('tab2.catBack')}</p>
          </div>
        
        </IonCol>
        </IonRow>

        <IonRow>
        <IonCol>
            <div className='text-center'>
          <IonButton routerLink='/tab1' className='h-fit' color="#1f2937" >
          <IonImg className='mb-4 max-w-xl mx-auto w-full' src={leg}/>
        </IonButton>
          <p className='text-center'>{t('tab2.catLegs')} </p>
          </div>
        
        </IonCol>
        <IonCol>
            <div className='text-center'>
          <IonButton routerLink='/tabs/tab1/details4' className='h-fit' color="#1f2937">
          <IonImg className='mb-4 max-w-xl mx-auto' src={shoulder}/>
        </IonButton>
          <p className='text-center'>{t('tab2.catShoulders')} </p>
          </div>
        
        </IonCol>
        </IonRow>
        </IonGrid>
        </div>
      
           </div>
      </IonContent>
);  

export default Tab2;