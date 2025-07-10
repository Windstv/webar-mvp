AFRAME.registerComponent('ar-model-loader', {
    init: function() {
        const scene = this.el;

        // Маркер HIRO (встроенный)
        const markerHiro = document.createElement('a-marker');
        markerHiro.setAttribute('preset', 'hiro'); // Используем встроенный маркер
        markerHiro.setAttribute('id', 'marker-hiro');
        
        const robot = document.createElement('a-entity');
        robot.setAttribute('geometry', 'primitive: cylinder; radius: 0.5; height: 1');
        robot.setAttribute('material', 'color: #FF5733; metalness: 0.8; roughness: 0.2');
        robot.setAttribute('position', '0 0.5 0');
        robot.setAttribute('rotation', '0 180 0');
        robot.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 3000');
        markerHiro.appendChild(robot);

        // Маркер KANJI (встроенный)
        const markerKanji = document.createElement('a-marker');
        markerKanji.setAttribute('preset', 'kanji'); // Используем встроенный маркер
        markerKanji.setAttribute('id', 'marker-kanji');
        
        const box = document.createElement('a-box');
        box.setAttribute('color', '#4CC3D9');
        box.setAttribute('position', '0 0.5 0');
        box.setAttribute('scale', '0.5 0.5 0.5');
        box.setAttribute('animation', 'property: position; to: 0 1 0; dir: alternate; loop: true; dur: 2000');
        markerKanji.appendChild(box);

        scene.appendChild(markerHiro);
        scene.appendChild(markerKanji);

        // ... остальной код без изменений ...
    }
});
