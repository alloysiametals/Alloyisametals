// src/types/product.ts

export interface Standards {
  uns?: string | string[];
  Werkstoff?: string | string[];
  bs?: string | string[];
  en?: string | string[];
  astm?: string | string[];
  din?: string | string[];
  asme?: string | string[];
  ams?: string | string[];
  [key: string]: string | string[] | undefined; // allow additional dynamic standards
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;

  standards?: Standards; // flexible to support multiple forms

  specifications?: {
    sheetAndPlate?: string;
    roundBar?: string;
    pipe?: string;
    tube?: string;
    fittings?: string;
    flange?: string;
    bar?: string;
    [key: string]: string | undefined; // allow extra keys
  };

  corrosionResistance?: string | string[];
  workability?: string | string[];
  applications?: string | string[];
  heatResistance?: string | string[];
  fabricationGuidelines?: string | string[];
  coldWorking?: string | string[];
  hotWorking?: string | string[];
  machinability?: string | string[];
  heatTreatment?: string | string[];
  weldability?: string | string[];
  characteristics?: string[];

  sizesAvailable?: string[] | Record<string, string>;

  averageRoomTemperatureHardness?: Record<string, string | number>;

  tables?: {
    title: string;
    groupBy: string;
    columnHeaders: Record<string, string>;
    data: Record<string, string>[];
  }[];
}
