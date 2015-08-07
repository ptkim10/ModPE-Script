var count=1;
function modTick() {
 count--;

 if(count==0) {
  a=getCarriedItem();
  b=Player.getCarriedItemData();
  count=2;
 }
 if(a !==getCarriedItem() || b !==Player.getCarriedItemData()) {
  if( getCarriedItem()==264) {
  clientMessage("아앜");
  }
 }
}
