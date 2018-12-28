let Plane = function(x,y){
    // A mesh is created from the geometry and material, then added to the scene
    this.groundTexture = new THREE.TextureLoader().load('img/grasslight-big.jpg');
    this.groundTexture.wrapS = this.groundTexture.wrapT = THREE.RepeatWrapping;
    this.groundTexture.repeat.set(32, 32);
    this.groundTexture.anisotropy = 16;
    this.object = new THREE.Mesh(
        new THREE.PlaneGeometry(x,y),
        new THREE.MeshPhongMaterial({
            map : this.groundTexture,
        })
    );
    this.object.rotateX(-Math.PI / 2);
    this.object.receiveShadow = true;
    this.object.castShadow = true;
}
let Wall = function(x,y,z){
    this.Geometry = new THREE.BoxGeometry(x,y,z);
    let texture1 = new THREE.TextureLoader().load('img/footballwall.jpg');
    texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;
    texture1.repeat.set(15,1);
    texture1.anisotropy = 16;
    let texture2 = new THREE.TextureLoader().load('img/footballwall.jpg');
    texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
    texture2.repeat.set(8,1);
    texture2.anisotropy = 16;
    let material1 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide});
    let material2 = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0});
    let material3 = new THREE.MeshBasicMaterial({ map: texture2, side: THREE.DoubleSide});
    this.Material =
        [
            material3,// left
            material3,// right
            material2,// top
            material2,// bootom
            material1,// front
            material2 // back
        ]

    this.object = new THREE.Mesh(this.Geometry,this.Material);
    this.object.receiveShadow = true;
//            this.object.castShadow = true;
    this.object.position.y = y/2;
    this.object.position.y -=25;
}
let Fence = function(x,y,z){
    this.Geometry = new THREE.BoxGeometry(x,y,z);
    this.Material = new THREE.MeshStandardMaterial({
        opacity: 0.3,
        transparent: true,
        color: 0x0097e6,
        side: THREE.DoublesSide
    });
    this.object = new THREE.Mesh(this.Geometry,this.Material);
    this.object.castShadow = true;
    this.object.position.y = 0;
    this.object.position.z = -900.0;

}
