var Artifact = (function () {
    //	private _list: Power[];
    function Artifact() {
        this._kind = "Artifact";
        this._name = "";
        this._description = "";
    }
    Artifact.prototype.setType = function (kind) {
        this._kind = kind;
    };
    Artifact.prototype.getType = function () {
        return this._kind;
    };
    Artifact.prototype.setName = function (name) {
        this._name = name;
    };
    Artifact.prototype.getName = function () {
        return this._name;
    };
    Artifact.prototype.setDescription = function (description) {
        this._description = description;
    };
    Artifact.prototype.getDescription = function () {
        return this._description;
    };
    return Artifact;
})();
