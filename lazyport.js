"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Lazyport {
    constructor() {
        this._airports = [];
        this.airports = JSON.parse(fs.readFileSync("./data/airports.json", "utf8"));
    }
    set airports(airports) {
        this._airports = airports;
    }
    get airports() {
        return this._airports;
    }
    nearby(latitude, longitude, radius = 50) {
        return this.airports.filter((airport) => {
            const d = this.distance(latitude, longitude, airport.latitude, airport.longitude);
            airport.distance = d;
            return airport.distance <= radius;
        }).sort((a, b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0));
    }
    search(query) {
        return this.airports.filter((obj) => Object.keys(obj).some((k) => obj[k].toString().toLowerCase().includes(query.toLowerCase())));
    }
    distance(la1, lo1, la2, lo2) {
        const lat1 = this.toRad(la1);
        const lat2 = this.toRad(la2);
        const lon1 = this.toRad(lo1);
        const lon2 = this.toRad(lo2);
        const R = 6371;
        const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
        const y = (lat2 - lat1);
        return Math.sqrt(x * x + y * y) * R;
    }
    toRad(deg) {
        return deg * Math.PI / 180;
    }
}
exports.Lazyport = Lazyport;
