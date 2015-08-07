function viewGIF(ctx) {
try {
ctx.runOnUiThread(new java.lang.Runnable({
run:function() {
var wv=new android.webkit.WebView(ctx);
wv.loadUrl(/*URL of PICTURE*/);
var alertDlg = new android.app.AlertDialog.Builder(ctx);
alertDlg.setView(vv);
var dialog = alertDlg.create();
var wn = new android.view.WindowManager.LayoutParams();
wn.copyFrom(dialog.getWindow().getAttributes());
wn.width = ctx.getWindowManager().getDefaultDisplay().getWidth();
wn.height = ctx.getWindowManager().getDefaultDisplay().getHeight();
dialog.show();
var window = dialog.getWindow();
        }
    }));
}
catch(err) {
print(err);
}
}

viewGIF(com.mojang.minecraftpe.MainActivity.currentMainActivity.get());
