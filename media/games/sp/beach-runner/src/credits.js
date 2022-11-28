var creditsState = {
    create: function() {
        background = new Background(game);
        background.create();
        this.returnButton = game.add.button(64, 64, 'back_button', this.goToMenu, this);

        this.creator = game.add.text(game.world.centerX, 200, 'Code, art & sounds by:', {
            fill: '#424242'
        });
        this.creator.anchor.setTo(0.5, 0.5);

        this.creatorName1 = game.add.text(game.world.centerX, 230, 'Shivam Singh', {
            fill: '#fff',
            fontSize: 48
        });
        this.creatorName1.anchor.setTo(0.5, 0.5);
        
        this.creatorName2 = game.add.text(game.world.centerX, 270, 'Raghav Sharma', {
            fill: '#fff',
            fontSize: 48
        });
        this.creatorName2.anchor.setTo(0.5, 0.5);
       
        this.creatorName3 = game.add.text(game.world.centerX, 310, 'Shashank Mingwal', {
            fill: '#fff',
            fontSize: 48
        });
        this.creatorName3.anchor.setTo(0.5, 0.5);

    },

    goToMenu: function() {
        game.state.start('menu');
    }
};