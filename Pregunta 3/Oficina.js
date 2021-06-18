//==========================
var clock = new THREE.Clock();
//preparar el render
//Render
var Render = new THREE.WebGLRenderer();
//Eseceanrio
var Escenario = new THREE.Scene();
//Figura
var Particula;

var controls;
var ancho = window.innerWidth;
var alto = window.innerHeight;
var angulo = 45;
var aspecto = ancho/alto;
var cerca = 0.001;
var lejos = 10000;

//Camara
var Camara = new THREE.PerspectiveCamera(angulo,aspecto,cerca,lejos);
var ambientLight = new THREE.AmbientLight( 0x111111 );
//THREEx.WindowResize(Render,Camara);

/******************************Funciones*****************************/

try {
    inicio();
    animation();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}

/********************************** Inicio **************************/

function inicio(){
    Render.setSize(ancho,alto);
    document.getElementById('container').appendChild(Render.domElement);
    Camara.position.z = 120;
    Camara.position.y = 100;
    Escenario.add(Camara);
    //crear_plano();
    cargar_suelo();
    cargar_pared();
    cargar_gaveta();
    cargar_escritorio();
    
    
    Escenario.add(ambientLight);
    controls = new THREE.OrbitControls(Camara,Render.domElement);

}
function cargar_suelo(){
    Geometria_piso = new THREE.PlaneGeometry(100,100,10,10);
    textura_piso = THREE.ImageUtils.loadTexture('textures/piso.jpg');
    //textura_piso.wrapS = textura_piso.wrapT = THREE.RepeatWrapping;    
    //textura.repeat.set(1,1);

    Material_piso = new THREE.MeshBasicMaterial({map:textura_piso, side:THREE.DoubleSide});
    Terrirotio_piso = new THREE.Mesh(Geometria_piso,Material_piso);
    // Terrirotio_piso.rotation.y = 0.5;
    Terrirotio_piso.rotation.x = Math.PI/2;
    Escenario.add(Terrirotio_piso);
}
function cargar_pared(){
    //adelante - derecha
    Geometria = new THREE.PlaneGeometry(100,20);
    textura = new THREE.ImageUtils.loadTexture('textures/pared.jpg');
    Material = new THREE.MeshBasicMaterial({map: textura, side: THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);  
    Terrirotio.position.set(0, 10, 50);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(50, 10, 0);
    Escenario.add(Terrirotio);
    //atras - izquierda
    Geometria = new THREE.PlaneGeometry(80,20);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(10, 10, -50);
    Escenario.add(Terrirotio);
    Geometria = new THREE.PlaneGeometry(70,20);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(-50, 10, 15);
    Escenario.add(Terrirotio);

    //arriba bloque
    Geometria = new THREE.PlaneGeometry(30,20);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(-45, 10, -50);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(-45, 10, -20);
    Escenario.add(Terrirotio);
    Geometria = new THREE.PlaneGeometry(30,20);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(-30, 10, -35);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(-60, 10, -35);
    Escenario.add(Terrirotio);

    //pared interna
    Geometria = new THREE.PlaneGeometry(80,20);
    textura = new THREE.ImageUtils.loadTexture('textures/pared2.jpg');
    Material = new THREE.MeshBasicMaterial({map: textura, side: THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);  
    Terrirotio.position.set(10, 10, -20);
    Escenario.add(Terrirotio);
    Geometria = new THREE.PlaneGeometry(70,20);
    Terrirotio = new THREE.Mesh(Geometria,Material);  
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(10, 10, 15);
    Escenario.add(Terrirotio);
    Geometria = new THREE.PlaneGeometry(50,20);
    Terrirotio = new THREE.Mesh(Geometria,Material);  
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(-30, 10, 25);
    Escenario.add(Terrirotio);
    Geometria = new THREE.PlaneGeometry(20,20);
    Terrirotio = new THREE.Mesh(Geometria,Material);  
    Terrirotio.position.set(-40, 10, 0);
    Escenario.add(Terrirotio);

    //puerta
    Geometria = new THREE.BoxGeometry( 10, 18, 2 );
    textura = new THREE.ImageUtils.loadTexture('textures/puertaOf.jpg');
    textura.wrapS = textura.wrapT = THREE.RepeatWrapping;    
    //textura.repeat.set(2,2);
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    // Terrirotio_piso.rotation.y = 0.5;
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(10, 10, -5);
    Escenario.add(Terrirotio);

    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(-30, 10, 10);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    //Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(-20, 10, -20);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(-50, 10, -10);
    Escenario.add(Terrirotio);

}
function cargar_gaveta(){
    Geometria = new THREE.BoxGeometry(10,14,0.2);
    textura = new THREE.ImageUtils.loadTexture('textures/gaveta.jpg');
    textura.wrapS = textura.wrapT = THREE.RepeatWrapping;    
    //textura.repeat.set(1,1);
    Material = new THREE.MeshBasicMaterial({map:textura});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = -Math.PI/2;
    Terrirotio.position.set(39.8, 7, 20);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = -Math.PI/2;
    Terrirotio.position.set(-0.2, 7, 45);
    Escenario.add(Terrirotio);

    //gaveta
    Geometria = new THREE.BoxGeometry( 10, 14,10);
    //textura = new THREE.ImageUtils.loadTexture('textures/tarima.jpg');
    textura.wrapS = textura.wrapT = THREE.RepeatWrapping;    
    Material = new THREE.MeshBasicMaterial({color:0xBDBDBD, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(45, 7, 20);
    Escenario.add(Terrirotio);
       
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(5, 7, 45);
    Escenario.add(Terrirotio);
}
function cargar_escritorio(){
    escritorio(30,0,-5);  

    escritorio(-10,0,25);
    x=-10;
    z=-40;
    Geometria = new THREE.BoxGeometry( 30, 2, 10);
    textura = new THREE.ImageUtils.loadTexture('textures/escritorio.jpg');
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+0, 10, z+0);
    Escenario.add(Terrirotio);
    Geometria = new THREE.BoxGeometry( 1, 10, 1);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+14, 5, z+4);
    Escenario.add(Terrirotio);

    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+14, 5, z+-4);
    Escenario.add(Terrirotio);
    
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+-14, 5, z+4);
    Escenario.add(Terrirotio);
  
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+-14, 5, z+-4);
    Escenario.add(Terrirotio);

    Geometria = new THREE.PlaneGeometry(28,7);
    textura = new THREE.ImageUtils.loadTexture('textures/textura.jpg');
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material); 
    //Terrirotio.rotation.y = Math.PI/2; 
    Terrirotio.position.set(x+-0, 5.5, z+4);
    Escenario.add(Terrirotio);

    Geometria = new THREE.PlaneGeometry(8,7);
    Terrirotio = new THREE.Mesh(Geometria,Material); 
    Terrirotio.rotation.y = Math.PI/2; 
    Terrirotio.position.set(x+-14, 5.5, z);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material); 
    Terrirotio.rotation.y = Math.PI/2; 
    Terrirotio.position.set(x+14, 5.5, z);
    Escenario.add(Terrirotio);
    silla2(-15,0,-30,1);    
    silla2(-5,0,-30,1);
    silla2(-10,0,45,-1);

    //espera
    silla2(-45,0,-3,1);    
    silla2(-35,0,-3,1);
}
function escritorio(x,y,z){
    Geometria = new THREE.BoxGeometry( 30, 2, 10);
    textura = new THREE.ImageUtils.loadTexture('textures/escritorio.jpg');
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(x+0, y+10, z+0);
    Escenario.add(Terrirotio);
    //patas
    Geometria = new THREE.BoxGeometry( 1, 10, 1);
    textura = new THREE.ImageUtils.loadTexture('textures/textura.jpg');
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+4, y+5,z+ 14);
    Escenario.add(Terrirotio);

    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+4, y+5, z+-14);
    Escenario.add(Terrirotio);
    
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+-4, y+5, z+14);
    Escenario.add(Terrirotio);
  
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+-4, 5, z+-14);
    Escenario.add(Terrirotio);
    //laterales
    Geometria = new THREE.BoxGeometry( 8, 6, 10);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x, y+6 ,z+-8.5);
    Escenario.add(Terrirotio);
    
    Geometria = new THREE.PlaneGeometry(28,7);
    textura = new THREE.ImageUtils.loadTexture('textures/textura.jpg');
    Terrirotio = new THREE.Mesh(Geometria,Material); 
    Terrirotio.rotation.y = Math.PI/2; 
    Terrirotio.position.set(x+-4.5, y+5.5, z);
    Escenario.add(Terrirotio);
    Geometria = new THREE.PlaneGeometry(8,7);
    Terrirotio = new THREE.Mesh(Geometria,Material); 
    //Terrirotio.rotation.y = Math.PI/2; 
    Terrirotio.position.set(x, y+5.5, z+14);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);  
    Terrirotio.position.set(x, y+5.5, z-14);
    Escenario.add(Terrirotio);

    Geometria = new THREE.PlaneGeometry(10,6);
    textura = new THREE.ImageUtils.loadTexture('textures/caja.jpg');
    Material = new THREE.MeshBasicMaterial({map:textura});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2; 
    Terrirotio.position.set(x+4.5, y+6,z-8.5);
    Escenario.add(Terrirotio);
    silla(x+10,y,z,1);
}
function silla(x,y,z,w){
    Geometria = new THREE.BoxGeometry( 0.5, 10, 0.5);
    textura = new THREE.ImageUtils.loadTexture('textures/metalico.jpg');
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);   
    Terrirotio.position.set((x+2)*w, y+5,(z+3.5));
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set((x+2)*w, y+5, (z-3.5));
    Escenario.add(Terrirotio);

    Geometria = new THREE.BoxGeometry( 0.5, 5, 0.5);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set((x+-2)*w, y+2.5, (z+-3.5));
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set((x+-2)*w, y+2.5, (z+3.5));
    Escenario.add(Terrirotio);

    Geometria = new THREE.BoxGeometry( 7, 0.5, 4);
    //textura = new THREE.ImageUtils.loadTexture('textures/metalico.jpg');
    Material = new THREE.MeshBasicMaterial({color:0x222222, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material); 
    Terrirotio.rotation.y = Math.PI/2;  
    Terrirotio.position.set(x*w, y+5,z);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.x = Math.PI/2;
    Terrirotio.rotation.z = Math.PI/2;
    Terrirotio.position.set((x+2)*w, y+8, (z));
    Escenario.add(Terrirotio);

}
function silla2(x,y,z,w){
    Geometria = new THREE.BoxGeometry( 0.5, 10, 0.5);
    textura = new THREE.ImageUtils.loadTexture('textures/metalico.jpg');
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);   
    Terrirotio.position.set(x+3.5, y+5,(z+2) *w);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+-3.5, y+5, (z+2)*w);
    Escenario.add(Terrirotio);

    Geometria = new THREE.BoxGeometry( 0.5, 5, 0.5);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+3.5, y+2.5, (z+-2)*w);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+-3.5, y+2.5, (z+-2)*w);
    Escenario.add(Terrirotio);

    Geometria = new THREE.BoxGeometry( 7, 0.5, 4);
    //textura = new THREE.ImageUtils.loadTexture('textures/metalico.jpg');
    Material = new THREE.MeshBasicMaterial({color:0x222222, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);   
    Terrirotio.position.set(x, y+5,z*w);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.x = Math.PI/2;
    Terrirotio.position.set(x, y+9, (z+2)*w);
    Escenario.add(Terrirotio);

}
function cargar_modelo(){
    //Geometria
    Geometria = new THREE.Geometry();
    // vector = new THREE.Vector3(2,7,0);
    // Geometria.vertices.push(vector);
    var vertices =[ [2,7,0],
                    [7,2,0],
                    [12,7,0],
                    [12,17,0],
                    [7,12,0],
                    [2,17,0],
                    [2,7,0],
                ];
    var array_extrude=[];
    for(i = 0;i<vertices.length;i++){
        Geometria.vertices.push(new THREE.Vector3( vertices[i][0], vertices[i][1], vertices[i][2] ));
        array_extrude.push(new THREE.Vector3( vertices[i][0], vertices[i][1], vertices[i][2] ));

    } 
    var forma = new THREE.Shape(array_extrude);
    var datos={
        amount:10,
        bevelEnabled:false,
        bevelSegments:1,
        steps:10,
        bevelThickness:100
    };
    var extrude = new THREE.ExtrudeGeometry(forma,datos);
    //=====
    textura_plano = new THREE.ImageUtils.loadTexture('textures/cesped.jpg');
    //textura_plano.repeat.set(0.06,0.06);
    textura_plano.wrapS = textura_plano.wrapT = THREE.RepeatWrapping;

   
    var Material_plano2 = new THREE.MeshBasicMaterial({map:textura_plano, side:THREE.DoubleSide, wireframe:false});
    //====
    //malla
    var malla = new THREE.Mesh(extrude,Material_plano2);
    
    var Material = new THREE.ParticleBasicMaterial({color:0xFF0000});
    Particula = new THREE.Line(Geometria,Material); 
    //========================
    
    var cubeGeometry = new THREE.BoxGeometry( 10, 8, 100 );
	
    var crateTexture = new THREE.ImageUtils.loadTexture('textures/cesped.jpg');  
    //crateTexture.repeat.set( 2, 2 );
    crateTexture.wrapS = crateTexture.wrapT = THREE.RepeatWrapping;


	var crateMaterial = new THREE.MeshBasicMaterial( { map: crateTexture, side:THREE.DoubleSide } );
	var crate = new THREE.Mesh( cubeGeometry, crateMaterial );
	//crate.position.set(60, 50, -100);

	Escenario.add( crate );
    Escenario.add(Particula);
    Escenario.add(malla);
       
}

function animation(){
    requestAnimationFrame(animation);
    render_modelo();
}
function render_modelo(){
    var delta = clock.getDelta();
	controls.update(delta);
    //Particula.rotation.y = Particula.rotation.y + 0.01;
    Render.render(Escenario,Camara);
}