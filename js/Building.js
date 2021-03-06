let Building = function(X,Y,type,lv=0){
    this.yield=0;
    if(type=="hotel"){
        X-=150;
        Y-=140;
        this.yield=oilValue*Math.pow(2,lv-1);
    }else if(type=="oil"){
        this.yield=100*Math.pow(2,lv-1);
    }else if(type=="house"){
        this.yield=5+lv*5;

    }
    this.x=X;
    this.y=Y;
    this.type=type;
    let name=type;
    if(lv!=0){
        name+=lv;
    }
    this.sprite=game.add.sprite(X, Y, name);
    this.sprite.inputEnabled = true;
    this.lv=lv;
    
    this.popText = game.add.text(0, 0, '0', {
        font: '48px Arial Black',
        fill: '#fff',
        strokeThickness: 20
    });
    this.popText.exists = false;
    this.popText.tween = game.add.tween(this.popText)
        .to({
            alpha: 0,
            y: this.sprite.centerY-250,
            x: this.sprite.centerX+100
        }, 1200, Phaser.Easing.Cubic.Out);
};

Building.prototype.yieldMoney=function(){
    if(this.yield==0)return;
    if (this.popText) {
        this.popText.text = "+"+this.yield;
        this.popText.reset(this.sprite.centerX+100, this.sprite.centerY-150);
        this.popText.alpha = 1;
        this.popText.tween.start();
    }
    money+=this.yield;
    netWorth+=this.yield;
};
Building.prototype.upgradable=function(){
    return this.lv>0 && this.lv<3;
};
