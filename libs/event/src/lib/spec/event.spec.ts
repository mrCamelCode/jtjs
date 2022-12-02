import { Event } from '../event';

type EventListener = () => void;
type EventListenerWithArgs = (str: string, num: number) => void;

describe('Event', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("can take subscriptions, trigger them, and doesn't trigger them after it's unsubscribed.", () => {
    const event = new Event<EventListener>();
    const handler = jest.fn();
    const handler2 = jest.fn();

    event.subscribe(handler);

    expect(handler).not.toHaveBeenCalled();
    expect(handler2).not.toHaveBeenCalled();

    event.trigger();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler2).not.toHaveBeenCalled();

    event.subscribe(handler2);

    event.trigger();

    expect(handler).toHaveBeenCalledTimes(2);
    expect(handler2).toHaveBeenCalledTimes(1);

    event.unsubscribe(handler);

    event.trigger();

    expect(handler).toHaveBeenCalledTimes(2);
    expect(handler2).toHaveBeenCalledTimes(2);
  });

  it('correctly handles event listeners that take args', () => {
    const event = new Event<EventListenerWithArgs>();

    const listener = jest.fn();

    event.subscribe(listener);

    event.trigger('hello world', 5);

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenLastCalledWith('hello world', 5);
  });

  describe('subscribe', () => {
    it('can unsub a listener by invoking the unsub function returned', () => {
      const event = new Event<EventListener>();

      const handler = jest.fn();

      const unsub = event.subscribe(handler);

      event.trigger();

      expect(handler).toHaveBeenCalledTimes(1);

      unsub();

      event.trigger();

      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe('once', () => {
    it('invokes the handler when triggered', () => {
      const event = new Event<EventListener>();

      const handler = jest.fn();

      event.once(handler);

      event.trigger();

      expect(handler).toHaveBeenCalledTimes(1);
    });
    it('the handler is only invoked one time (the handler is automatically unsubbed after one trigger)', () => {
      const event = new Event<EventListener>();

      const handler = jest.fn();

      event.once(handler);

      event.trigger();

      expect(handler).toHaveBeenCalledTimes(1);

      event.trigger();

      expect(handler).toHaveBeenCalledTimes(1);
    });
    it('can unsub a listener by invoking the unsub function returned', () => {
      const event = new Event<EventListener>();

      const handler = jest.fn();

      const unsub = event.once(handler);

      unsub();

      event.trigger();

      expect(handler).toHaveBeenCalledTimes(0);
    });
  });

  describe('trigger', () => {
    describe('listener results', () => {
      it(`returns the results correctly when listeners return void`, () => {
        const event = new Event();

        const handlers = [jest.fn(), jest.fn()];

        handlers.forEach((h) => event.subscribe(h));

        const results = event.trigger();

        expect(results.length).toBe(2);
        // All results should be void (undefined).
        expect(results.some((result) => result !== undefined)).toBe(false);
      });
      it(`returns the results correctly when listeners return a value`, () => {
        const event = new Event<() => number>();

        const handlers = [
          jest.fn(() => 10),
          jest.fn(() => 15),
          jest.fn(() => 20),
        ];

        handlers.forEach((h) => event.subscribe(h));

        const results = event.trigger();

        expect(results.length).toBe(3);
        expect(results.includes(10)).toBe(true);
        expect(results.includes(15)).toBe(true);
        expect(results.includes(20)).toBe(true);
      });
    });
  });

  describe('invoke', () => {
    describe('can use invoke just like trigger', () => {
      describe('listener results', () => {
        it(`returns the results correctly when listeners return void`, () => {
          const event = new Event();

          const handlers = [jest.fn(), jest.fn()];

          handlers.forEach((h) => event.subscribe(h));

          const results = event.invoke();

          expect(results.length).toBe(2);
          // All results should be void (undefined).
          expect(results.some((result) => result !== undefined)).toBe(false);
        });
        it(`returns the results correctly when listeners return a value`, () => {
          const event = new Event<() => number>();

          const handlers = [
            jest.fn(() => 10),
            jest.fn(() => 15),
            jest.fn(() => 20),
          ];

          handlers.forEach((h) => event.subscribe(h));

          const results = event.invoke();

          expect(results.length).toBe(3);
          expect(results.includes(10)).toBe(true);
          expect(results.includes(15)).toBe(true);
          expect(results.includes(20)).toBe(true);
        });
      });
    });
  });
});
