import * as fs from "fs";

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

export class Lazyport {
	private _airports: Airport[] = [];
	constructor() {
		this.airports = JSON.parse(fs.readFileSync("./data/airports.json", "utf8"));
	}

	set airports(airports: Airport[]) {
		this._airports = airports;
	}

	get airports(): Airport[] {
		return this._airports;
	}

	public nearby(latitude: number, longitude: number, radius: number = 50): Airport[] {
		return this.airports.filter((airport: Airport) => {
			const d = this.distance(latitude, longitude, airport.latitude, airport.longitude);
			airport.distance = d;
			return airport.distance <= radius;
		}).sort((a, b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0));
	}

	public search(query: string): Airport[] {
		return this.airports.filter((obj: any) =>
			Object.keys(obj).some((k) => obj[k].toString().toLowerCase().includes(query.toLowerCase())));
	}

	private distance(la1: number, lo1: number, la2: number, lo2: number): number {
		const lat1 = this.toRad(la1);
		const lat2 = this.toRad(la2);
		const lon1 = this.toRad(lo1);
		const lon2 = this.toRad(lo2);

		const R = 6371;
		const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
		const y = (lat2 - lat1);
		return Math.sqrt(x * x + y * y) * R;
	}

	private toRad(deg: number): number {
		return deg * Math.PI / 180;
	}

}
