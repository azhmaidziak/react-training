export type Body = {
    bodyText: string;
}

export type Page = {
    menu: MenuList;
    body: Body;
}

export type MenuList = {
    readonly items: Array<MenuItem>;
}

export type MenuItem = {
    readonly key: string;
    readonly text: string;
}