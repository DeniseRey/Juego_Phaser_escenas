// Clase Boton, para no repetir tanto codigo
class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ 
                backgroundColor: '#FFE858', 
                fontSize: '50px', 
                fill: '#A31C3F', 
                fontFamily: 'Cambria',
                borderRadius: '20%',
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#FC58ED' }))
            .on('pointerout', () => button.setStyle({ fill: '#A31C3F' }));
    }
}

export default Button;