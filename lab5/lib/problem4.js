function Song(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  
  // Prototype method
  Song.prototype.play = function() {
    console.log("Playing: " + this.title + " by " + this.artist);
  };
  
  let song1 = new Song("คำๆเดียว", "Illslick")
  let song2 = new Song("My moon", "Saran");
  
  song1.play(); 
  song2.play(); 
  