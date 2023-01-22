import { useState } from 'react';
import { useIonRouter } from '@ionic/react';
import { useAuthUserStore } from 'store/user';
import { supabase } from 'apis/supabaseClient';


const CheckIfProfileExsists = async () => {
    const authUser = useAuthUserStore((state) => state.authUser);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    const{ data ,error } = await supabase 
    .from('users')
    .select()
    .match({ 'id':authUser?.id })
    .single();
    if(data){
    return true;
    }
    return false;
  };
  export default CheckIfProfileExsists;