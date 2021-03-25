import { injectable } from "inversify";
import { Code } from "../interfaces/code";


@injectable()
export class RandomCode implements Code {
    generate(): string {
        return (Math.floor(Math.random() * 9000) + 1000).toString()
    }
}