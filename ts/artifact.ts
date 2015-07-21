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

	setType(kind: string) {
		this._kind = kind;
	}
	
	getType(): string {
		return this._kind;
	}

	setName(name: string) {
		this._name = name;
	}

	getName(): string {
		return this._name;
	}

	setDescription(description: string) {
		this._description = description;
	}

	getDescription(): string {
		return this._description;
	}

	// setPower
	// getPower
}
