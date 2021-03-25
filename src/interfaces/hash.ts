export interface HashHelper {
    makeHash(data: string, salt: string): Promise<string>,
    compareHash(data: string, hashed: string, salt: string): Promise<boolean>,
    randomString(length?: number): string
}