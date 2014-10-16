function Airport() {
	this.planes=[];
}

function Plane() {}

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
	return plane;
};

Airport.prototype.takeoff = function(plane) {
	if(this._isLanded(plane)) {
		return this._clearToTakeOff(plane);
	}
};

Airport.prototype._clearToTakeOff = function(plane) {
	return this._clearManyPlanesToTakeOff((plane), 1)[0];
};

Airport.prototype._clearManyPlanesToTakeOff = function(plane, numberOfPlanes) {
	return this.planes.splice(this._findLocationOf(plane), numberOfPlanes);
};

Airport.prototype._isLanded = function(plane) {
	return this._findLocationOf(plane) !== -1
};

Airport.prototype._findLocationOf = function(plane) {
	return this.planes.indexOf(plane);
};

Airport.prototype.isFull = function(){
	return this.planes.length === 40;
};