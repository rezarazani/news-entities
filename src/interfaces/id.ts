export interface Id {
    generate(): string,
    isValid(id: string): boolean
}