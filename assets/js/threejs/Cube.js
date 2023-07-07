import * as THREE from 'three'



class Cube {
  constructor({width,height,cubeColor,lineColor,position}) {
    this.width = width;
    this.height = height;
    this.cubeColor = cubeColor;
    this.position = position;
    this.lineColor = lineColor
  }
  start() {
    const cubeGeometry = new THREE.BoxGeometry(this.width, this.height, this.width, this.height);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: this.cubeColor,
    });
    
    const edges = new THREE.EdgesGeometry( cubeGeometry ); 
    
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { 
      color: this.lineColor,
      linewidth: 5,
    } ) ); 
    
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    
    cube.position.x = this.position.x;
    cube.position.y = this.position.y;
    cube.position.z = this.position.z;
    
    cube.add(line)

    return cube;
  };
}

export default Cube;