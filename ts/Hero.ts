class Hero extends Artifact {
	
	private _life: number;
	private _strength: number;
	private _guard: number;

	private _canAttack: boolean;
	private _canMove: boolean;

	constructor() {
		super.setType("Hero");
		super.setName("");
		super.setDescription("");
		this._life = 0;
		this._strength = 0;
		this._guard = 0;

		this._canAttack = true;
		this._canMove = true;
	}

	setLife(life: number) {
		this._life = life;
	}
	
	getLife(): number {
		return this._life;
	}

	setStrength(strength: number) {
		this._strength = strength;
	}

	getStrength(): number {
		return this._strength;
	}

	setGuard(guard: number) {
		this._guard = guard;
	}

	getGuard(): number {
		return this._guard;
	}

	setCanAttack(canAttack: boolean) {
		this._canAttack = canAttack;
	}

	getCanAttack(): boolean {
		return this._canAttack;
	}

	setCanMove(canMove: boolean) {
		this._canMove = canMove;
	}

	getCanMove(): boolean {
		return this._canMove;
	}

}
