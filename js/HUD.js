
let HUD=function() {
    this.year = 1898;
    this.month = 0;
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.moneyInfo = game.add.text(2000, 15, 'Money: 0', { font: "48px Arial", fill: '#ffffff' });
    this.PopuInfo = game.add.text(2000, 65, 'Population: 0', { font: "48px Arial", fill: '#ffffff' });
    this.timeInfo = game.add.text(1100, 15, '0', { font: "96px Arial", fill: '#ffffff' });
    this.moneyInfo.fixedToCamera = true;
    this.PopuInfo.fixedToCamera = true;
    this.timeInfo.fixedToCamera = true;
};
HUD.prototype.updateTime=function(time){
    this.timeInfo.text=String(this.months[this.month] + " " + this.year);
    this.month++;
    if(this.month ==12){
        this.month = 0;
        this.year ++;
    }
}
HUD.prototype.updateHud=function(money,population,Tpopulation){
    this.moneyInfo.text='Money: '+String(money);
    this.PopuInfo.text='Population: '+String(Tpopulation-population)+"/"+String(Tpopulation);
    // console.log("updated"+money);
};
