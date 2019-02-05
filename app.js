window.onload = function() {
  
    var file = document.getElementById("thefile");
    var audio = document.getElementById("audio");
    
    file.onchange = function() {
      var files = this.files;
      audio.src = URL.createObjectURL(files[0]);
      audio.load();
      audio.play();
      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);
      var analyser = context.createAnalyser();
  
      var canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");
  
      src.connect(analyser);
      analyser.connect(context.destination);
  
      analyser.fftSize = 1024;
  
      var bufferLength = analyser.frequencyBinCount;
      console.log(bufferLength);
  
      var dataArray = new Uint8Array(bufferLength);
  
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;
  
      var barWidth = (WIDTH / bufferLength * 4) * 0.4 ;
      var barHeight;
      var x = 0;
  
      function renderFrame() {
        requestAnimationFrame(renderFrame);
  
        x = 0;
        console.log(dataArray);
        
  
        analyser.getByteFrequencyData(dataArray);
  
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = "#FFF";
        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] * 3;     
        //   ctx.clearRect(0, 0, barWidth, barHeight);     
          
          var r = barHeight + (25 * (i/bufferLength));
          var g = 250 * (i/bufferLength * 3);
          var b = 125;
  
          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
          x += barWidth + 0.01;
        //   ctx.strokeStyle = "hsl(" + barHeight + ",100%,50%)";
        //   ctx.lineTo(x, HEIGHT - barHeight);
        }
        // ctx.stroke();
      }
  
      audio.play();
      renderFrame();
    };
  };