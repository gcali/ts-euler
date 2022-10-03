export const x = 2;

export function* subsetGenerator<T>(array: T[], start: number, howMany: number | null = null): Iterable<T[]> {
    if (start >= array.length || howMany === 0) {
        yield [];
    } else {
        if (howMany !== null) {
            for (const sub of subsetGenerator(array, start + 1, howMany)) {
                yield sub;
            }
            for (const sub of subsetGenerator(array, start + 1, howMany - 1)) {
                yield [array[start]].concat(sub);
            }
        } else {
            for (const sub of subsetGenerator(array, start + 1)) {
                yield sub;
                yield [array[start]].concat(sub);
            }
        }
    }
}