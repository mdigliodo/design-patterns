export interface ComponentInterface {
    add: (component: ComponentInterface) => void;
    operation(): void;
}