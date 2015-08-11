try {
var file = new java.io.File(Path);
if(!file.exists())
file.mkdir();   //or file.mkdirs ();
}
catch(error) {
print("error : " + error);
}
