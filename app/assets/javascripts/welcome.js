

function settings_clicked(){
    navbar = $("#navbar");
    
    console.log(navbar.position().left)
    if(navbar.position().left == 0){
         $("#navbar").animate({left:"-130px"},250);
         navbar.open = false;
    }
       
    else{
        navbar.open = true;
        $("#navbar").animate({left:"0px"},250);
    }
        
    return false;
}


function render_setup() {
    container = document.getElementById( 'canvas_div' );
    //document.body.appendChild( container );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( 500, 500 );
    renderer.setClearColorHex( 0xffffff, 1 );
    container.appendChild( renderer.domElement );
	var scene = new THREE.Scene(); 
	var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100); 
  
	var geometry = new THREE.BoxGeometry(3,3,3); 
	var material = new THREE.MeshBasicMaterial({color: 0x3796A4}); 
	var cube = new THREE.Mesh(geometry, material); 
	scene.add(cube); 
	camera.position.z = 5; 
	var render = function () { 
	    requestAnimationFrame(render); 
	    cube.rotation.x += 0.03; 
	    cube.rotation.y += 0.03; 
	    renderer.render(scene, camera); }; 
	    render();
    }




$(document).ready(function(){
    navbar = $("#navbar");
    navbar.open = false;
    $("#settings_button").click(settings_clicked);
    
    render_setup();
});



