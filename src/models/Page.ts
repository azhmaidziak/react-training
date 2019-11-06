import MenuList from "./MenuList";

export type Body = {
    keyId: string
    bodyText: string
}
export default interface Page {
    menu: MenuList,
    body: Body
}