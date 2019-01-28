// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
/*console.log('Turning ' +  "page" + ' red!');
var selectors = [];
var sheets = document.styleSheets;
for(var i = 0 ; i < document.styleSheets.length; i++){
    let sheet= sheets[i];
    for(var rul in sheet.cssRules){
        let rule = sheet.cssRules[rul]
        if(rule.style && rule.style.hasOwnProperty("fontFamily")) {
            if (rule.style.fontFamily.includes("sans-serif")) {
                console.log(rule.style.fontFamily);
                rule.style.fontFamily = "sans-serif";
                console.log(rule.style.fontFamily);
            }
        }
    }
}*/



var style = document.createElement("style");
style.type = "text/css"
b = "\n" +
    "@font-face {\n" +
    "    font-family: Arial;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Arial;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Arial;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Arial;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Arial;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Arial;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Arial;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Arial;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "@font-face {\n" +
    "    font-family: Helvetica;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Helvetica;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Helvetica;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Helvetica;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Helvetica;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Helvetica;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Helvetica;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Helvetica;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}@font-face {\n" +
    "    font-family: \"Helvetica Neue\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Helvetica Neue\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Helvetica Neue\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Helvetica Neue\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Helvetica Neue\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Helvetica Neue\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Helvetica Neue\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Helvetica Neue\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}@font-face {\n" +
    "    font-family: Calibri;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Calibri;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Calibri;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Calibri;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Calibri;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Calibri;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Calibri;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Calibri;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}@font-face {\n" +
    "    font-family: Verdana;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Verdana;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Verdana;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Verdana;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Verdana;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Verdana;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Verdana;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Verdana;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}@font-face {\n" +
    "    font-family: Roboto;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Roboto;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Roboto;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Roboto;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Roboto;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Roboto;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Roboto;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Roboto;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}@font-face {\n" +
    "    font-family: Geneva;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Geneva;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Geneva;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Geneva;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Geneva;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Geneva;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Geneva;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Geneva;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}@font-face {\n" +
    "    font-family: Tahoma;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Tahoma;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Tahoma;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Tahoma;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Tahoma;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Tahoma;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Tahoma;\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: Tahoma;\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}@font-face {\n" +
    "    font-family: \"Lucida Sans Unicode\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Lucida Sans Unicode\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Lucida Sans Unicode\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Lucida Sans Unicode\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Lucida Sans Unicode\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Lucida Sans Unicode\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Lucida Sans Unicode\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Lucida Sans Unicode\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}@font-face {\n" +
    "    font-family: \"Trebuchet MS\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light\"), local(\"Ubuntu Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Trebuchet MS\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 300;\n" +
    "    src: local(\".SFNSText-LightItalic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Light Italic\"), local(\"Ubuntu Light Italic\"), local(\"Roboto-LightItalic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Trebuchet MS\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Regular\"), local(\".HelveticaNeueDeskInterface-Regular\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Trebuchet MS\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 400;\n" +
    "    src: local(\".SFNSText-Italic\"), local(\".HelveticaNeueDeskInterface-Italic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Italic\"), local(\"Ubuntu Italic\"), local(\"Roboto-Italic\"), local(\"DroidSans\"), local(\"Tahoma\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Trebuchet MS\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-Medium\"), local(\".HelveticaNeueDeskInterface-MediumP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold\"), local(\"Ubuntu Medium\"), local(\"Roboto-Medium\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Trebuchet MS\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 500;\n" +
    "    src: local(\".SFNSText-MediumItalic\"), local(\".HelveticaNeueDeskInterface-MediumItalicP4\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Semibold Italic\"), local(\"Ubuntu Medium Italic\"), local(\"Roboto-MediumItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Trebuchet MS\";\n" +
    "    font-style: normal;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-Bold\"), local(\".HelveticaNeueDeskInterface-Bold\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold\"), local(\"Ubuntu Bold\"), local(\"Roboto-Bold\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}\n" +
    "\n" +
    "@font-face {\n" +
    "    font-family: \"Trebuchet MS\";\n" +
    "    font-style: italic;\n" +
    "    font-weight: 700;\n" +
    "    src: local(\".SFNSText-BoldItalic\"), local(\".HelveticaNeueDeskInterface-BoldItalic\"), local(\".LucidaGrandeUI\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu Bold Italic\"), local(\"Roboto-BoldItalic\"), local(\"DroidSans-Bold\"), local(\"Tahoma Bold\");\n" +
    "}"
style.innerText = b, document.head ? document.head.appendChild(style) : document.documentElement.appendChild(style)

console.log(b);