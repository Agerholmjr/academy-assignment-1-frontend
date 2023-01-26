
import create from 'zustand';
import { persist } from 'zustand/middleware';

type ProfileState = {
  profile: boolean | null;
  setProfile: (profile: boolean) => void;
  resetProfile: () => void;
};

export const useProfileState = create<ProfileState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      resetProfile: () => set({ profile:null })
    }),
    {
      name: 'pulic-fitnessprofile',
    }
  )
);
