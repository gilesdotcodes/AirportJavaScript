describe('The Airport', function() {

	beforeEach(function() {
		airport = new Airport;
		plane = new Plane;
	});

	it('can have planes', function() {
		expect(airport.planes).toEqual([])
	});

	it('allows planes to land', function() {
		expect(airport.land(plane)).toEqual(plane)
	});

	it('has a plane after it has landed', function() {
		airport.land(plane)
		expect(airport.planes).toEqual([plane])
	});

	it('should know how many planes it has', function() {
		airport.land(plane)
		expect(airport.planes.length).toEqual(1)
	});

	it('allows a plane to takeoff', function() {
		airport.land(plane)
		expect(airport.takeoff(plane)).toEqual(plane)
	});

	it('should know that the plane has taken off', function() {
		airport.land(plane)
		airport.takeoff(plane)
		expect(airport.planes).toEqual([])
	});

	it('should only let a plane takeoff if it is present', function() {
		helicopter = new Plane;
		airport.land(helicopter);
		expect(airport.takeoff(plane)).toEqual(undefined)
	});
});