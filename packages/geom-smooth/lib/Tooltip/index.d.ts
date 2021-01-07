import React from "react";
declare type Props = {
    data: any[];
    method: "loess" | "linear";
    x: (d: any) => number;
    y: (d: any) => number;
    b: (d: any) => number;
    markerRadius: number;
    strokeOpacity: number;
    fillOpacity: number;
    thisStrokeScale: (d: any) => string;
    thisSizeScale: (d: any) => number;
    thisDashArrayScale: (d: any) => string;
    stroke: string;
    size: number;
    dashArray?: string;
    models?: any;
    position?: "data" | "top";
};
export declare const Tooltip: React.FC<Props>;
export {};