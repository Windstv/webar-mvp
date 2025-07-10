// Инициализация AR-сцены  
AFRAME.registerComponent('marker-handler', {  
  init: function() {  
    const scene = this.el;  

    // Маркер 1: Кубик  
    const marker1 = document.createElement('a-marker');  
    marker1.setAttribute('type', 'pattern');  
    marker1.setAttribute('url', 'assets/markers/pattern-1.patt');  
    marker1.setAttribute('id', 'marker1');  
    
    const box = document.createElement('a-box');  
    box.setAttribute('color', '#4CC3D9');  
    box.setAttribute('position', '0 0.5 0');  
    marker1.appendChild(box);  

    // Маркер 2: 3D-модель  
    const marker2 = document.createElement('a-marker');  
    marker2.setAttribute('type', 'pattern');  
    marker2.setAttribute('url', 'assets/markers/pattern-2.patt');  
    marker2.setAttribute('id', 'marker2');  
    
    const model = document.createElement('a-entity');  
    model.setAttribute('gltf-model', 'url(assets/models/robot.gltf)');  
    model.setAttribute('scale', '0.2 0.2 0.2');  
    marker2.appendChild(model);  

    scene.appendChild(marker1);  
    scene.appendChild(marker2);  

    // Статистика производительности  
    const stats = new Stats();  
    stats.showPanel(0);  
    document.getElementById('stats').appendChild(stats.dom);  
    scene.addEventListener('renderstart', () => {  
      requestAnimationFrame(function loop() {  
        stats.update();  
        requestAnimationFrame(loop);  
      });  
    });  
  }  
});
