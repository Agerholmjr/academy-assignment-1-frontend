import React, { useState } from 'react';
import { IonButton, IonCheckbox, IonContent, IonImg, } from '@ionic/react';
import img from 'static/assets/img/gym.jpeg';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
//import supabase from '../config/supabaseClient';
import { Redirect, Route, useHistory } from 'react-router-dom';
import 'static/css/custom_ion.css';
import { t } from 'i18next';



const ProfileForm: React.FC = () => {
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [confirmedPassword, setConfirmedPassword] = useState<any>();
  const [gender, setGender] = useState<string>();
  const [genderM, setGenderM] = useState(false);
  const [genderF, setGenderF] = useState(false);
  const [genderO, setGenderO] = useState(false);
  const [age, setAge] = useState<any>();
  const [height, setHeight] = useState<any>();
  const [weight, setWeight] = useState<any>();
  const [formError, setFormError] = useState<any>(null);

  const handleSumbit =(event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(password !== confirmedPassword){
      return;
    }
    const genderArr = [genderM, genderF, genderO];
    if(!genderM && !genderF && !genderO){
      console.log('Select a gender');
      return;
    }
    for(let i=0;i<genderArr.length;i++){
      
      if(genderArr[0]===true){
        setGender('male');
        break;
      }
      if(genderArr[1]===true){
        setGender('female');
        break;
      }
      if(genderArr[2]===true){
        setGender('other');
        break;
      }

    }
        
  //  addUser();
  };
  
  /* const addUser = async () => {
    const{data,error} = await supabase
    .from('users')
    .insert([{email, password, gender, age, height, weight}])
    .select();
    
    
    if(error){
      console.log(error);
      setFormError('There is an error');
   }

   if(data){
      console.log(data);
      setFormError(null);
      history.push('/tabs/tab1');
   }
  }; */

    

    return (
        <IonContent fullscreen className="fixed h-full w-full">
        <div className=' mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col'>
            <IonImg className='mb-5 max-w-xl mx-auto' src={img}/>
            <h1 className='text-center'>{t('profileForm.yourProfile')}
              </h1>
          </div>
          <div className="w-full text-center mx-auto h-15  w-6/12 my-3 flex flex-center flex-col">
                    <form onSubmit={(e) => handleSumbit(e)}>
                   
                      <IonLabel className="block mb-2">{t('profileForm.yourEmail')}</IonLabel>
                      <IonInput type="email" name="email" id="email" className="border-2 bg-white border-black border-grey-text my-2 " placeholder="name@mail.com" required onIonInput={(e:any) => setEmail(e.target.value)} ></IonInput>
                
                      <IonLabel className="block mb-2">{t('profileForm.yourPassword')}</IonLabel>
                      <IonInput type="password" name="password" id="password" placeholder="••••••••" className="border-2  bg-white border-black border-grey-text my-2" required onIonInput={(e:any) => setPassword(e.target.value)}></IonInput>
                
                      <IonLabel className="block mb-2">{t('profileForm.confPassword')}</IonLabel>
                      <IonInput type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="border-2  bg-white border-black border-grey-text my-2" required onIonInput={(e:any) => setConfirmedPassword(e.target.value)}></IonInput>
                           
                            <div className='flex mx-auto my-4 w-full text-center mt-5'>
                            <IonCheckbox id="inline-checkbox" value="" className="custom" onIonChange={(e:any) => setGenderM(e.target.checked)} ></IonCheckbox>
                            <IonLabel  className="">Male </IonLabel>
                      
                            <IonCheckbox id="inline-2-checkbox" value="" className="custom" onIonChange={(e:any) => setGenderF(e.target.checked)}  ></IonCheckbox>
                            <IonLabel className="">Female</IonLabel>
                        
                            <IonCheckbox  id="inline-3-checkbox" value="" className="custom" onIonChange={(e:any) => setGenderO(e.target.checked)}></IonCheckbox>
                            <IonLabel className="">Other</IonLabel>
                            </div>
                     
                      <IonLabel className="">{t('profileForm.yourAge')}</IonLabel>
                      <IonInput type="number" name="age" id="age" placeholder="20" className="border-2  bg-white border-black border-grey-text my-2" required onIonInput={(e:any) => setAge(e.target.value)}></IonInput>
                  
                      <IonLabel className="">{t('profileForm.yourHeight')}</IonLabel>
                      <IonInput type="number" name="height" id="confirm-height" placeholder="170" className="border-2  bg-white border-black border-grey-text my-2" required onIonInput={(e:any) => setHeight(e.target.value)}></IonInput>
                    
                      <label htmlFor="weight" className="">{t('profileForm.yourWeight')}</label>
                      <IonInput type="number" name="weight" id="weight" placeholder="70" className="border-2 border-black  bg-white border-grey-text mt-2" required onIonInput={(e:any) => setWeight(e.target.value)}></IonInput>
                    
                  

                    <div className="text-center my-1">
                    <button type="submit" className="border-2 border-black border-grey-text mt-2 outline-double  bg-white">{t('profileForm.createProfile')}</button>
                    </div>
                    </form>
                </div>
                
  
  </IonContent>
    );
};


export default ProfileForm;