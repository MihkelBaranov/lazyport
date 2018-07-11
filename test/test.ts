import test from "ava";
import { Lazyport } from "../lazyport";
test("nearby airports", (t) => {
	const nearby = new Lazyport().nearby(38.8951, -77.0364, 50);
	t.is(nearby.length, 11);
});

test("search airports", (t) => {
	const results = new Lazyport().search("estonia");
	t.is(results.length, 9);
});