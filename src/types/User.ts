export const TRIMP_FACTOR_M = 1.92;
export const TRIMP_FACTOR_F = 1.67;

export enum TRIMP_FACTOR {
    /**
     * Male
     */
    M = 1.92,
    /**
     * Female
     */
    F = 1.67,
}

export type User = {
    restHr: number,
    thresHr: number,
    maxHr: number,
    trimpFactor: TRIMP_FACTOR,
}
