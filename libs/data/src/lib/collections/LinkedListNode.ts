import { ILinkedListNode } from './ILinkedListNode';

export class LinkedListNode<T> implements ILinkedListNode<T> {
  constructor(
    public value: T,
    public previous: ILinkedListNode<T> | null = null,
    public next: ILinkedListNode<T> | null = null
  ) {}
}
