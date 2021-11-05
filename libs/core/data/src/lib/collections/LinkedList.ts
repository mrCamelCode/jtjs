import { ILinkedList } from './ILinkedList';
import { ILinkedListNode } from './ILinkedListNode';
import { LinkedListNode } from './LinkedListNode';

/**
 * Implementation of a doubly linked list.
 */
export class LinkedList<T> implements ILinkedList<T> {
  private _head: ILinkedListNode<T> | null;
  get head(): ILinkedListNode<T> | null {
    return this._head;
  }

  private _tip: ILinkedListNode<T> | null;
  get tip(): ILinkedListNode<T> | null {
    return this._tip;
  }

  get tail(): ILinkedList<T> {
    return new LinkedList();
  }

  get first(): T | undefined {
    return this._head?.value;
  }

  get last(): T | undefined {
    return this._tip?.value;
  }

  private _length: number;
  get length(): number {
    return this._length;
  }

  get isEmpty(): boolean {
    return this._length === 0;
  }

  constructor(...values: T[]) {
    this._head = null;
    this._tip = null;
    this._length = 0;

    values.forEach((val) => {
      this.add(val);
    });
  }

  add(value: T): void {
    const node = new LinkedListNode(value);

    node.previous = this._tip;
    if (this._tip) {
      this._tip.next = node;
    }

    this._tip = node;
    this._length++;

    if (this._length === 1) {
      // This is the first element added to the list.
      this._head = node;
    }
  }

  prepend(value: T): void {
    const node = new LinkedListNode(value);

    node.next = this._head;
    if (this._head) {
      this._head.previous = node;
    }

    this._head = node;
    this._length++;

    if (this._length === 1) {
      // This is the first element added to the list.
      this._tip = node;
    }
  }

  remove(value: T): void {
    let foundNode: ILinkedListNode<T> | null = null;

    for (let node = this._head; node !== null; node = node.next) {
      if (node.value === value) {
        foundNode = node;
        break;
      }
    }

    this.removeNode(foundNode);
  }

  removeFirst(): void {
    this.removeNode(this._head);
  }

  removeLast(): void {
    this.removeNode(this._tip);
  }

  filter(predicate: (nodeValue: T) => boolean): LinkedList<T> {
    const list = new LinkedList<T>();

    for (let node = this._head; node !== null; node = node.next) {
      if (predicate(node.value)) {
        list.add(node.value);
      }
    }

    return list;
  }

  map<T2>(iteratee: (nodeValue: T) => T2): LinkedList<T2> {
    const list = new LinkedList<T2>();

    for (let node = this._head; node !== null; node = node.next) {
      list.add(iteratee(node.value));
    }

    return list;
  }

  forEach(iteratee: (nodeValue: T) => void): void {
    for (let node = this._head; node !== null; node = node.next) {
      iteratee(node.value);
    }
  }

  includes(value: T): boolean {
    for (let node = this._head; node !== null; node = node.next) {
      if (node.value === value) {
        return true;
      }
    }

    return false;
  }

  some(predicate: (nodeValue: T) => boolean): boolean {
    for (let node = this._head; node !== null; node = node.next) {
      if (predicate(node.value)) {
        return true;
      }
    }

    return false;
  }

  find(predicate: (nodeValue: T) => boolean): T | null {
    for (let node = this._head; node !== null; node = node.next) {
      if (predicate(node.value)) {
        return node.value;
      }
    }

    return null;
  }

  clear(): void {
    this._head = null;
    this._tip = null;
    this._length = 0;
  }

  toArray(): T[] {
    const arr = [];

    for (let node = this._head; node !== null; node = node.next) {
      arr.push(node.value);
    }

    return arr;
  }

  toString(): string {
    let str = '(';
    for (let node = this._head; node !== null; node = node.next) {
      if (node === this._head) {
        str += `${node.value}`;
      } else {
        str += ` <-> ${node.value}`;
      }
    }

    return str + ')';
  }

  private removeNode(node: ILinkedListNode<T> | null) {
    if (!node) {
      return;
    }

    if (node.previous) {
      node.previous.next = node.next;
    }
    if (node.next) {
      node.next.previous = node.previous;
    }

    if (node === this._head) {
      this._head = node.next;
    }
    if (node === this._tip) {
      this._tip = node.previous;
    }

    node.previous = null;
    node.next = null;

    this._length--;
  }
}
