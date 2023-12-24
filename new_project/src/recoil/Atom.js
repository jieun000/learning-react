import { atom } from "recoil";

export const Atom = atom({
    key: 'OneAtom', // 전역적으로 유일
    default: 0
})