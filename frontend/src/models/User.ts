export interface UserState {
    id: string,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    gender: string,
    dob: string,
    job: string,
    avt: string,
    hometown: string,
    currentResidence: string,
    school: string,
    height: string,
    bio: string,
    looking: string,
    createDate: string
    
}
export type UserLogin = {
    username: string,
    password: string
}
