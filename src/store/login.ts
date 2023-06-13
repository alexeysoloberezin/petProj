import { defineStore } from "pinia";
import {message} from "ant-design-vue";
// @ts-ignore
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
        user: null as User | null
    }),
    getters: {
        getUser(): User | null {
            return this.user;
        },
        getCurrentUser(): any {
            // Получение текущего пользователя после авторизации
            const currentUser = auth.currentUser;

            if (currentUser) {
                // Информация о текущем пользователе
                const uid = currentUser.uid;
                const email = currentUser.email;
                const displayName = currentUser.displayName;
                return {uid, email, displayName}

            } else {
                // Пользователь не авторизован
                return null
            }
        }
    },
    actions: {
        setUser(user: User): void {
            this.user = user;
        },
        clearUser(): void {
            this.user = null;
        },
        async login(email: string, password: string){
            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log(auth.currentUser)
                this.setUser({email: auth.currentUser?.email, ava: '', name: auth.currentUser?.displayName})
                await router.push('/'); // Redirect to the dashboard
            } catch (error: any) {
                message.error(error.message);
            }
        },
        async register(email: string, password: string) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                message.success('Registration successful. Please log in.');
                await router.push('/login');
            } catch (error: any ) {
                message.error(error.message);
            }
        }
    }
});
