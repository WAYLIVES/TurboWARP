// ________________________________________________________________________________________

// Name: Window Settings
// Id: RIHART
// Description: Thanks to this extension, you can customize the project window (this works if you package the project in the ".exe" format).
// Created by: RIHART (https://scratch.mit.edu/users/RIHART/)
// V-1.1.0

// ________________________________________________________________________________________






/* ________________________________________________________________________________________ */
(function (Scratch) {
  "use strict";
/* ________________________________________________________________________________________ */



  
  

/* ________________________________________________________________________________________ */
  Scratch.translate.setup({
    
    ru /*_РусскийЯзык_*/: {
      ExtensionName: "Настройки Окна",
      LabelA: "Window Settings:",
      MoveWHXY: " | | | |  окно [SC] [WHXY]: [WHXYA], [WHXYB]  | | | | ",
        // [SC]:
          SCA: "задать",
          SCB: "изменить",
        // [WHXY]:
          WHXYA: "ширину, высоту",
          WHXYB: "позицию x, позицию y",
      WindowSCWH: " | | | |  окно [MenuSC] [MenuWH]: [WH]  | | | | ",
        // [MenuSC]:
          MenuSCA: "задать",
          MenuSCB: "изменить",
        // [MenuWH]:
          MenuWHA: "ширину",
          MenuWHB: "высоту",
          MenuWHC: "позицию x",
          MenuWHD: "позицию y",
      moveToPresets: " | | | |  переместить окно [PRESETS]  | | | | ",
        // [PRESETS]:
          PRESETSA: "по центру",
          PRESETSB: "справа",
          PRESETSC: "слева",
          PRESETSD: "сверху",
          PRESETSE: "снизу",
          PRESETSF: "в верхнем правом углу",
          PRESETSG: "в верхнем левом углу",
          PRESETSH: "в нижнем правом углу",
          PRESETSI: "в нижнем левом углу",
      changeTitleTo: " | | | |  задать окну имя [TITLE]  | | | | ",
      WindowWHXY: " | | | |  окно [MenuWindowWHXY]  | | | | ",
      innerStageSize: " | | | |  размер внутренней сцены [innerMenuSetChange] ширину: [innerWidth] высоту: [innerHeight]  | | | | ",
        // [innerMenuSetChange]:
          innerMenuSetChangeA: "задать",
          innerMenuSetChangeB: "изменить",
      innerStageSizeWidthHeight: " | | | |  размер внутренней сцены [innerMenuSetChangeWH] [innerMenuWidthHeight]: [innerWidthHeight]  | | | | ",
        // [innerMenuSetChangeWH]:
          innerMenuSetChangeWHA: "задать",
          innerMenuSetChangeWHB: "изменить",
        // [innerMenuWidthHeight]:
          innerMenuWidthHeightA: "ширину",
          innerMenuWidthHeightB: "высоту",
      setDimensions: " | | | |  задать сцену по ширине: [width] по высоте: [height]  | | | | ",
      getDimension: " | | | |  сцена [dimension] | | | | ",
      greenFlag: " | | | |  нажать на флаг [flag] | | | | ",
      FullscreenEnterExit: " | | | |  полноэкранный режим [MenuFEE] | | | | ",
        // [MenuFEE]:
          FullscreenEnter: "включить",
          FullscreenExit: "выключить",
      closeWindow: " | | | |  закрыть окно  | | | | ",
      QuestionsWS: " | | | | [MenuQuestions] | | | | ",
        // [MenuQuestions]:
          MenuQuestionsA: "касается ли окно края экрана?",
          MenuQuestionsB: "сфокусировано ли окно?",
          MenuQuestionsC: "является ли окно полноэкранным?",
      ScreenWHXY: " | | | |  экран [MenuScreenWHXY] | | | | ",
      setEnabled: " | | | |  задать [thing] [enabled] | | | | ",
        // [thing]:
          thingA: "🗲 турбо режим",
          thingB: "интерполяция",
          thingC: "убрать рамку сцены",
          thingD: "убрать разные ограничения",
          thingE: "перо в высоком качестве",
        // [enabled]:
      setFramerate: " | | | |  задать ограничение частоты кадров на: [fps] | | | | ",
      showHideOption: " | | | | [SHOWHIDE] [OPTIONSH] | | | | ",
        // [SHOWHIDE]:
          show: "показать",
          hide: "скрыть",
        // [OPTIONSH]:
          flag: "иконка флага",
          pause: "иконка паузы",
          stop: "иконка остановки",
          fullscreen: "иконка полноэкранного режима",
      optionShown: " | | | |  [OPTION] показан?  | | | | ",
    },
  }); 
/* ________________________________________________________________________________________ */



  

  
/* ________________________________________________________________________________________ */
  if (!Scratch.extensions.unsandboxed) {throw new Error("Error");}  
/* ________________________________________________________________________________________ */



  
  

/* ________________________________________________________________________________________ */  
  // иконка меню:
  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSI5MiIgaGVpZ2h0PSI5MiIgcng9IjE2IiBmaWxsPSIjM0IzRDRFIi8+CjxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSI5MiIgaGVpZ2h0PSI5MiIgcng9IjE2IiBzdHJva2U9IiM1RDYwN0EiIHN0cm9rZS13aWR0aD0iOCIvPgo8cmVjdCB4PSIyNCIgeT0iMjQiIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiIgcng9IjQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iOCIvPgo8cGF0aCBkPSJNMjAgMjhDMjAgMjMuNTgxNyAyMy41ODE3IDIwIDI4IDIwSDcyQzc2LjQxODMgMjAgODAgMjMuNTgxNyA4MCAyOFY0OEgyMFYyOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
 
  // иконки блоков:
  const MoveWHXY = "data:image/gif;base64,";
  const greenFlagURI="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxNiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zIDAuNUMzIDAuMjIzODU4IDIuNzc2MTQgMCAyLjUgMEgxLjVDMC42NzE1NzMgMCAwIDAuNjcxNTczIDAgMS41VjE4LjVDMCAxOS4zMjg0IDAuNjcxNTczIDIwIDEuNSAyMFYyMEMyLjMyODQzIDIwIDMgMTkuMzI4NCAzIDE4LjVWMTVDMyAxMy44OTU0IDMuODk1NDMgMTMgNSAxM0gxNEMxNS4xMDQ2IDEzIDE2IDEyLjEwNDYgMTYgMTFWM0MxNiAxLjg5NTQzIDE1LjEwNDYgMSAxNCAxSDMuNUMzLjIyMzg2IDEgMyAwLjc3NjE0MiAzIDAuNVYwLjVaIiBmaWxsPSIjMTgxRDBEIi8+Cjwvc3ZnPgo=";
/* ________________________________________________________________________________________ */



  


/* ________________________________________________________________________________________ */  
  const TURBO_MODE = "turbo mode";
  const INTERPOLATION = "interpolation";
  const REMOVE_FENCING = "remove fencing";
  const REMOVE_MISC_LIMITS = "remove misc limits";
  const HIGH_QUALITY_PEN = "high quality pen";


  var fullScreen;
  var greenFlag;
  var pauseButton;
  var stopButton;

  const getButtons = () => {
    fullScreen = undefined;
    greenFlag = undefined;
    pauseButton = undefined;
    stopButton = undefined;

    const rightButtons = document.querySelectorAll(
      '[class*="stage-header_stage-button_"]'
    );
    fullScreen = rightButtons[rightButtons.length - 1];
    if (!fullScreen) {
      fullScreen =
        document.querySelector(".fullscreen-button") ||
        document.querySelector(".standalone-fullscreen-button");
    }

    greenFlag =
      document.querySelector('[class*="green-flag_green-flag_"]') ||
      document.querySelector(".green-flag-button");
    pauseButton =
      document.querySelector(".pause-btn") ||
      document.querySelector(".pause-button");
    stopButton =
      document.querySelector('[class*="stop-all_stop-all_"]') ||
      document.querySelector(".stop-all-button");
  };

  class controlcontrols {
    constructor() {
      Scratch.vm.runtime.on("RUNTIME_DISPOSED", () => {
        getButtons();
        for (const button of [fullScreen, greenFlag, pauseButton, stopButton]) {
          if (button) {
            button.style.display = "block";
          }
        }
      });
    }
  }
/* ________________________________________________________________________________________ */



  


/* ________________________________________________________________________________________ */  
  class lmsmcutils {
    getInfo() {
      return {              
        id: "WindowSettings",
        name: Scratch.translate({ id: "ExtensionName", default: "Window Settings" }),
        color1: "#5D607A",
        color2: "#536E8E",
        color3: "#1F202C",
        menuIconURI: menuIconURI,
        
        blocks: [

          {
            opcode: "MoveWHXY",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "MoveWHXY", 
              default: " | | | |  window [SC] [WHXY]: [WHXYA], [WHXYB]  | | | | " 
            }),
            arguments: {
              SC: {
                type: Scratch.ArgumentType.STRING,
                menu: "SC",
              },
              WHXY: {
                type: Scratch.ArgumentType.STRING,
                menu: "WHXY",
              },
              WHXYA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
              WHXYB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "360",
              },
            },
          },
          
          {
            opcode: "WindowSCWH",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "WindowSCWH", 
              default: " | | | |  window [MenuSC] [MenuWH]: [WH] | | | | " 
            }),
            arguments: {
              MenuSC: {
                type: Scratch.ArgumentType.STRING,
                menu: "MenuSC",
              },
              MenuWH: {
                type: Scratch.ArgumentType.STRING,
                menu: "MenuWH",
              },
              WH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
            },
          },
                    
          {
            opcode: "moveToPresets",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "moveToPresets", 
              default: " | | | |  move window to the [PRESETS] | | | | " 
            }),
            arguments: {
              PRESETS: {
                type: Scratch.ArgumentType.STRING,
                menu: "MOVE",
              },
            },
          },
          
          {
            opcode: "changeTitleTo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "changeTitleTo", 
              default: " | | | |  set window title to [TITLE] | | | | " 
            }),
            arguments: {
              TITLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "WAYLIVES",
              },
            },
          },  
          
          {
            opcode: "WindowWHXY",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ 
              id: "WindowWHXY", 
              default: " | | | |  window [MenuWindowWHXY]  | | | | " 
            }),
            arguments: {
              MenuWindowWHXY: {
                type: Scratch.ArgumentType.STRING,
                menu: "MenuWindowWHXY",
              },
            },
          },          

          "---",          

          {
            opcode: "innerStageSize",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "innerStageSize", 
              default: " | | | |  inner stage size [innerMenuSetChange] width: [innerWidth] height: [innerHeight] | | | | " 
            }),
            arguments: {
              innerMenuSetChange: {
                type: Scratch.ArgumentType.STRING,
                menu: "innerMenuSetChange",
              },
              innerWidth: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
              innerHeight: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "360",
              },
            },
          },
          
          {
            opcode: "innerStageSizeWidthHeight",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "innerStageSizeWidthHeight", 
              default: " | | | |  inner stage size [innerMenuSetChangeWH] [innerMenuWidthHeight]: [innerWidthHeight] | | | | " 
            }),
            arguments: {
              innerMenuSetChangeWH: {
                type: Scratch.ArgumentType.STRING,
                menu: "innerMenuSetChangeWH",
              },
              innerMenuWidthHeight: {
                type: Scratch.ArgumentType.STRING,
                menu: "innerMenuWidthHeight",
              },
              innerWidthHeight: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
            },
          },

          {
            opcode: "setDimensions",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "setDimensions", 
              default: " | | | |  set stage size width: [width] height: [height]  | | | | " 
            }),
            arguments: {
              width: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
              height: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "360",
              },
            },
          },
          
          {
            opcode: "getDimension",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ 
              id: "getDimension", 
              default: " | | | |  stage [dimension] | | | | " 
            }),
            arguments: {
              dimension: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "width",
                menu: "dimension",
              },
            },
          },            

          "---",
          
          {
            opcode: "greenFlag",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "greenFlag", 
              default: " | | | |  run flag [flag] | | | | " 
            }),
            arguments: {
              flag: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: greenFlagURI,
              },
            },
          },

          {
            opcode: "FullscreenEnterExit",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "FullscreenEnterExit", 
              default: " | | | |  fullscreen [MenuFEE] | | | | " 
            }),
            arguments: {
              MenuFEE: {
                type: Scratch.ArgumentType.STRING,
                menu: "MenuFEE",
              },
            },
          },
          
          {
            opcode: "closeWindow",
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            text: Scratch.translate({ 
              id: "closeWindow", 
              default: " | | | |  close window  | | | | " 
            }),
          },  
          
          {
            opcode: "QuestionsWS",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate({ 
              id: "QuestionsWS", 
              default: " | | | | [MenuQuestions] | | | | " 
            }),
            disableMonitor: true,
            arguments: {
              MenuQuestions: {
                type: Scratch.ArgumentType.STRING,
                menu: "MenuQuestions",
              },
            },
          },
          
          {
            opcode: "ScreenWHXY",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ 
              id: "ScreenWHXY", 
              default: " | | | |  screen [MenuScreenWHXY] | | | | " 
            }),
            arguments: {
              MenuScreenWHXY: {
                type: Scratch.ArgumentType.STRING,
                menu: "MenuScreenWHXY",
              },
            },
          },

          "---",
