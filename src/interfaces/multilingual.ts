export type Multilingual = {
    en: string,
    fa: string,
    de: string,
    ckb: string
}

export const MongooseMultilingual = {
    en: String,
    fa: String,
    de: String,
    ckb: String
}

export const Languages: (keyof Multilingual)[] = ['en', 'fa', 'de', 'ckb'];



