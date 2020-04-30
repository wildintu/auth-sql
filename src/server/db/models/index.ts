export interface TUsers {
    id: number;
    email: string;
    password: string;
    role: string;
    _created: Date;
}

export interface TTokens {
    id: number;
    userid: number;
    token_val: string
    _created: Date;
}