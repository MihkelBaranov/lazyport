# Lazyport

### Installation

```Sh
$ npm add lazyport
```

### Usage

#### Find nearby airports
```JS
import { Lazyport } from "lazyport"

const nearby = new Lazyport().nearby(latitude, longitude, radius);

// Results
console.dir([{
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
}])
```

#### Search airports
```JS
import { Lazyport } from "lazyport"

const results = new Lazyport().search("kmi");

// Results
console.dir([{
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
}])
```

### API
|                |Description                    |
|----------------|-------------------------------|
|`nearby(latitude, longitude, radius)`|Find nearby airports based on input coordinates and radius (defaults to 50km)|
|`search(query)`|Search airports by *name*, *city*, *country*, *iata*, *icao* |
