function Airport() {
	this.planes=[];
}

function Plane() {}

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
	return plane;
};

Airport.prototype.takeoff = function(plane) {
	if(this.planes.indexOf(plane) !== -1) {
		return this.planes.splice(this.planes.indexOf(plane), 1)[0]
	}
	};