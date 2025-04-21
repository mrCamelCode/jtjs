export interface IProcessor<Input, Output> {
  produce(input: Input): Promise<Output>;
}