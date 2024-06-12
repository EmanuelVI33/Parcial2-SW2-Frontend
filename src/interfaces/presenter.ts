export interface PresenterCreate {
    fullName: string;
    photo: string;
    sex: Sex;
}

export interface Presenter {
    id: string;
    fullName: string;
    fotoUrl: string;
    sex: Sex;
}

export enum Sex {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}