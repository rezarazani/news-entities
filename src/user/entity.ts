import { injectable, inject } from "inversify";
import { ENTITY } from "../ioc/types";
import { HashHelper } from "../interfaces/hash";
import { Id } from "../interfaces/id";

type AccountTypes = 'admin' | 'normal';

const maxTag = 20;
declare  global {
    interface Array<T> {
        inArray: (comparer: any) => boolean;
        pushIfNotExist: (element: any, comparer: any) => void;
    }
}

export type User = {
    id: string,
    accountType: AccountTypes,
    username: string,
    password: string,
    email : string ,
    salt: string,
    name: string,
    isBlock : boolean ;
    refreshToken: string[],
    tagsUserSee : string[],
    photo : string
}

@injectable()
export class UserEntity {
    
    private _id: string;
    private _name: string;
    private _username: string;
    private _password: string;
    private _email: string;
    private _isBlock: boolean;
    private _salt: string;
    private _accountType: AccountTypes;
    private _refreshToken: User['refreshToken'];
    private _tagsUserSee: string[];
    private _photo: string;



    constructor(
        @inject(ENTITY.Hash) private hash: HashHelper,
        @inject(ENTITY.Id) private Id: Id,
    ) {
        this._id = Id.generate();
        this._name = '';
        this._username = '';
        this._password = '';
        this._email = '';
        this._salt = this.hash.randomString();
        this._accountType = 'normal';
        this._refreshToken = [];
        this._isBlock = false ;
        this._tagsUserSee = [] ;
        this._photo = '' ;
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
        if (params.email) {
            this.email = params.email;
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
        if (params.photo) {
            this.photo = params.photo;
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

    get email(): string {
        return this._email;
    }
    set email(email: string) {
        this._email = email;
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

    get photo(): string {
        return this._photo;
    }
    set photo(photo: string) {
        this._photo = photo;
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

    get tagsUserSee() {
        return this._tagsUserSee.concat();
    }
    set tagsUserSee(tags: string[]) {
        for (let tag of tags) {
            this.addTagsUserSee(tag);
        }
    }
    public addTagsUserSee(tag: string) {

        Array.prototype.inArray = function(comparer) { 
            for(var i=0; i < this.length; i++) { 
                if(comparer(this[i])) return true; 
            }
            return false; 
        }; 
        
        // adds an element to the array if it does not already exist using a comparer 
        // function
        Array.prototype.pushIfNotExist = function(element, comparer) { 
            if (!this.inArray(comparer)) {
                this.push(element);
            }
        }

      

        if (this._tagsUserSee.length >= maxTag) {
            this._tagsUserSee.shift();
            this._tagsUserSee.pushIfNotExist(tag, function(e: string) { 
                return e === tag
            });
        } else {
            this._tagsUserSee.pushIfNotExist(tag, function(e: string) { 
                return e === tag
            });
        }
    }

    

    public async makeRefreshToken(): Promise<string> {
        return this.hash.randomString()
    }

    public removeRefreshToken(refreshToken: string): void {
        this._refreshToken = this._refreshToken.filter(t => t != refreshToken);
    }
}