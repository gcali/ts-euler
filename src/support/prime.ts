import {isProbablyPrime} from 'bigint-crypto-utils';

export const isPrime = (n: number): Promise<boolean> => {
    return isProbablyPrime(n);
}

export const numberOfDivisors = (factorization: number[]): number => {

    const exponents: {[key: number]: number} = {};

    for (const factor of factorization) {
        exponents[factor] = (exponents[factor] || 0) + 1
    }

    return Object.values(exponents).map(v => v + 1).reduce((acc, next) => acc * next, 1);
}

const getSieve = async (limit: number, reusableSieve: ReusableSieve | null): Promise<number[]> => {
    if (!reusableSieve) {
        return await buildSieve(limit);
    }
    await reusableSieve.ensure(limit);
    return reusableSieve.sieve;
}

export const factorize = async (target: number, reusableSieve: ReusableSieve | null = null): Promise<number[]> => {
    const limit = Math.floor(Math.sqrt(target));
    const sieve = await getSieve(limit, reusableSieve);//await buildSieve(limit);
    const factorization: number[] = [];

    for (const item of sieve) {
        while (target % item === 0) {
            factorization.push(item);
            target /= item;
        }
        if (item > target) {
            break;
        }
    }
    if (target !== 1) {
        factorization.push(target);
    }
    return factorization;
};

export class ReusableSieve {

    public sieve: number[];
    private upTo: number;

    constructor() {
        this.upTo = 100;
        this.sieve = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    }

    public async ensure(upTo: number) {
        if (upTo > this.upTo) {
            const limit = Math.max(upTo, this.upTo * 2);
            this.sieve = await buildSieve(limit);
            this.upTo = limit;
        }
    }
}

export const buildSieve = async (upTo: number): Promise<number[]> => {
    const all: boolean[] = new Array<boolean>(Math.ceil((upTo-2)/2));
    for (let i = 3; i <= upTo; i+=2) {
        if (!all[(i-3)/2]) {
            let current = i*2;
            while (current <= upTo) {
                all[(current-3)/2] = true;
                current += i;
            }
        }
    }

    const result: number[] = [2];

    for (let i = 3; i <= upTo; i+=2) {
        if (!all[(i-3)/2]) {
            result.push(i);
        }
    }

    return result;

}