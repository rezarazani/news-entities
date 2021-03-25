import { injectable, inject } from "inversify";
import { ENTITY } from "../ioc/types";
import { HashHelper } from "../interfaces/hash";
import { Id } from "../interfaces/id";
import { Category } from "../category/entity";
import { User } from "../user/entity";

type NewsTypes = 'photo' | 'clip' | 'text'  

export type News = {
    id: string,
    newsType: NewsTypes ,
    categoryId : Category['id'] ,
    categoryName : Category['name'] ,
    title: string,
    description: string,
    text : string ,
    html : string , 
    mediaLink : string ,
    author : User['id'] ,
    authorName : User['name'] ,
    tag : string[] ,
    createdAt : number ,
    inSlides : boolean ,
    appViews : number 
    webViews : number 

}

@injectable()
export class NewsEntity {
    
    private _id: string = this.Id.generate();;
    private _newsType: News['newsType'] = 'text';
    private _categoryId: News['categoryId'] = '' ;
    private _categoryName: News['categoryName'] = '' ;
    private _mediaLink: News['mediaLink'] = '' ;
    private _title: string = '';
    private _description: string = '';
    private _text: string = '';
    private _html: string = '';
    private _author: User['id'] = '';
    private _authorName: News['authorName'] = '';
    private _tag: News['tag'] = [''];
    private _createdAt : News['createdAt'] = Date.now();
    private _inSlides : News['inSlides'] = false;
    private _appViews : News['appViews'] = 0;
    private _webViews : News['webViews'] = 0;

    constructor(
        @inject(ENTITY.Hash) private hash: HashHelper,
        @inject(ENTITY.Id) private Id: Id,
    ) {  }

    public set(params: Partial<News>) {
        if (params.id) {
            this.id = params.id;
        }
        if (params.newsType) {
            this.newsType = params.newsType;
        }
        if (params.categoryId) {
            this.categoryId = params.categoryId;
        }
        if (params.categoryName) {
            this.categoryName = params.categoryName;
        }
        if (params.mediaLink) {
            this.mediaLink = params.mediaLink;
        }
        if (params.title) {
            this.title = params.title;
        }
        if (params.description) {
            this.description = params.description;
        }
        if (params.text) {
            this.text = params.text;
        }
        if (params.html) {
            this.html = params.html;
        }
        if (params.author) {
            this.author = params.author;
        }
        if (params.authorName) {
            this.authorName = params.authorName;
        }
        if (params.tag) {
            this.tag = params.tag;
        }
        if(params.createdAt){
            this.createdAt = params.createdAt ; 
        }
        if(params.inSlides){
            this.inSlides = params.inSlides ; 
        }
        if(params.appViews){
            this.appViews = params.appViews ; 
        }
        if(params.webViews){
            this.webViews = params.webViews ; 
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

    get newsType(): NewsTypes {
        return this._newsType;
    }
    set newsType(newsType: NewsTypes) {
        this._newsType = newsType;
    }
    
    get categoryId(): News['categoryId']  {
        return this._categoryId;
    }
    set categoryId(categoryId: News['categoryId']) {
        this._categoryId = categoryId;
    }

    get categoryName(): News['categoryName']  {
        return this._categoryName;
    }
    set categoryName(categoryName: News['categoryName']) {
        this._categoryName = categoryName;
    }

    get mediaLink(): News['mediaLink']  {
        return this._mediaLink;
    }
    set mediaLink(mediaLink: News['mediaLink']) {
        this._mediaLink = mediaLink;
    }

    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }

    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }

    get text(): string {
        return this._text;
    }
    set text(text: string) {
        this._text = text;
    }

    get html(): string {
        return this._html;
    }
    set html(html: string) {
        this._html = html;
    }

    get author(): User['id'] {
        return this._author;
    }
    set author(author: User['id']) {
        this._author = author;
    }

    get authorName(): News['authorName'] {
        return this._authorName;
    }
    set authorName(authorName: News['authorName']) {
        this._authorName = authorName;
    }

    get tag(){
        return this._tag.concat() ;
    }
    set tag(tag: News['tag']) {
        this._tag = tag;
    }


    get createdAt() : News['createdAt'] {
        return this._createdAt
    }

    set createdAt(createdAt : News['createdAt']){
        this._createdAt = createdAt ;
    }

    get inSlides() : News['inSlides'] {
        return this._inSlides
    }

    set inSlides(inSlides : News['inSlides']){
        this._inSlides = inSlides ;
    }

    get appViews() : News['appViews'] {
        return this._appViews
    }

    set appViews(appViews : News['appViews']){
        this._appViews = appViews ;
    }

    get webViews() : News['webViews'] {
        return this._webViews
    }

    set webViews(webViews : News['webViews']){
        this._webViews = webViews ;
    }

    public addTag(tag: string) {
            this._tag.push(tag);
    }

    public removeTag(tag: string): void {
        this._tag = this._tag.filter(t => t != tag);
    }

    public toObject() : News {
        return {
            author : this.author ,
            authorName : this.authorName ,
            categoryId : this.categoryId ,
            categoryName : this.categoryName ,
            createdAt : this.createdAt ,
            description : this.description ,
            html : this.html ,
            id : this.id ,
            inSlides : this.inSlides ,
            mediaLink : this.mediaLink ,
            newsType : this.newsType ,
            tag : this.tag ,
            text : this.text ,
            title : this.title ,
            appViews : this.appViews ,
            webViews : this.webViews ,
        }
    }
}