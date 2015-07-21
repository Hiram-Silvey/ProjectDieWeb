class Artifact {
	private _kind: string;
	private _name: string;
	private _description: string;
//	private _list: Power[];
	
	constructor() {
		this._kind = "Artifact";
		this._name = "";
		this._description = "";
	}

	set kind(kind: string) {
		this._kind = kind;
	}
	
	get kind(): string {
		return this._kind;
	}

	set name(name: string) {
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	set description(description: string) {
		this._description = description;
	}

	get description(): string {
		return this._description;
	}

	// setPower
	// getPower
}
