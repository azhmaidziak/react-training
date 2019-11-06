import MenuItem from './MenuItem'

export default interface MenuList {
    readonly keyId: string;
    readonly items: MenuItem[];
}