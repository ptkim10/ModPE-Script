var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function newLevel(){
ctx.runOnUiThread( new java.lang.Runnable( {
    run: function(){
        try{
            Progress = new android.widget.SeekBar(ctx);
            Progress.setMax(20);
            Progress.setProgress(20);
            Progress.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch : function(viewarg){
                   
                   //to do
                   
                    return false;
                }
            }));
            ProgressWindow = new android.widget.PopupWindow(Progress, 500, 50, false);
            ProgressWindow.showAtLocation( ctx.getWindow().getDecorView(),  android.view.Gravity.LEFT | android.view.Gravity.TOP,  0,  0 );
            }
        catch( error ){
            print( "" + error );
            }
        }
    }));
}

function leaveGame(){
ctx.runOnUiThread( new java.lang.Runnable( {
    run: function(){
        try{
            ProgressWindow.dismiss();
            }
        catch( error ){
            print( "error : " + error );
            }
        }
    }));
}
