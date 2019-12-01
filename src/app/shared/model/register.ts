export interface Iregister {
    firstname: string;
    lastname: string;
    address: string;
    UserLogin :{
        email: string;
        password: string;
    }
};
export interface Ilogin {
    UserLogin: {
        email: string;
        password: string;
    }
};