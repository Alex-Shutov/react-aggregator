export interface IBadge {
  number: number;
  boldText?:string,
  defaultText:string
}

export interface IBadgeList {
  badges: IBadge[];
}