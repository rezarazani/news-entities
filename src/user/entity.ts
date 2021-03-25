import { injectable, inject } from "inversify";
import { ENTITY } from "../ioc/types";
import { HashHelper } from "../interfaces/hash";
import { Id } from "../interfaces/id";

type AccountTypes = 'admin' 

export type User = {
    id: string,
    accountType: AccountTypes,
    username: string,
    password: string,
    salt: string,
    name: string,
    isBlock : boolean ;
    refreshToken: string[]
}

@injectable()
export class UserEntity {
    
    private _id: string;
    private _name: string;
    private _username: string;
    private _password: string;
    private _isBlock: boolean;
    private _salt: string;
    private _accountType: AccountTypes;
    private _refreshToken: User['refreshToken'];

    constructor(
        @inject(ENTITY.Hash) private hash: HashHelper,
        @inject(ENTITY.Id) private Id: Id,
    ) {
        this._id = Id.generate();
        this._name = '';
        this._username = '';
        this._password = '';
        this._salt = this.hash.randomString();
        this._accountType = 'admin';
        this._refreshToken = [];
        this._isBlock = false ;
    }

    public set(params: Partial<User>) {
        if (params.id) {
            this.id = params.id;
        }
        if (params.name) {
            this.name = params.name;
        }
        if (params.username) {
            this.username = params.username;
        }
        if (params.password) {
            this.password = params.password;
        }
        if (params.salt) {
            this.salt = params.salt;
        }
        if (params.accountType) {
            this.accountType = params.accountType;
        }
        if (params.refreshToken) {
            this.refreshToken = params.refreshToken;
        }
        if (params.isBlock) {
            this.isBlock = params.isBlock;
        }
    }

    get id(): string {
        return this._id;
    }
    set id(id: string) {
        if (!this.Id.isValid(id)) {
            throw new Error("Inavalid Id");
        }
        this._id = id;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    
    get username(): string {
        return this._username;
    }
    set username(username: string) {
        this._username = username;
    }

    get accountType(): AccountTypes {
        return this._accountType;
    }
    set accountType(accountType: AccountTypes) {
        this._accountType = accountType;
    }

    get password(): string {
        return this._password;
    }
    set password(password: string) {
        this._password = password;
    }

    get salt(): string {
        return this._salt;
    }
    set salt(salt: string) {
        this._salt = salt;
    }

    get isBlock(): boolean {
        return this._isBlock;
    }
    set isBlock(isBlock: boolean) {
        this._isBlock = isBlock;
    }

    public async hashPassword(): Promise<string> {
        if (!this.password) throw new Error("Enter the password first!");
        return this.hash.makeHash(this.password, this.salt);
    }
    public async comparePassword(password: string): Promise<boolean> {
        if (!this.password) throw new Error("Enter the password first!");
        return this.hash.compareHash(password, this.password, this.salt);
    }

    get refreshToken() {
        return this._refreshToken.concat();
    }
    set refreshToken(tokens: string[]) {
        for (let token of tokens) {
            this.addRefreshToken(token);
        }
    }
    public addRefreshToken(token: string) {
        if (this._refreshToken.length >= 5) {
            this._refreshToken.shift();
            this._refreshToken.push(token);
        } else {
            this._refreshToken.push(token);
        }
    }

    public async makeRefreshToken(): Promise<string> {
        return this.hash.randomString()
    }

    public removeRefreshToken(refreshToken: string): void {
        this._refreshToken = this._refreshToken.filter(t => t != refreshToken);
    }
}