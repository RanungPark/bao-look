import { atom } from 'recoil';
import type { AtomEffect } from 'recoil';
// import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist();

export interface IAuthStore {
  accessToken: string;
  refreshToken: string;
  grantType: string;
  memberId: number;
  randomName: string;
}

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      if (isReset) {
        return localStorage.removeItem(key);
      }

      return localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const authStore = atom<IAuthStore>({
  key: 'authStore',
  default: {
    accessToken: '',
    refreshToken: '',
    grantType: '',
    memberId: 1,
    randomName: '',
  },
  // effects_UNSTABLE: [persistAtom],
  effects: [localStorageEffect<IAuthStore>('authStore')],
});
