export type Container = Element;
export type Instance = Element;

export const createInstance = (type: string, props: any): Instance => {
    console.log('🚀 ~ file: hostConfig.ts:5 ~ createInstance ~ props:', props);
    // TODO handle props
    const element = document.createElement(type);
    return element;
};

export const appendInitialChild = (
    parent: Instance | Container,
    child: Instance
) => {
    parent.appendChild(child);
};

export const createTextInstance = (content: string) => {
    return document.createTextNode(content);
};

export const appendChildToContainer = appendInitialChild;
