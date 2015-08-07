function explodeWithoutDamage(x,y,z,radius) {
px=getPlayerX();
py=getPlayerY();
pz=getPlayerZ();
Entity.setPosition(Player.getEntity(),px,py+1000,pz);
explode(x, y, z, radius);
Entity.setPosition(Player.getEntity(),px,py+0.01,pz);
}
