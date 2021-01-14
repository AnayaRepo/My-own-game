class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton("Reset");
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/3.3, displayHeight/8 - 100);
      this.title.style('font-size', '70px');
      this.title.style('color', '#f20095');
  
      this.input.position(displayWidth/2-100 , displayHeight/2 -125);
      this.input.style('width', '200px');
      this.input.style('height', '20px');
      this.input.style('background', '#82f7ff');


      this.button.position(displayWidth/2 - 95, displayHeight/2-50);
      this.button.style('width', '200px');
      this.button.style('height', '40px');
      this.button.style('background', '#7eddfc');

      this.reset.position(displayWidth/2+500, 20);
      this.reset.style('width', '100px');
      this.reset.style('height', '30px');
      this.reset.style('background', '#ff82cf');

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Hello " + player.name);
        this.greeting.position(displayWidth/3.2, displayHeight/5);
        this.greeting.style('color', '#ff4772');
        this.greeting.style('font-size', '100px');
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        database.ref("players/").remove();
      });
    }
  }
  