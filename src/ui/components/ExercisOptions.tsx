import React from 'react';
import { 
	IonLabel,
	IonDatetime,
    IonButton,
    IonImg
} from '@ionic/react';
import logo from 'static/assets/img/gym.jpeg';
import chest from'static/assets/img/chest.jpeg';
import back from 'static/assets/img/back.png';
import leg from 'static/assets/img/legs.jpeg';
import 'static/css/custom_ion.css';
import { t } from 'i18next';

type ExerciseOptionProps = {
	link: string,
    img: string,
    title: string
};
                                     
const ExerciseOptions: React.FC<ExerciseOptionProps> = ({ link, img, title }) => {
  return(
    <div className='text-center'>
    <IonButton href={link} className='h-fit' color="#1f2937">
       <IonImg className='mb-4 max-w-xl mx-auto' src={img}/>
  </IonButton>
    <p className='text-center'>{title}</p>
    </div>
  );
};

export default ExerciseOptions;