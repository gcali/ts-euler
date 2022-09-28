import {isProbablyPrime} from 'bigint-crypto-utils';

export const isPrime = (n: number): Promise<boolean> => {
    return isProbablyPrime(n);
}

export const factorize = async (target: number): Promise<number[]> => {
    const limit = Math.floor(Math.sqrt(target));
    const sieve = await buildSieve(limit);
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