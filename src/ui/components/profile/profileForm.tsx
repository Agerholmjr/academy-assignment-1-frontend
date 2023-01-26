import React, { useEffect, useState } from 'react';
import { IonButton, IonCheckbox, IonContent, IonImg, useIonRouter, } from '@ionic/react';
import img from 'static/assets/img/gym.jpeg';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import 'static/css/custom_ion.css';
import { t } from 'i18next';
import { supabase } from 'apis/supabaseClient';
import { useAuthUserStore } from 'store/user';
import { useProfileState } from './profileState';
import { Route, Router } from 'workbox-routing';



const ProfileForm: React.FC = () => {
const authUser = useAuthUserStore((state) => state.authUser);
  const [username, setUsername] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [confirmedPassword, setConfirmedPassword] = useState<any>();
  const [gender, setGender] = useState<string>('');
  const [genderM, setGenderM] = useState(false);
  const [genderF, setGenderF] = useState(false);
  const [genderO, setGenderO] = useState(false);
  const [age, setAge] = useState<any>();
  const [height, setHeight] = useState<any>();
  const [weight, setWeight] = useState<any>();
  const [formError, setFormError] = useState<any>(null);
  const router = useIonRouter();
  const profile = useProfileState((state) => state.profile);
  const setProfile = useProfileState((state) => state.setProfile);


  useEffect(() => {
      if(!authUser){
          router.push('/login');
      }
      if(profile){
          router.push('/home');
      }
  }, [router, authUser, profile]); 

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
        
   addProfile();
   setProfile(true);
   router.push('/home');
  };
  
  const addProfile = async () => {
    const id = authUser?.id;
    const{ data,error } = await supabase
    .from('fitnessprofile')
    .insert([{ id, username, gender, age, height, weight }])
    .select();
    
    
    if(error){
      console.log(error);
      setFormError('There is an error');
   }

   if(data){

      console.log(data);
      setFormError(null);
      
   }
  };

    

    return (
        <IonContent fullscreen className="fixed h-full w-full">
        <div className=' mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col'>
            <IonImg className='mb-5 max-w-xl mx-auto' src={img}/>
            <h1 className='text-center'>{t('profileForm.yourProfile')}
              </h1>
          </div>
          <div className="w-full text-center mx-auto h-15  w-6/12 my-3 flex flex-center flex-col">
                    <form onSubmit={(e) => handleSumbit(e)}>
                   
                      <IonLabel className="block mb-2">{t('profileForm.yourUsername')}</IonLabel>
                      <IonInput type="text" name="username" id="username" className="border-2 bg-white border-black border-grey-text my-2 " placeholder="funnybunny" required onIonInput={(e:any) => setUsername(e.target.value)} ></IonInput>
                
                      <h1>HERE</h1>
                            <div className='mx-auto min-[536px]:flex-row flex-col flex-wrap items-stretch my-4 w-full flex justify-items-start mt-5'>
                                
                                <div className='min-w-[100px]'>
                            <IonCheckbox id="inline-checkbox" value="" className="custom" onIonChange={(e:any) => setGenderM(e.target.checked)} ></IonCheckbox>
                            <IonLabel  className="align-middle ">M </IonLabel>
                            </div>

                            <div className='min-w-[px]'>
                            <IonCheckbox id="inline-2-checkbox" value="" className="custom" onIonChange={(e:any) => setGenderF(e.target.checked)}  ></IonCheckbox>
                            <IonLabel className="align-middle ">F</IonLabel>
                            </div>

                            <div className='min-w-[100px]'>
                            <IonCheckbox  id="inline-3-checkbox" value="" className="custom " onIonChange={(e:any) => setGenderO(e.target.checked)}></IonCheckbox>
                            <IonLabel className="align-middle ">O</IonLabel>
                            </div>
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