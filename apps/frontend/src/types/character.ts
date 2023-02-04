import { ICombo } from '@/types/combo';

export interface ICharacter {
    id: string;
    name: string;
    combos: ICombo[];
}
