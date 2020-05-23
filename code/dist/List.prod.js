"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}var List=function(){function t(){_classCallCheck(this,t),this.listSize=0,this.pos=0,this.dataStore=[]}return _createClass(t,[{key:"length",value:function(){return this.listSize}},{key:"toString",value:function(){return this.dataStore.join("\n")}},{key:"contains",value:function(t){return-1!=this.find(t)}},{key:"front",value:function(){this.pos=0}},{key:"end",value:function(){this.pos=this.listSize-1}},{key:"prev",value:function(){0<this.pos&&--this.pos}},{key:"next",value:function(){this.pos<this.listSize-1&&++this.pos}},{key:"insert",value:function(t){var e=this.find(t);return-1!=e&&(this.dataStore.splice(e+1,0,t),--this.listSize,!0)}},{key:"append",value:function(t){this.dataStore[this.listSize++]=t}},{key:"find",value:function(t){for(var e=0;e<this.dataStore.length;e++){return this.dataStore[e]==t?e:-1}}},{key:"remove",value:function(t){var e=this.find(t);return-1!=e&&(this.dataStore.splice(e,1),--this.listSize,!0)}},{key:"clear",value:function(){this.dataStore=[],this.listSize=this.pos=0}},{key:"currentPos",value:function(){return this.pos}},{key:"moveTo",value:function(t){0<=t&&t<=this.listSize-1&&(this.pos=t)}},{key:"getCurrentElement",value:function(){return this.dataStore[this.pos]}},{key:"showList",value:function(){for(this.front();this.currentPos()<this.length();this.next())console.log(this.getCurrentElement())}}]),t}(),list=new List;list.append("Yong"),console.log(list.dataStore);