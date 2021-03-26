import { injectable, inject } from "inversify";
import { ENTITY } from "../ioc/types";
import { Id } from "../interfaces/id";


export type Category = {
    id: string,
    name : string ,
    description : string ,
    visible : boolean ,
    pic : string 
}

@injectable()
export class CategoryEntity {
    
    private _id: string = this.Id.generate();;
    private _name: string = '';
    private _description: string = '';
    private _visible: boolean = false ;
    private _pic: string = '';


    constructor(
        @inject(ENTITY.Id) private Id: Id,
    ) { }

    public set(params: Partial<Category>) {
        if (params.id) {
            this.id = params.id;
        }
        if (params.name) {
            this.name = params.name;
        }
        if (params.description) {
            this.description = params.description;
        }

        if (params.visible) {
            this.visible = params.visible;
        }

        if (params.pic) {
            this.pic = params.pic;
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
    
    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }

    get visible(): boolean {
        return this._visible;
    }
    set visible(visible: boolean) {
        this._visible = visible;
    }

    get pic(): string {
        return this._pic;
    }
    set pic(pic: string) {
        this._pic = pic;
    }

    public toObject() : Category {
        return {
            id : this.id ,
            name : this.name ,
            description :  this.description ,
            visible : this.visible ,
            pic : this.pic
        }
    }

}