/*
          {
            opcode: "setEnabled",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "setEnabled", 
              default: " | | | |  set [thing] to [enabled] | | | | "
            }),
            arguments: {
              thing: {
                type: Scratch.ArgumentType.STRING,
                menu: "thing",
                defaultValue: "TURBO_MODE",
              },
              enabled: {
                type: Scratch.ArgumentType.STRING,
                menu: "enabled",
                defaultValue: "true",
              },
            },
          },
*/
          {
            opcode: "setFramerate",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "setFramerate", 
              default: " | | | |  set framerate limit to [fps] | | | | " 
            }),
            arguments: {
              fps: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "30",
              },
            },
          },
          

          "---",  

          
          {
            opcode: "showHideOption",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ 
              id: "showHideOption", 
              default: " | | | |  [SHOWHIDE] [OPTIONSH]  | | | | " 
            }),
            arguments: {
              SHOWHIDE: {
                type: Scratch.ArgumentType.STRING,
                menu: "SHOWHIDE",
              },
              OPTIONSH: {
                type: Scratch.ArgumentType.STRING,
                menu: "OPTIONSH",
              },
            },
          },
          {
            opcode: "optionShown",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate({ 
              id: "optionShown", 
              default: " | | | |  [OPTION] shown?  | | | | " 
            }),
            arguments: {
              OPTION: {
                type: Scratch.ArgumentType.STRING,
                menu: "OPTION",
              },
            },
          },
          "---",
          
          
        ],
