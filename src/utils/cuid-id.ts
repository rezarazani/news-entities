import {injectable} from 'inversify';
import * as cuid from 'cuid'
import { Id } from '../interfaces/id';

@injectable()
export class Cuid implements Id {
    generate(): string {
        return cuid();
    }    
    isValid(id: string): boolean {
        return cuid.isCuid(id);
    }
}