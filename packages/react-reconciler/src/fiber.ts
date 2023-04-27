import { Props, Key, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';
export class FiberNode {
    type: any;
    tag: any;
    pendingProps: Props;
    key: Key;
    stateNode: any;
    ref: Ref;

    return: FiberNode | null;
    sibling: FiberNode | null;
    child: FiberNode | null;
    index: number;

    memoizedProps: Props | null;
    alternate: FiberNode | null;
    flags: Flags;

    constructor(tag: WorkTag, pendingProps: Props, key: Key) {
        // 实例
        this.tag = tag;
        this.key = key;
        // HostComponent <div> div DOM
        this.stateNode = null;
        // FunctionComponent () => {}
        this.type = null;

        // 构成树状结构
        // 指向父 FiberNode
        this.return = null;
        // 指向当前节点右边的兄弟节点
        this.sibling = null;
        // 指向子项的 FiberNode
        this.child = null;
        // 同级节点的索引
        this.index = 0;

        this.ref = null;

        // 作为工作单元
        this.pendingProps = pendingProps;
        this.memoizedProps = null;

        this.alternate = null;
        // 副作用
        this.flags = NoFlags;
    }
}
