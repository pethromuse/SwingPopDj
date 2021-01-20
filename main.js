let audio = document.getElementById('musicPlayer');
            let track1 = document.getElementById('track1');
            let track2 = document.getElementById('track2');
            let track3 = document.getElementById('track3');
            let track4 = document.getElementById('track4');
            let track5 = document.getElementById('track5');
            let track6 = document.getElementById('track6');
            let track7 = document.getElementById('track7');
            let track8 = document.getElementById('track8');
            let track9 = document.getElementById('track9');
            let track10 = document.getElementById('track10');
            track1.onclick = function(){
                audio.currentTime = 0;
                audio.play();
            };
            track2.onclick = function(){
                audio.currentTime = 239;
                audio.play();
            };
            track3.onclick = function(){
                audio.currentTime = 421;//239+182.5
                audio.play();
            };
            track4.onclick = function(){
                audio.currentTime = 633;//421+212
                audio.play();
            };
            track5.onclick = function(){
                audio.currentTime = 783;//633+150
                audio.play();
            };
            track6.onclick = function(){
                audio.currentTime = 960;//783+177
                audio.play();
            };
            track7.onclick = function(){
                audio.currentTime = 1092;//960+132
                audio.play();
            };
            track8.onclick = function(){
                audio.currentTime = 1238;//1092+146
                audio.play();
            };
            track9.onclick = function(){
                audio.currentTime = 1404;//1238+166
                audio.play();
            };
            track10.onclick = function(){
                audio.currentTime = 1632;//1404+228
                audio.play();
            };