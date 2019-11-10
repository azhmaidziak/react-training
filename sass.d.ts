declare module '*.sass' {
    type IClassNames = {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
