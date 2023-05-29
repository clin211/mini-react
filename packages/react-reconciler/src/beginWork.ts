// 递归中的递阶段
import { ReactElementType } from 'shared/ReactTypes';
import { FiberNode } from './fiber';
import { UpdateQueue, processUpdateQueue } from './updateQueue';
import { HostComponent, HostRoot, HostText } from './workTags';
import { mountChildFibers, reconcileChildrenFibers } from './childFibers';

export const beginWork = (wip: FiberNode) => {
    // 比较， 返回子 FiberNode
    switch (wip.tag) {
        case HostRoot:
            return updateHostRoot(wip);
        case HostComponent:
            return updateHostComponent(wip);
        case HostText:
            return null;
        default:
            if (__DEV__) {
                console.log('begin work 未实现类型');
            }
            break;
    }
    return null;
};

function updateHostRoot(wip: FiberNode) {
    const baseState = wip.memoizedState;
    const updateQueue = wip.updateQueue as UpdateQueue<Element>;
    const pending = updateQueue.shared.pending;
    updateQueue.shared.pending = null;
    const { memoizedState } = processUpdateQueue(baseState, pending);
    wip.memoizedState = memoizedState;

    const nextChildren = wip.memoizedState;
    reconcileChildren(wip, nextChildren);
    return wip.child;
}

function updateHostComponent(wip: FiberNode) {
    const nextProps = wip.pendingProps;
    const nextChildren = nextProps.children;
    reconcileChildren(wip, nextChildren);
    return wip.child;
}

function reconcileChildren(wip: FiberNode, children?: ReactElementType) {
    const current = wip.alternate;
    if (current != null) {
        // update
        wip.child = reconcileChildrenFibers(wip, current?.child, children);
    } else {
        // mount
        wip.child = mountChildFibers(wip, null, children);
    }
}
