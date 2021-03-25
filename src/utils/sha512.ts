import {randomBytes, pbkdf2} from 'crypto';
import { injectable } from 'inversify';
import { HashHelper } from '../interfaces/hash';

@injectable()
export class SHA512 implements HashHelper {

    public randomString(length?: number): string {
        if (!length) length = 32;
        return randomBytes(length).toString('hex');
    }

    public async makeHash(data: string, salt: string): Promise<string> {
        return new Promise((resolve, reject) => {
            pbkdf2(data, salt, 1000, 64, 'sha512', (err, hash) => {
                if (err) return reject(err);
                return resolve(hash.toString('hex'))
            })
        });
    }
    compareHash(data: string, hashed: string, salt: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            pbkdf2(data, salt, 1000, 64, 'sha512', (err, hash) => {
                if (err) return reject(err);
                return resolve(hashed == hash.toString('hex'));
            })
        })
    }
}