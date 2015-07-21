/// <reference path="references.ts" />

class Platform extends VisibleClass implements VisibleInterface {

	private _owner: Core;
	private _occupant: Artifact;

	constructor(row: number, col: number, owner: Core, occupant: Artifact = null) {
		super(row, col);
		this._owner = owner;
		this._occupant = occupant;
	}

	setOwner(owner: Core) {
		this._owner = owner;
	}
	
	getOwner(): Core {
		return this._owner;
	}

	setOccupant(occupant: Artifact) {
		this._occupant = occupant;
	}

	getOccupant(): Artifact {
		return this._occupant;
	}

}
