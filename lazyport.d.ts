export interface Airport {
    name: string;
    city: string;
    country: string;
    iata: string;
    icao: string;
    latitude: number;
    longitude: number;
    altitude: number;
    dst: string;
    tz: string;
    distance: number;
}
export declare class Lazyport {
    private _airports;
    constructor();
    airports: Airport[];
    nearby(latitude: number, longitude: number, radius?: number): Airport[];
    search(query: string): Airport[];
    private distance;
    private toRad;
}