/* ________________________________________________________________________________________ */



        


/* ________________________________________________________________________________________ */
        menus: {
          
          SC: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "SCA", default: "set" }), value: "Set" },
              { text: Scratch.translate({ id: "SCB", default: "change" }), value: "Change" },
            ],
          },
          WHXY: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "WHXYA", default: "width, height" }), value: "WidthHeight" },
              { text: Scratch.translate({ id: "WHXYB", default: "x position, y position" }), value: "PositionXY" },
            ],
          },      
          MenuSC: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "MenuSCA", default: "set" }), value: "Set" },
              { text: Scratch.translate({ id: "MenuSCB", default: "change" }), value: "Change" },
            ],
          },
          MenuWH: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "MenuWHA", default: "width" }), value: "Width" },
              { text: Scratch.translate({ id: "MenuWHB", default: "height" }), value: "Height" },
              { text: Scratch.translate({ id: "MenuWHC", default: "x position" }), value: "PositionX" },
              { text: Scratch.translate({ id: "MenuWHD", default: "y position" }), value: "PositionY" },
            ],
          },
          MOVE: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "PRESETSA", default: "center" }), value: "center" },
              { text: Scratch.translate({ id: "PRESETSB", default: "right" }), value: "right" },
              { text: Scratch.translate({ id: "PRESETSC", default: "left" }), value: "left" },
              { text: Scratch.translate({ id: "PRESETSD", default: "top" }), value: "top" },
              { text: Scratch.translate({ id: "PRESETSE", default: "bottom" }), value: "bottom" },
              { text: Scratch.translate({ id: "PRESETSF", default: "top right" }), value: "top right" },
              { text: Scratch.translate({ id: "PRESETSG", default: "top left" }), value: "top left" },
              { text: Scratch.translate({ id: "PRESETSH", default: "bottom right" }), value: "bottom right" },
              { text: Scratch.translate({ id: "PRESETSI", default: "bottom left" }), value: "bottom left" },
            ],
          },         
          MenuWindowWHXY: {
            acceptReporters: true,
            items: [
              { text: "width", value: "Width" },
              { text: "height", value: "Height" },
              { text: "x position", value: "PositionX" },
              { text: "y position", value: "PositionY" },
              { text: "title", value: "Title" },
            ],
          },
          innerMenuSetChange: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "innerMenuSetChangeA", default: "set" }), value: "set" },
              { text: Scratch.translate({ id: "innerMenuSetChangeB", default: "change" }), value: "change" },
            ],
          },
          innerMenuSetChangeWH: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "innerMenuSetChangeWHA", default: "set" }), value: "set" },
              { text: Scratch.translate({ id: "innerMenuSetChangeWHB", default: "change" }), value: "change" },
            ],
          },
          innerMenuWidthHeight: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "innerMenuWidthHeightA", default: "width" }), value: "width" },
              { text: Scratch.translate({ id: "innerMenuWidthHeightB", default: "height" }), value: "height" },
            ],
          },
          dimension: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("width"),
                value: "width",
              },
              {
                text: Scratch.translate("height"),
                value: "height",
              },
            ],
          },
          MenuFEE: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "FullscreenEnter", default: "width" }), value: "Enter" },
              { text: Scratch.translate({ id: "FullscreenExit", default: "height" }), value: "Exit" },
            ],
          },
          MenuQuestions: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "MenuQuestionsA", default: "is window touching screen edge" }), value: "A" },
              { text: Scratch.translate({ id: "MenuQuestionsB", default: "is window focused?" }), value: "B" },
              { text: Scratch.translate({ id: "MenuQuestionsC", default: "is window fullscreen?" }), value: "C" },
            ],
          },
          MenuScreenWHXY: {
            acceptReporters: true,
            items: [
              { text: "width", value: "Width" },
              { text: "height", value: "Height" },
            ],
          },




          thing: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "thingA", default: "🗲 turbo mode" }), value: "TURBO_MODE" },
              { text: Scratch.translate({ id: "thingB", default: "interpolation" }), value: "INTERPOLATION" },
              { text: Scratch.translate({ id: "thingC", default: "remove fencing" }), value: "REMOVE_FENCING" },
              { text: Scratch.translate({ id: "thingD", default: "remove misc limits" }), value: "REMOVE_MISC_LIMITS" },
              { text: Scratch.translate({ id: "thingE", default: "high quality pen" }), value: "HIGH_QUALITY_PEN" },
            ],
          },

          enabled: {
            acceptReporters: false,
            items: [
              {
                text: Scratch.translate("enabled"),
                value: "true",
              },
              {
                text: Scratch.translate("disabled"),
                value: "false",
              },
            ],
          },



          OPTION: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("flag"),
                value: "flag",
              },
              {
                text: Scratch.translate("pause"),
                value: "pause",
              },
              {
                text: Scratch.translate("stop"),
                value: "stop",
              },
              {
                text: Scratch.translate("fullscreen"),
                value: "fullscreen",
              },
            ],
          },
          SHOWHIDE: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "show", default: "show" }), value: "show" },
              { text: Scratch.translate({ id: "hide", default: "hide" }), value: "hide" },
            ],
          },
          OPTIONSH: {
            acceptReporters: false,
            items: [
              { text: Scratch.translate({ id: "flag", default: "flag" }), value: "flag" },
              { text: Scratch.translate({ id: "pause", default: "pause" }), value: "pause" },
              { text: Scratch.translate({ id: "stop", default: "stop" }), value: "stop" },
              { text: Scratch.translate({ id: "fullscreen", default: "fullscreen" }), value: "fullscreen" },
            ],
          },
                    
        },
      };
    }
