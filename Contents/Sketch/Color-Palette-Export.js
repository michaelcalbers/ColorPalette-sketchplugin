@import 'common.js'

var onRun = function(context) {
  // reference the sketch document
  var sketch = context.api();
  var doc = sketch.selectedDocument;
  //log("Selected Document: " + doc);

  //get the name of the document and remove the file extension if there is one
  var documentName = removeFileExtension(doc.sketchObject.displayName());
  //log("Document Name: " + documentName);

  //reference the shared styles
  var sharedStyles = doc.sketchObject.documentData().layerStyles();

  //reference the number of shared styles
  var numberOfSharedStyles = Number(sharedStyles.numberOfSharedStyles());
  //log("# of Shared Styles: " + numberOfSharedStyles);

  //*** let the user specify where to put the XML file
  // setup a variable... allow xml to be written to the folder
  // var fileTypes = [NSArray arrayWithObjects:@"json", nil]; // --> resulted in "ObjC method arrayWithObjects: requires 1 argument, but JavaScript passed 2 arguments"
  var fileTypes = ["json"];

  // create a folder/directory chooser window
  var panel = [NSOpenPanel savePanel];
  [panel setCanChooseDirectories:true];
  [panel setCanCreateDirectories:true];
  [panel setAllowedFileTypes:fileTypes];
  [panel setNameFieldStringValue:documentName+".json"];
  // the text on the button in the panel
  panel.setPrompt("Save Color Palette");

  // check if something has been selected
  if (panel.runModal()) {
    // create an array to hold the shared style info as a palette
    var paletteArray = [];

    for (var ss = 0; ss < numberOfSharedStyles; ss++){
      layerStyle = sharedStyles.objects().objectAtIndex(ss);
      // convert variables to Strings for JSON export
      var colorName = String(layerStyle.name());
      var colorHex = "#" + layerStyle.value().firstEnabledFill().color().immutableModelObject().hexValue();

      //log("     Name & Hex: " + colorName + " " + colorHex);

      //push this info into the palette array
      paletteArray.push({
        name: colorName,
        value: colorHex,
      })
    }
    // get the file path & file name
    var file_path = panel.URL().path();
    var file_name = file_path + "/" + documentName + ".json";
    //log("File Name: " + file_name);

    // Create the JSON object from paletteArray
    var jsonObj = { "Shared Styles Color Palette": paletteArray };
    // Convert the object to a json string and format it
    var file = NSString.stringWithString(JSON.stringify(jsonObj, null, "\t"));
    //log("File Data: " + file);
    // Save the file
    [file writeToFile:file_name atomically:true encoding:NSUTF8StringEncoding error:null];

    var alertMessage = documentName+".json saved to: " + file_path;
    alert("Shared Color Palette JSON Exported!", alertMessage);
  }

};