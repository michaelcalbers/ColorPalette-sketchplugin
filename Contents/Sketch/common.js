//***
//
// Throw up a standard alert dialog box.
//
//***
function alert(title, message){
  var app = [NSApplication sharedApplication];
  [app displayDialog:message withTitle:title];
}

//***
//
// Given a R & G & B, generate a hex color value.
//
//***
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

//***
//
// Remove the file extension from a provided document name.
//
//***
function removeFileExtension(layerName){
	if([layerName containsString:@"."]){
		var nameArray = [layerName componentsSeparatedByString:@"."];
		var name = nameArray[0];
		return name;
	}else{
		return layerName;
	}
}