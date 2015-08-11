// Team AdS :
// Manu example

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var openWindow = null;
var mainWindow = null;

function dip2px(ctx, dips)
{
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel()
{
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function()
{
try
{
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(android.widget.LinearLayout.VERTICAL);

var st = new android.widget.Button(ctx);
st.setText("Name");
st.setOnClickListener(new android.view.View.OnClickListener()
{
onClick: function(v)
{
menu();
}
});
layout.addView(st);


openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 100), dip2px(ctx, 50));
openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 0);
}
catch(err)
{
print(err);
}
}
}));
}
function leaveGame()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function()
{
if(openWindow != null)
{
openWindow.dismiss();
openWindow = null;
}
if(mainWindow != null)
{
mainWindow.dismiss();
mainWindow = null;
}
}
}));
}

function menu()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
try
{

var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);

var A_title = new android.widget.TextView(ctx);
A_title.setTextSize(20);
layout.addView(A_title);
A_title.setText("Title");

mainWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
mainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
mainWindow.setOutsideTouchable(false);
mainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
}catch(err){
print(+err);
}
}
