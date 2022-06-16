// Clase Preloads, para separar los preloads y tener mejor orden
export class Preloads extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    
    this.load.image(
      "mainmenu_bg",
      "public/assets/tilemaps/fondo3.png"
    );
    this.load.image("sky", "public/assets/images/sky.png");
    this.load.image("manzana", "public/assets/tilemaps/manzana 1.png");
    this.load.image("manzana1", "public/assets/tilemaps/manzana 2.png");
    this.load.image("manzana2", "public/assets/tilemaps/manzana 3.png");
    this.load.image("manzana3", "public/assets/tilemaps/manzana 4.png");
    this.load.spritesheet("dude", "public/assets/images/sprite.png", {
      frameWidth: 32,
      frameHeight: 38,
    });
    this.load.image("win", "public/assets/images/win.png")
    this.load.image("lose", "public/assets/images/f.png")
    this.load.image("principal", "public/assets/images/principal.png")
    this.load.audio("bite", "public/assets/audio/bite.mp3")
    this.load.audio("jump", "public/assets/audio/jump.mp3")
  }

  create() {
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}
