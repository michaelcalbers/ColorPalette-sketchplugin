@import 'common.js'

var onRun = function(context) {
  // reference the sketch document
//  var sketch = context.api();
//  var doc = sketch.selectedDocument;
//  var doc = context.document;
//  var selection = context.selection;
  
  //*** let the user specify where to put the XML file
  // setup a variable... allow xml to be written to the folder
  // var fileTypes = [NSArray arrayWithObjects:@"json", nil]; // --> resulted in "ObjC method arrayWithObjects: requires 1 argument, but JavaScript passed 2 arguments"
//  var fileTypes = ["json"];
    
  // create a folder/directory chooser window
//  var panel = [NSOpenPanel openPanel];
//  [panel setCanChooseDirectories:true];
//  [panel setCanCreateDirectories:true];
//  [panel setAllowedFileTypes:fileTypes];
    
  // create variable to check what button was selected/clicked
//  var clicked = [panel runModal];
  // check if clicked
//  if (clicked == NSFileHandlingPanelOKButton) {
     
//    var isDirectory = true;
    // get the folder path
//    var firstURL = [[panel URLs] objectAtIndex:0];
    // format it to a string
//    var file_path = [NSString stringWithFormat:@"%@", firstURL];
    
    // remove the 'file://'' path from string
//    if (0 === file_path.indexOf("file://")) {
//      file_path = file_path.substring(7);
//   }
//  }
};

// The heavy-lifting to create the JSON data and JSON file
//function exportJSON(layer, file_path){

  // initialize the layer array
//  var layerArray = [];

  // create the variables
//  var layerName = String(layer.name());
//  var layerFrame = layer.absoluteRect();
//  var layerXpos = String(layerFrame.x());
//  var layerYpos = String(layerFrame.y());
//  var layerHeight = String(layerFrame.height());
//  var layerWidth = String(layerFrame.width());

  // add the strings to the array
//  layerArray.push({
//      name: layerName,
//      xPos: layerXpos,
//      yPos: layerYpos,
//      height: layerHeight,
//      width: layerWidth,
//  });
  
  // Create the JSON object from the layer array
//  var jsonObj = { "layer": layerArray };
  // Convert the object to a json string
//  var file = NSString.stringWithString(JSON.stringify(jsonObj, null, "\t"));
  // Save the file
//  [file writeToFile:file_path+layerName+".json" atomically:true encoding:NSUTF8StringEncoding error:null];

//  var alertMessage = layerName+".json saved to: " + file_path;
//  alert("Layer JSON Exported!", alertMessage);
//}