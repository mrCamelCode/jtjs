import { Event } from '../Event';

type EventListener = () => void;
type EventListenerWithArgs = (str: string, num: number) => void;

describe('Event', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("can take subscriptions, trigger them, and doesn't trigger them after it's unsubscribed.", () => {
    const event = new Event<EventListener>();
    const listener = jest.fn();
    const listener2 = jest.fn();

    event.subscribe(listener);

    expect(listener).not.toHaveBeenCalled();
    expect(listener2).not.toHaveBeenCalled();

    event.trigger();

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener2).not.toHaveBeenCalled();

    event.subscribe(listener2);

    event.trigger();

    expect(listener).toHaveBeenCalledTimes(2);
    expect(listener2).toHaveBeenCalledTimes(1);

    event.unsubscribe(listener);

    event.trigger();

    expect(listener).toHaveBeenCalledTimes(2);
    expect(listener2).toHaveBeenCalledTimes(2);
  });

  it('correctly handles event listeners that take args', () => {
    const event = new Event<EventListenerWithArgs>();

    const listener = jest.fn();

    event.subscribe(listener);

    event.trigger('hello world', 5);

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenLastCalledWith('hello world', 5);
  });
});
