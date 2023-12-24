export interface ILinkedListNode<T> {
  value: T;
  previous: ILinkedListNode<T> | null;
  next: ILinkedListNode<T> | null;
}
