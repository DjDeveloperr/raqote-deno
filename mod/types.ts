export type PathType =
  | "Move"
  | "Quad"
  | "Cubic"
  | "Arc"
  | "Rect"
  | "Line"
  | "Close";

export type SourceType =
  | "Solid"
  | "LinearGradient"
  | "RadialGradient"
  | "TwoCircleRadialGradient";

export enum Spread {
  Pad = "Pad",
  Reflect = "Reflect",
  Repeat = "Repeat",
}

export enum LineCap {
  Round = "Round",
  Butt = "Butt",
  Square = "Square",
}

export enum LineJoin {
  Round = "Round",
  Miter = "Miter",
  Bevel = "Bevel",
}

export enum BlendMode {
  Dst = "Dst",
  Src = "Src",
  Clear = "Clear",
  SrcOver = "SrcOver",
  DstOver = "DstOver",
  SrcIn = "SrcIn",
  DstIn = "DstIn",
  SrcOut = "SrcOut",
  DstOut = "DstOut",
  SrcAtop = "SrcAtop",
  DstAtop = "DstAtop",
  Xor = "Xor",
  Add = "Add",
  Screen = "Screen",
  Overlay = "Overlay",
  Darken = "Darken",
  Lighten = "Lighten",
  ColorDodge = "ColorDodge",
  ColorBurn = "ColorBurn",
  HardLight = "HardLight",
  SoftLight = "SoftLight",
  Difference = "Difference",
  Exclusion = "Exclusion",
  Multiply = "Multiply",
  Hue = "Hue",
  Saturation = "Saturation",
  Color = "Color",
  Luminosity = "Luminostiy",
}

export interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface GradientStop {
  position: number;
  color: IColor;
}

export interface IGradient {
  stops: GradientStop[];
}

export interface ISource {
  src_type: SourceType;
  color?: IColor | null;
  start?: number[] | null;
  end?: number[] | null;
  center?: number[] | null;
  radius?: number | null;
  center2?: number[] | null;
  radius2?: number | null;
  spread?: Spread | null;
  gradient?: IGradient | null;
}

export interface Path {
  path_type: PathType;
  linear?: number[] | null;
  quad?: number[] | null;
  cubic?: number[] | null;
  arc?: number[] | null;
}

export interface PathData {
  steps: Path[];
}

export interface StrokeStyle {
  width: number;
  cap: LineCap;
  join: LineJoin;
  miter_limit: number;
  dash_array: number[];
  dash_offset: number;
}
