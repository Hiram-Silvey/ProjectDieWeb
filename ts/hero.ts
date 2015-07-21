class Hero extends Artifact {
	
	_life: number;
	_strength: number;
	_guard: number;

	_canAttack: boolean;
	_canMove: boolean;

	constructor() {
		super();
		super.kind = "Hero";
		this._life = 0;
		this._strength = 0;
		this._guard = 0;

		this._canAttack = true;
		this._canMove = true;
	}

	set life(life: number) {
		this._life = life;
	}
	
	get life(): number {
		return this._life;
	}

	set strength(strength: number) {
		this._strength = strength;
	}

	get strength(): number {
		return this._strength;
	}

	set guard(guard: number) {
		this._guard = guard;
	}

	get guard(): number {
		return this._guard;
	}

	set canAttack(canAttack: boolean) {
		this._canAttack = canAttack;
	}

	get canAttack(): boolean {
		return this._canAttack;
	}

	set canMove(canMove: boolean) {
		this._canMove = canMove;
	}

	get canMove(): boolean {
		return this._canMove;
	}

}
