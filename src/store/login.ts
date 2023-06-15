import { defineStore } from "pinia";
import {message} from "ant-design-vue";
// @ts-expect-error: No types available
import {auth} from "@/plugins/firebase/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import router from "@/router";

export interface User {
    email: string;
    name: string;
    ava: string;
}

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        user: null as User | null,
        loading: false as boolean
    }),
    getters: {
        getLoading(): boolean {
          return this.loading
        },
        getUser(): User | null {
            return this.user;
        },
    },
    actions: {
        setLoading(loading: boolean): void {
          this.loading = loading
        },
        setUser(user: User): void {
            this.user = user;
        },
        watchStatusUser(): void {
            auth.onAuthStateChanged((user: User | null) => {
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                } else {
                    localStorage.removeItem('currentUser');
                }
            });
        },
        async login(email: string, password: string): Promise<void>{
            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log(auth.currentUser)
                this.setUser({email: auth.currentUser?.email, ava: '', name: auth.currentUser?.displayName})
                await router.push('/');
            } catch (error: any) {
                message.error(error.message);
            }
            this.loading = false
        },
        async register(email: string, password: string): Promise<void> {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                message.success('Registration successful. Please log in.');
                await router.push('/login');
            } catch (error: any ) {
                message.error(error.message);
            }
            this.loading = false
        },
        async fetchCurrentUser(): Promise<void> {
            const savedUser = localStorage.getItem('currentUser');
            const currentUser = savedUser ? JSON.parse(savedUser) : auth.currentUser;

            if (currentUser) {
                const {email, displayName, photoURL} = currentUser

                this.user = {
                    email,
                    name: displayName || '',
                    ava: photoURL || ''
                };
            } else {
                this.user = null;
            }
        },
        async logout(): Promise<void>{
            try{
                await auth.signOut();
                this.user = null
            }catch (err: any){
                message.error(err.message)
            }
        }
    }
});
