import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { axiosInstance } from '~/lib/utils';

type AuthState = {token: string | null; authenticated: boolean | null};

const AuthContext = createContext<{
  authState: AuthState;
  setAuthState: Dispatch<SetStateAction<AuthState>>;
  onLogout: () => void;
}>({
  authState: {
    token: null,
    authenticated: null,
  },
  setAuthState: () => {},
  onLogout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await SecureStore.getItemAsync('my-jwt');
        console.log('Stored token:', token);
        if (token) {
          setAuthState({
            token,
            authenticated: true,
          });
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
          setAuthState({
            token: null,
            authenticated: false,
          });
        }
      } catch (error) {
        console.error('Error loading token:', error);
        setAuthState({
          token: null,
          authenticated: false,
        });
      }
    };
    loadToken();
  }, []);

  useEffect(() => {
    const updateToken = async () => {
      if (authState.token) {
        await SecureStore.setItemAsync('my-jwt', authState.token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${authState.token}`;
      } else {
        await SecureStore.deleteItemAsync('my-jwt');
        delete axiosInstance.defaults.headers.common['Authorization'];
      }
    };
    updateToken();
  }, [authState.token]);

  const onLogout = async () => {
    // Token'ı ve kimlik doğrulama durumunu sıfırla
    setAuthState({
      token: null,
      authenticated: false,
    });
    // Token'ı SecureStore'dan sil
    await SecureStore.deleteItemAsync('my-jwt');
    // Axios instance'dan Authorization header'ını kaldır
    delete axiosInstance.defaults.headers.common['Authorization'];
    console.log('Logged out');
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };