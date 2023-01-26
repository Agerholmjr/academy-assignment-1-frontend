import { IonButton, IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react';
import img from 'static/assets/img/gym.jpeg';
import { IonInput, IonLabel, IonCheckbox } from '@ionic/react';
import { useEffect, useState } from 'react';
import { supabase } from 'apis/supabaseClient';
import { useAuthUserStore } from 'store/user';
import { t } from 'i18next';




const EditProfileForm: React.FC = () => {
  const router = useIonRouter();
	const authUser = useAuthUserStore((state) => state.authUser);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function getImage(image: string) {
    const api = async () => {
      const { data } = await supabase.functions.invoke('profile', {
        body: { name: image },
      });
      if (data) {
        setImageUrl(data.publicUrl);
        
      }
    };
    api();
  }


    useEffect(() => {
        if(!authUser) router.push('/login');
        fetchUserData();
        getImage('5cd651fa-bb99-4340-b8fb-58b5019336fc');
        

        
    },[router, authUser]);

		console.log(authUser?.id);

  const fetchUserData = async () => {
    const{ data ,error } = await supabase 
    .from('fitnessprofile')
    .select()
    .match({ 'id':authUser?.id })
    .single();

    if(error){
      setFetchError('could not get user');
      setUser(null);
    }

    
    
    if(data){
      setUser(data);

    }
  };

  const handleSumbit = async(event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, error } = await supabase
    
    .from ('fitnessprofile')
    .update({  username: user.username, age: user.age, height: user.height, weight: user.weight })
    .eq('id', authUser?.id);
    
    if(password.trim() !==  ''){
      const { data, error } = await supabase.auth.updateUser({ password: password } );
    }
    
    if(email.trim() !==  ''){
      const { data, error } = await supabase.auth.updateUser({ password: password } );
    } 
    console.log('submitted');
   

    if(error){
      console.log(error);
    }
    if(data){
      console.log(data);
    }
    fetchUserData();
  };


  return (
    <IonContent fullscreen className="fixed h-full w-full">
    <div className=' mx-auto h-15  w-auto mt-[30px] flex flex-center flex-col'>
        {imageUrl && (
          <IonImg className='mb-5 max-w-xl mx-auto' src={imageUrl}/>
        )}
        {!imageUrl && (
          <IonImg className='mb-5 max-w-xl mx-auto' src={img}/>
        )}
        
        <h1 className='text-center'>{t('editProfileForm.profile')}
          </h1>
      </div>
      <div className="w-full text-center mx-auto h-15  w-6/12 my-3 flex flex-center flex-col">
                <form onSubmit={(e) => handleSumbit(e)}>
               
                  <IonLabel className="block text-[#fef3c7]">{t('editProfileForm.email')}</IonLabel>
                  <IonInput type="email" name="email" id="email" className="border-2  rounded-lg bg-white border-black border-grey-text my-1 mb-5"  placeholder={authUser?.email}  onIonInput={(e:any) => setEmail(e.target.value)} ></IonInput>
           
                  <IonLabel className="block text-[#fef3c7]">{t('editProfileForm.password')}</IonLabel>   
                  <IonInput type="password" name="password" id="password" className="border-2 rounded-lg bg-white border-black border-grey-text my-1 mb-5"  placeholder='new password' onIonInput={(e:any) => setPassword(e.target.value)}></IonInput> 
            
                  <IonLabel className="block text-[#fef3c7]">{t('editProfileForm.username')}</IonLabel>
                  <IonInput type="text" name="username" id="username" className="border-2 rounded-lg bg-white border-black border-grey-text my-1 mb-5"  value={user?.username} onIonInput={(e:any) => setUser({ ...user, 'username':e.target.value })} ></IonInput>

                  <IonLabel className="block text-[#fef3c7]">{t('editProfileForm.gender')}</IonLabel>
                        <div className='p-2.5 flex mx-auto w-full text-center border-2 rounded-lg bg-white border-black border-grey-text my-1 mb-5'>
                          <p className='mx-auto text-center'>{user?.gender}</p>
                        </div>
                  
                  <IonLabel className="block text-[#fef3c7]">{t('editProfileForm.age')}</IonLabel>
                  <IonInput type="number" name="age" id="age"  className="border-2 rounded-lg bg-white border-black border-grey-text my-1 mb-5"  value={user?.age} onIonInput={(e:any) => setUser({ ...user,'age':e.target.value })}></IonInput>
              
                  <IonLabel className="text-[#fef3c7]">{t('editProfileForm.height')}</IonLabel>
                  <IonInput type="number" name="height" id="confirm-height"  className="border-2 rounded-lg bg-white border-black border-grey-text my-1 mb-5"  required value={user?.height} onIonInput={(e:any) => setUser({ ...user,'height':e.target.value })}></IonInput>
                
                  <IonLabel className="text-[#fef3c7]">{t('editProfileForm.weight')}</IonLabel>
                  <IonInput type="number" name="weight" id="weight"  className="border-2  bg-white rounded-lg border-black border-grey-text my-1 mb-5"  required value={user?.weight} onIonInput={(e:any) => setUser({ ...user,'weight':e.target.value })}></IonInput>
                
             

                <div className="text-center my-1">
                <button type="submit" className="border-2 p-2.5 text-[#fef3c7] rounded-lg border-black bg-black mt-2 outline-double ">{t('profileForm.saveChanges')}</button>
                </div>
                </form>
            </div>
            

</IonContent>
  );
};

export default EditProfileForm;