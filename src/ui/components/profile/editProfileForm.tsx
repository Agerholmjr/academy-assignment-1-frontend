import { IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react';
import logo from 'static/assets/img/gym.jpeg';
import { IonInput, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { supabase } from 'apis/supabaseClient';
import { useAuthUserStore } from 'store/user';
import { Router } from 'workbox-routing';
import { t } from 'i18next';



const EditProfileForm: React.FC = () => {
  const router = useIonRouter();
	const authUser = useAuthUserStore((state) => state.authUser);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if(!authUser) router.push('/login');
        fetchUserData();
    },[router, authUser]);

		console.log(authUser?.id);

  const fetchUserData = async () => {
    const{ data ,error } = await supabase 
    .from('users')
    .select()
    .match({ 'id':authUser?.id })
    .single();

    if(error){
      setFetchError('could not get user');
      setUser(null);
      console.log(error);
    }
   // TODO: 
    /*if(data){
      setUser(data);
      if(data.gender == 'Male'){
        setIsMale(true)
      }else if(data.gender=='Female'){
        setIsFemale(true)
      }else{
        setIsOther(true)
      }
      setFetchError(null);
      console.log(data)
    } */
  };

  const handleSumbit = async(event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submitted');
    
  /*  
    const { data, error } = await supabase
    .from ('users')
    .upsert({ 'id':userID,'email':user.email })
    .select('id, email');
    
    
    console.log(user); 

    if(error){
      console.log('error');
    }
    if(data){
      console.log(data);
    } */
  };


  return (
    <IonContent fullscreen className="fixed h-full w-full">
      <div className=' mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col'>
          <IonImg className='mb-8 max-w-xl mx-auto' src={logo}/>
          <h1 className='text-center'>{t('profileForm.yourProfile')}
            </h1>
        </div>
        <div className="w-full text-center mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col">
            
            {fetchError && (<p>{fetchError}</p>)}
                {user && 
                (
                  <div>
                     <form onSubmit={handleSumbit}>
            <div>
              <IonLabel className="block mb-2">{t('profileForm.yourEmail')}</IonLabel>
              <IonInput type="email" name="email" id="email" className='' required value={user.email} onIonInput={(e:any) => setUser({ ...user, 'email':e.target.value })} ></IonInput>
          </div>
          <div>
              <IonLabel className=''>{t('profileForm.yourPassword')}</IonLabel>
              <IonInput type="password" name="password" id="password" className='' required value={user.password} onIonInput={(e:any) => setUser({ ...user,'password':e.target.value })}></IonInput>
          </div>


         {/*  <p>Your gender</p>
            <div className="flex ">
                <div className="flex items-center mr-4">
                    <IonCheckbox id="inline-checkbox" value="" className=" my-1 w-4 h-4 " checked={isMale}></IonCheckbox>
                    <IonLabel  className="ml-2 text-sm font-medium text-blue-300">Male</IonLabel>
                </div>
                <div className="flex items-center mr-4">
                    <IonCheckbox id="inline-2-checkbox" value="" className=" my-1 w-4 h-4 " checked={isFemale}></IonCheckbox>
                    <IonLabel className="ml-2 text-sm font-medium text-blue-300">Female</IonLabel>
                </div>
                <div className="flex items-center mr-4">
                    <IonCheckbox  id="inline-3-checkbox" value="" className=" my-1 w-4 h-4 text-blue-600 " checked={isOther}></IonCheckbox>
                    <IonLabel className="ml-2 text-sm font-medium text-blue-300">Other</IonLabel>
                </div>
            </div>
             */}


            <div>
              <IonLabel className="">{t('profileForm.yourAge')}</IonLabel>
              <IonInput type="number" name="age" id="age"  className='' required value={user.age} onIonInput={(e:any) => setUser({ ...user,'age':e.target.value })}></IonInput>
            </div>
            <div>
              <IonLabel className=''>{t('profileForm.yourHeight')}</IonLabel>
              <IonInput type="number" name="height" id="confirm-height"  className='' required value={user.height} onIonInput={(e:any) => setUser({ ...user,'height':e.target.value })}></IonInput>
            </div>
            <div>
              <label htmlFor="weight" className=''>{t('profileForm.yourWeight')}</label>
              <IonInput type="number" name="weight" id="weight"  className='' required value={user.weight} onIonInput={(e:any) => setUser({ ...user,'weight':e.target.value })}></IonInput>
            </div>
          

            <div className='text-center'>
            <button type="submit" className=''>{t('profileForm.saveChanges')}</button>
            </div>
            </form>

                  </div>
                )}
            
        </div>
  
</IonContent>
  );
};

export default EditProfileForm;