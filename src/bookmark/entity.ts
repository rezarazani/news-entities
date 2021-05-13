import { injectable, inject } from "inversify";
import { ENTITY } from "../ioc/types";
import { Id } from "../interfaces/id";
import { News } from "../news";
import { User } from "../user";


export type BookMark = {
    id: string,
    newsId : News['id'] ,
    userId : User['id'] ,
    createdAt : number ,
}

@injectable()
export class BookMarkEntity {
    
    private _id: BookMark['id'] = this.Id.generate();;
    private _newsId: BookMark['newsId'] = '';
    private _userId: BookMark['userId'] = '';
    private _createdAt : BookMark['createdAt'] = Date.now();


    constructor(
        @inject(ENTITY.Id) private Id: Id,
    ) { }

    public set(params: Partial<BookMark>) {
        if (params.id) {
            this.id = params.id;
        }
        if (params.newsId) {
            this.newsId = params.newsId;
        }
        if (params.userId) {
            this.userId = params.userId;
        }

        if (params.createdAt) {
            this.createdAt = params.createdAt;
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

    get newsId(): string {
        return this._newsId;
    }
    set newsId(newsId: string) {
        this._newsId = newsId;
    }
    
    get userId(): string {
        return this._userId;
    }
    set userId(userId: string) {
        this._userId = userId;
    }

    get createdAt(): BookMark['createdAt'] {
        return this._createdAt;
    }
    set createdAt(createdAt: BookMark['createdAt']) {
        this._createdAt = createdAt;
    }

 

    public toObject() : BookMark {
        return {
            id : this.id ,
            newsId : this.newsId ,
            createdAt : this.createdAt ,
            userId : this.userId ,
        }
    }

}