/* ________________________________________________________________________________________ */



      


/* ________________________________________________________________________________________ */
    getDimension({ dimension }) {
      if (dimension === "width") {
        return Scratch.vm.runtime.stageWidth;
      } else if (dimension === "height") {
        return Scratch.vm.runtime.stageHeight;
      }
      return 0;
    }


    setDimensions({ width, height }) {
      width = Scratch.Cast.toNumber(width);
      height = Scratch.Cast.toNumber(height);
      Scratch.vm.setStageSize(width, height);
    }

    

    MoveWHXY(args) {
      if (args.SC == "Set") {
        if (args.WHXY == "WidthHeight") {
          window.resizeTo(args.WHXYA, args.WHXYB);
        } else if (args.WHXY == "PositionXY") {
          window.moveTo(args.WHXYA, args.WHXYB);
        }
      } else if (args.SC == "Change") {
        if (args.WHXY == "WidthHeight") {
          window.resizeBy(args.WHXYA, args.WHXYB);
        } else if (args.WHXY == "PositionXY") {
          window.moveBy(args.WHXYA, args.WHXYB);
        }
      }
      Scratch.vm.runtime.requestRedraw();
    }

    innerStageSize(args) {
      if (args.innerMenuSetChange == "set") {
        window.resizeTo(args.innerWidth + (window.outerWidth - window.innerWidth), args.innerHeight + (window.outerHeight - window.innerHeight));
      } else if (args.innerMenuSetChange == "change") {
        window.resizeBy(args.innerWidth, args.innerHeight);
      }
      Scratch.vm.runtime.requestRedraw();
    }
    
    innerStageSizeWidthHeight(args) {
      if (args.innerMenuSetChangeWH == "set") {
        if (args.innerMenuWidthHeight == "width") {
          const innerHeight = window.outerHeight;
          window.resizeTo(args.innerWidthHeight + (window.outerWidth - window.innerWidth), innerHeight);
        } else if (args.innerMenuWidthHeight == "height") {
          const innerWidth = window.outerWidth;
          window.resizeTo(innerWidth, args.innerWidthHeight + (window.outerHeight - window.innerHeight));
        }
      } else if (args.innerMenuSetChangeWH == "change") {       
        if (args.innerMenuWidthHeight == "width") {
          window.resizeBy(args.innerWidthHeight, 0);
        } else if (args.innerMenuWidthHeight == "height") {
          window.resizeBy(0, args.innerWidthHeight);
        }
      }
      Scratch.vm.runtime.requestRedraw();
    }
    

    
    moveToPresets(args) {
      if (args.PRESETS == "center") {
        const left = (screen.width - window.outerWidth) / 2;
        const top = (screen.height - window.outerHeight) / 2;
        window.moveTo(left, top);
      } else if (args.PRESETS == "right") {
        const right = screen.width - window.outerWidth;
        const top = (screen.height - window.outerHeight) / 2;
        window.moveTo(right, top);
      } else if (args.PRESETS == "left") {
        const top = (screen.height - window.outerHeight) / 2;
        window.moveTo(0, top);
      } else if (args.PRESETS == "top") {
        const left = (screen.width - window.outerWidth) / 2;
        window.moveTo(left, 0);
      } else if (args.PRESETS == "bottom") {
        const left = (screen.width - window.outerWidth) / 2;
        const bottom = screen.height - window.outerHeight;
        window.moveTo(left, bottom);
      } else if (args.PRESETS == "top right") {
        const right = screen.width - window.outerWidth;
        window.moveTo(right, 0);
      } else if (args.PRESETS == "top left") {
        window.moveTo(0, 0);
      } else if (args.PRESETS == "bottom right") {
        const right = screen.width - window.outerWidth;
        const bottom = screen.height - window.outerHeight;
        window.moveTo(right, bottom);
      } else if (args.PRESETS == "bottom left") {
        const bottom = screen.height - window.outerHeight;
        window.moveTo(0, bottom);
      }
      Scratch.vm.runtime.requestRedraw();
    }


    WindowWHXY(args) {
      if (args.MenuWindowWHXY == "Width") {
        return window.outerWidth;
      } else if (args.MenuWindowWHXY == "Height") {
        return window.outerHeight;
      } else if (args.MenuWindowWHXY == "PositionX") {
        return window.screenLeft;
      } else if (args.MenuWindowWHXY == "PositionY") {
        return window.screenTop;
      } else if (args.MenuWindowWHXY == "Title") {
        return document.title;
      }
    }
    ScreenWHXY(args) {
      if (args.MenuScreenWHXY == "Width") {
        return screen.width;
      } else if (args.MenuScreenWHXY == "Height") {
        return screen.height;
      }
    }
    QuestionsWS(args) {
      if (args.MenuQuestions == "A") {
        const edgeX = screen.width - window.outerWidth;
        const edgeY = screen.height - window.outerHeight;
        return (
          window.screenLeft <= 0 ||
          window.screenTop <= 0 ||
          window.screenLeft >= edgeX ||
          window.screenTop >= edgeY
        );
      } else if (args.MenuQuestions == "B") {
        return document.hasFocus();
      } else if (args.MenuQuestions == "C") {
        return document.fullscreenElement !== null;
      }
    }
    FullscreenEnterExit(args) {
      if (args.MenuFEE == "Enter") {
        if (document.fullscreenElement == null) {
          document.documentElement.requestFullscreen();
        }
      } else if (args.MenuFEE == "Exit") {
        if (document.fullscreenElement !== null) {
          document.exitFullscreen();
        }
      }
    }

    WindowSCWH(args) {
      if (args.MenuSC == "Set") {
        if (args.MenuWH == "Width") {
          const currentH = window.outerHeight;
          window.resizeTo(args.WH, currentH);
        } else if (args.MenuWH == "Height") {
          const currentW = window.outerWidth;
          window.resizeTo(currentW, args.WH);
        } else if (args.MenuWH == "PositionX") {
          const currentY = window.screenY;
          window.moveTo(args.WH, currentY);
        } else if (args.MenuWH == "PositionY") {
          const currentX = window.screenX;
          window.moveTo(currentX, args.WH);
        }
      } else if (args.MenuSC == "Change") {
        if (args.MenuWH == "Width") {
          window.resizeBy(args.WH, 0);
        } else if (args.MenuWH == "Height") {
          window.resizeBy(0, args.WH);
        } else if (args.MenuWH == "PositionX") {
          window.moveBy(args.WH, 0);
        } else if (args.MenuWH == "PositionY") {
          window.moveBy(0, args.WH);
        }
      }
      Scratch.vm.runtime.requestRedraw();
    }

    changeTitleTo(args) {
      document.title = args.TITLE;
    }
    closeWindow() {
      const editorConfirmation = Scratch.translate({
        id: "editorConfirmation",
        default:
          "Are you sure you want to close this window?\n\n(This message will not appear when the project is packaged)",
      });
      // @ts-expect-error
      if (typeof ScratchBlocks === "undefined" || confirm(editorConfirmation)) {
        window.close();
      }
    }

    greenFlag() {
      Scratch.vm.runtime.greenFlag();
    }

    setEnabled({ thing, enabled }) {
      enabled = Scratch.Cast.toBoolean(enabled);

      if (thing === TURBO_MODE) {
        Scratch.vm.setTurboMode(enabled);
      } else if (thing === INTERPOLATION) {
        Scratch.vm.setInterpolation(enabled);
      } else if (thing === REMOVE_FENCING) {
        Scratch.vm.setRuntimeOptions({
          fencing: !enabled,
        });
      } else if (thing === REMOVE_MISC_LIMITS) {
        Scratch.vm.setRuntimeOptions({
          miscLimits: !enabled,
        });
      } else if (thing === HIGH_QUALITY_PEN) {
        Scratch.renderer.setUseHighQualityRender(enabled);
      }      
    }

    setFramerate({ fps }) {
      fps = Scratch.Cast.toNumber(fps);
      Scratch.vm.setFramerate(fps);
    }    
    
    showHideOption(args) {
      getButtons();
      if (args.SHOWHIDE === "show") {
        if (args.OPTIONSH === "flag" && greenFlag) {
          greenFlag.style.display = "block";
        } else if (args.OPTIONSH === "pause" && pauseButton) {
          pauseButton.style.display = "block";
        } else if (args.OPTIONSH === "stop" && stopButton) {
          stopButton.style.display = "block";
        } else if (args.OPTIONSH === "fullscreen" && fullScreen) {
          fullScreen.style.display = "block";
        }
      } else if (args.SHOWHIDE === "hide") {
        if (args.OPTIONSH === "flag" && greenFlag) {
          greenFlag.style.display = "none";
        } else if (args.OPTIONSH === "pause" && pauseButton) {
          pauseButton.style.display = "none";
        } else if (args.OPTIONSH === "stop" && stopButton) {
          stopButton.style.display = "none";
        } else if (args.OPTIONSH === "fullscreen" && fullScreen) {
          fullScreen.style.display = "none";
        }
      }
    }  

    optionShown(args) {
      getButtons();
      if (args.OPTION === "flag" && greenFlag) {
        return greenFlag.style.display !== "none";
      } else if (args.OPTION === "pause" && pauseButton) {
        return pauseButton.style.display !== "none";
      } else if (args.OPTION === "stop" && stopButton) {
        return stopButton.style.display !== "none";
      } else if (args.OPTION === "fullscreen" && fullScreen) {
        return fullScreen.style.display !== "none";
      }
      return false;
    }
/* ________________________________________________________________________________________ */


    



/* ________________________________________________________________________________________ */
  }
  Scratch.extensions.register(new lmsmcutils());
})(Scratch);
/* ________________________________________________________________________________________ */
