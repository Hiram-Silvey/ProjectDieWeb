/// <reference path="references.ts" />

enum Face {SPAWNx1, MOVEx1, ATKx1, DEFx1, SPEx1, MATx1,
          SPAWNx2, MOVEx2, ATKx2, DEFx2, SPEx2, MATx2,
          SPAWNx3, MOVEx3, ATKx3, DEFx3, SPEx3, MATx3,
          SPAWNx4, MOVEx4, ATKx4, DEFx4, SPEx4, MATx4};
          
class Die{
  
  private _faces: Face[];
  private _artifact: Artifact;
  
  constructor(faces: Face[] = undefined, artifact: Artifact = undefined){
    this._faces = faces;
    this._artifact = artifact;
  }
  
  getFaces(): Face[]{
    return this._faces;
  }
  
  getArtifact(): Artifact{
    return this._artifact;
  }
  
  private randInt(min: number, max: number): number{
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  
  roll(): Face{
    return this._faces[this.randInt(1,6)];
  }
  
  //Todo printDie

}
