import { DoctorInterface } from "../interfaces";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            signup: undefined;
            home: undefined; 
            forgotpassword: undefined;
            doctordetails: DoctorInterface;
            dateandtime: undefined;
        }
    }
}