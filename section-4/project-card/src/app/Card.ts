export class Card {
  constructor(
    public type: string = 'Simple',
    public price: number = 0.0,
    public style: "orange" | "purple" = "orange",
  ) { }
}