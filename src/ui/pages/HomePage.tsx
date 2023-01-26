import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonTabs,
  IonRouterOutlet,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
  IonButton,
  useIonRouter,
} from '@ionic/react';
import { personCircleOutline, analyticsOutline, cameraOutline, barbellOutline } from 'ionicons/icons';
import 'static/css/custom_ion.css';
import { useProfileState } from 'ui/components/profile/profileState';

import Tab1 from './tabs/tab-1/Tab1';
import Tab2 from './tabs/tab-2/Tab2';
import Tab3 from './tabs/tab-3/Tab3';
import Tab4 from './tabs/tab-4/Tab4';
import { supabase } from 'apis/supabaseClient';

import { useAuthUserStore } from 'store/user';
import { t } from 'i18next';

const HomePage: React.FC = () => {
  const profile = useProfileState((state) => state.profile);
  const setProfile = useProfileState((state) => state.setProfile);
  const resetProfile = useProfileState((state) => state.resetProfile);

  const router = useIonRouter();
  const authUser = useAuthUserStore((state) => state.authUser);
  const resetAuthUser = useAuthUserStore((state) => state.resetAuthUser);

  useEffect(() => {

  
    
    if (!authUser) router.push('/login');
    if(authUser){
    checkIfProfileExsists(authUser?.id);
    }
   
  }, [router, authUser]);

  

  const handleLogOut = async () => {
    resetAuthUser();
    resetProfile();
    await supabase.auth.signOut();
    router.push('/login');
  };

  const checkIfProfileExsists = async (id: string | undefined) => {
   
    const { data, error } = await supabase
    .from('fitnessprofile')
    .select()
    .match({ 'id':id })
    .single(); 
    
    if(data){
      setProfile(true);
      router.push('/home');
    }

    if(error){
      setProfile(false);
     router.push('/profilePage');
    }


  };
      
    
  


  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButton onClick={handleLogOut} slot="end">
            {t('authentication.logout')}
          </IonButton>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              {pages.map((p, i) => {
                return <Route key={i} exact path={p.path} component={p.component} />;
              })}

              <Route exact path="/home">
                <Redirect to={pages.filter((p) => p.redirect)[0].path} />
              </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom" class={'h-[70px] border-t-[1px] border'}>
              {pages.map((p, i) => {
                return (
                  <IonTabButton key={i} tab={`tab${i}`} href={p.path}>
                    <IonIcon icon={p.icon} />
                  </IonTabButton>
                );
              })}
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;


const pages = [
  {
    name: 'photo',
    icon: cameraOutline,
    path: '/tab1',
    component: Tab1,
    redirect: true,
  },
  {
    name: 'training',
    icon: barbellOutline,
    path: '/tab2',
    component: Tab2,
    redirect: false,
  },
  {
    name: 'stats',
    icon: analyticsOutline,
    path: '/tab3',
    component: Tab3,
    redirect: false,
  },
  {
    name: 'profil',
    icon: personCircleOutline,
    path: '/tab4',
    component: Tab4,
    redirect: false,
  },
];

const menuItems = [{ name: 'Settings' }, { name: 'Account' }, { name: 'Questionnaire' }, { name: 'Logout' }];


