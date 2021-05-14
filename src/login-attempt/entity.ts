import {injectable , inject} from 'inversify';
import {ENTITY} from '../ioc/types';
import {Id} from '../interfaces/id';
import { User} from '../user'

const  Situation = <const> ['successful' , 'UserNameNotFound' , 'WrongPassword' , 'WrongType'] ;

export type LoginAttempt2 = {
    id : string ,
    state : typeof Situation[number] ,
    ip : string , 
    userId : User['id'] | null ,
    client: {
        type: string | null ,
        name: string | null ,
        version: string | null,
        engine: string | null,
        engineVersion: string | null ,
    } | null ,
    os: {
        name: string | null ,
        version: string | null ,
        platform: string | null  
    } | null ,
    device: {
        type: string | null ,
        brand: string | null ,
        model: string | null ,
    } | null ,
    bot: string | null ,
}

export type LoginAttempt = {
    id : string ,
    state : typeof Situation[number] ,
    ip : string , 
    userId : User['id'] | null ,
    client: object | null ,
    os: object | null ,
    device: object | null ,
    bot: string | null ,
    createdAt : number
}

@injectable()
export class LoginAttemptEntity {
    private _id : LoginAttempt['id'] = this.Id.generate();
    private _state : LoginAttempt['state'] = 'successful' ;
    private _ip : LoginAttempt['ip'] = '';
    private _userId : LoginAttempt['userId'] = '' ;
    private _client : LoginAttempt['client'] = {
        type: '' ,
        name: '' ,
        version: '',
        engine: '',
        engineVersion: '' ,
    };
    private _os : LoginAttempt['os'] = Object() ;
    private _device : LoginAttempt['device'] = Object() ;
    private _bot : LoginAttempt['bot'] = null ;
    private _createdAt : LoginAttempt['createdAt'] = 0


    constructor(
        @inject(ENTITY.Id) private Id : Id 
    ){  }


    public set(params : Partial<LoginAttempt>){
        if(params.id){
            this.id = params.id;
        }
        if(params.state){
            this.state = params.state;
        }
        if(params.ip){
            this.ip = params.ip;
        }
        if(params.userId){
            this.userId = params.userId;
        }
        if(params.client){
            this.client = params.client;
        }
        if(params.os){
            this.os = params.os;
        }
        if(params.device){
            this.device = params.device;
        }
        if(params.bot){
            this.bot = params.bot;
        }
        if(params.createdAt){
            this._createdAt = params.createdAt ; 
        }
    }

    get id(): LoginAttempt['id'] {
        return this._id;
    }

    set id(id: LoginAttempt['id']) {
        this._id = id;
    }

    get state(): LoginAttempt['state'] {
        return this._state;
    }

    set state(state: LoginAttempt['state']) {
        this._state = state;
    }

    get ip(): LoginAttempt['ip'] {
        return this._ip;
    }

    set ip(ip: LoginAttempt['ip']) {
        this._ip = ip;
    }

    get userId(): LoginAttempt['userId'] {
        return this._userId;
    }

    set userId(userId: LoginAttempt['userId']) {
        this._userId = userId;
    }

    get client(): LoginAttempt['client'] {
        return this._client;
    }

    set client(client: LoginAttempt['client']) {
        this._client = client;
    }

    get os(): LoginAttempt['os'] {
        return this._os;
    }

    set os(os: LoginAttempt['os']) {
        this._os = os;
    }

    get device(): LoginAttempt['device'] {
        return this._device;
    }

    set device(device: LoginAttempt['device']) {
        this._device = device;
    }

    get bot(): LoginAttempt['bot'] {
        return this._bot;
    }

    set bot(bot: LoginAttempt['bot']) {
        this._bot = bot;
    }

    get createdAt() : LoginAttempt['createdAt'] {
        return this._createdAt
    }

    set createdAt(createdAt : LoginAttempt['createdAt']){
        this._createdAt = createdAt ;
    }
    toObject() : LoginAttempt {
        return {
            id : this.id ,
            state : this.state ,
            ip : this.ip ,
            userId : this.userId ,
            client: this.client ,
            os: this.os ,
            device: this.device  ,
            bot: this.bot ,
            createdAt : this._createdAt
        }
    }
    
}