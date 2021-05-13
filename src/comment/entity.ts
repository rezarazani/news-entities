import { injectable, inject } from "inversify";
import { ENTITY } from "../ioc/types";
import { Id } from "../interfaces/id";
import { News } from "../news";
import { User } from "../user";


export type Comment = {
    id: string,
    newsId : News['id'] ,
    userId : User['id'] ,
    createdAt : number ,
    text : string
}

@injectable()
export class CommentEntity {
    
    private _id: Comment['id'] = this.Id.generate();;
    private _newsId: Comment['newsId'] = '';
    private _userId: Comment['userId'] = '';
    private _text: Comment['text'] = '';
    private _createdAt : Comment['createdAt'] = Date.now();


    constructor(
        @inject(ENTITY.Id) private Id: Id,
    ) { }

    public set(params: Partial<Comment>) {
        if (params.id) {
            this.id = params.id;
        }
        if (params.newsId) {
            this.newsId = params.newsId;
        }
        if (params.userId) {
            this.userId = params.userId;
        }
        if (params.text) {
            this.text = params.text;
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

    get text(): string {
        return this._text;
    }
    set text(text: string) {
        this._text = text;
    }

    get createdAt(): Comment['createdAt'] {
        return this._createdAt;
    }
    set createdAt(createdAt: Comment['createdAt']) {
        this._createdAt = createdAt;
    }

 

    public toObject() : Comment {
        return {
            id : this.id ,
            newsId : this.newsId ,
            createdAt : this.createdAt ,
            userId : this.userId ,
            text : this.text
        }
    }

}