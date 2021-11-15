export abstract class NavBarItem {
    get key(): string {
        return this.href;
    }

    get href(): string {
        return this._href;
    }

    abstract get render(): JSX.Element;

    protected abstract _href: string;
}

export class TextNavItem extends NavBarItem {
    get render(): JSX.Element {
        return <>{this._navText}</>;
    }

    constructor(path: string, title: string) {
        super();
        this._href = path;
        this._navText = title;
    }

    protected _href: string;
    private readonly _navText: string = "default";
}
