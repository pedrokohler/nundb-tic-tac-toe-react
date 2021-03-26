(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{56:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i=t(0),u=t.n(i),l=t(17),s=t.n(l),f=t(4),d=t(14),j=t(2),b=t(16),p=t(7),O=t(8),m="@@tic-tac-toe",y="".concat(m,":RESET_GAME"),h="".concat(m,":FILL_SQUARE"),v="".concat(m,":JOIN"),x="".concat(m,":JOIN_ROOM"),w="".concat(m,":SYNC_GAME_STATE"),S=function(n){return{type:v,payload:{player:n}}},g=t(1),N=O.a.div(r||(r=Object(p.a)(["\n    width: ",";\n    height: ",";\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\n    font-size: 2.5em;\n\n    border: solid 1px black;\n\n    /* guarantee no text selection  */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently */\n"])),(function(n){var e=n.squareSize;return"".concat(e-2,"px")}),(function(n){var e=n.squareSize;return"".concat(e-2,"px")})),E=function(n){var e=n.children,t=n.squareSize,r=n.onClick;return Object(g.jsx)(N,{squareSize:t,onClick:r,children:e})},T=O.a.div(c||(c=Object(p.a)(["\n    height: ",";\n    width: ",";\n\n    display: flex;\n    flex-direction: row;\n    align-items: space-around;\n    justify-content: center;\n    flex-wrap: wrap;\n"])),(function(n){var e=n.boardSize;return"".concat(e,"px")}),(function(n){var e=n.boardSize;return"".concat(e,"px")})),_=function(){var n=Object(f.c)((function(n){return n.ticTacToe})).board,e=Object(f.c)((function(n){return n.identification})).userName,t=Object(f.b)();return Object(g.jsx)(T,{boardSize:300,children:n.map((function(n,r){return n.map((function(n,c){return Object(g.jsx)(E,{squareSize:100,onClick:function(){t(function(n){var e=n.row,t=n.column,r=n.player;return{type:h,payload:{row:e,column:t,player:r}}}({column:c,row:r,player:e}))},children:n},String(r)+String(c))}))}))})},I="@@identification:SET_IDENTIFICATION",k="@@identification:SET_ROOM",z=function(n){return{type:k,payload:{room:n}}},X=O.a.div(a||(a=Object(p.a)(["\n  width: 95vw;\n  height: 95vh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  font-family: sans-serif;\n"]))),C="Click a square",R=function(){var n=Object(f.c)((function(n){return n.ticTacToe})),e=n.winner,t=n.plays,r=n.maxPlays,c=n.X,a=n.O,o=Object(f.c)((function(n){return n.identification})).userName,u=Object(j.f)().roomName,l=Object(f.b)(),s=Object(i.useState)(C),d=Object(b.a)(s,2),p=d[0],O=d[1];return Object(i.useEffect)((function(){return O(e?function(n){return"Winner: ".concat(n)}(e):t>=r?"No winner":C)}),[e,t,r]),Object(i.useEffect)((function(){l(z(u)),l(function(n){return{type:x,payload:{roomName:n}}}(u))}),[]),Object(g.jsxs)(X,{children:[Object(g.jsx)("p",{children:o?"Your user name: ".concat(o):"You're viewing the game as a guest"}),Object(g.jsxs)("p",{children:["Player X:"," ",c]}),Object(g.jsxs)("p",{children:["Player O:"," ",a]}),Object(g.jsx)(_,{}),Object(g.jsx)("p",{children:p}),Object(g.jsx)("button",{type:"button",onClick:function(){return l({type:y,payload:{boardSize:n}});var n},children:"Reset Game"})]})},q=O.a.div(o||(o=Object(p.a)(["\n  width: 95vw;\n  height: 95vh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  font-family: sans-serif;\n"]))),A=function(){var n=Object(f.c)((function(n){return n.identification})).room,e=Object(f.b)();return Object(g.jsxs)(q,{children:[Object(g.jsx)("div",{children:Object(g.jsxs)("label",{htmlFor:"userName",children:[Object(g.jsx)("p",{children:"Type in your username:"}),Object(g.jsx)("input",{name:"userName",onInput:function(n){return e((t=n.target.value,{type:I,payload:{userName:t}}));var t}})]})}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("label",{htmlFor:"roomName",children:[Object(g.jsx)("p",{children:"Type in the room name:"}),Object(g.jsx)("input",{name:"roomName",onInput:function(n){return e(z(n.target.value))}})]}),Object(g.jsx)(d.b,{to:"/room/".concat(n),onClick:function(e){n||e.preventDefault()},children:Object(g.jsx)("p",{children:"Join room"})})]})]})},D=function(){return Object(g.jsx)(d.a,{children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/room/:roomName",children:Object(g.jsx)(R,{})}),Object(g.jsx)(j.a,{path:"/",children:Object(g.jsx)(A,{})})]})})},M=t(10),F=t(13),J=t(19),L=t(3),V=Object.freeze(["X","O"]),P=function(){var n=Math.pow(3,2),e=new Array(3).fill([]).map((function(){return new Array(3).fill("")})),t=Object(b.a)(V,1)[0];return{id:(new Date).getTime(),X:null,O:null,winner:null,roomName:null,maxPlays:n,board:e,nextSymbol:t,plays:0}},G=function(n){var e=Object(F.a)(n),t=Y(n),r=B(n),c=[].concat(Object(F.a)(e),Object(F.a)(t),Object(F.a)(r));return U(c)},U=function(n){var e;return null===(e=n.find((function(n){var e=Object(b.a)(n,1)[0];return n.every((function(n){return""!==n&&n===e}))})))||void 0===e?void 0:e[0]},Y=function(n){return n.reduce((function(n,e){return[0,1,2].map((function(t){return[].concat(Object(F.a)(n[t]),[e[t]])}))}),[[],[],[]])},B=function(n){return[H(n),K(n)]},H=function(n){return n.map((function(n,e){return n.find((function(n,t){return t===e}))}))},K=function(n){return n.map((function(e,t){return e.find((function(e,r){return r+t===n.length-1}))}))},Q=function(n){var e=n.state,t=n.row,r=n.column,c=n.player===W(e),a=!e.board[t][r],o=!e.winner;return c&&a&&o},W=function(n){return Z({state:n,symbol:n.nextSymbol})},Z=function(n){return n.state[n.symbol]||null},$=function(n){var e=n.state,t=n.row,r=n.column;return e.board.map((function(n,c){return c!==t?n:n.map((function(n,t){return t===r?e.nextSymbol:n}))}))},nn=function(n){var e=en(n),t=V.length;return V[e%t]},en=function(n){return n.plays+1},tn=function(){return P()},rn=function(n,e){var t=e.payload;return function(n){var e=n.state,t=n.row,r=n.column,c=n.player;if(!Q({state:e,row:t,column:r,player:c}))return e;var a=$({state:e,row:t,column:r}),o=G(a),i=Z({state:e,symbol:o});return Object(L.a)(Object(L.a)({},e),{},{board:a,nextSymbol:nn(e),plays:en(e),winner:i})}({state:n,row:t.row,column:t.column,player:t.player})},cn=function(n,e){return function(n){var e=n.state,t=n.player,r=!!e.X;if(e.X&&e.O)return e;if(r&&e.X===t)return e;var c=r?"O":"X";return Object(L.a)(Object(L.a)({},e),{},Object(J.a)({},c,t))}({state:n,player:e.payload.player})},an=function(n,e){return function(n){var e=n.state,t=n.roomName;return Object(L.a)(Object(L.a)({},e),{},{roomName:t})}({state:n,roomName:e.payload.roomName})},on=function(n,e){return e.payload.state},un=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P(),e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return tn();case h:return rn(n,e);case v:return cn(n,e);case x:return an(n,e);case w:return on(0,e);default:return n}},ln=function(n,e){var t=e.payload.userName;return Object(L.a)(Object(L.a)({},n),{},{userName:t})},sn=function(n,e){var t=e.payload.room;return Object(L.a)(Object(L.a)({},n),{},{room:t})},fn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I:return ln(n,e);case k:return sn(n,e);default:return n}},dn=Object(M.c)({ticTacToe:un,identification:fn}),jn=t(22),bn=new(t.n(jn).a)("wss://ws.nundb.org","tic-tac-toe","tic-tac-toe12i3ukjsd"),pn=new RegExp("^".concat(m)),On=function(n){return function(e){return function(t){e(t);var r=n.getState().ticTacToe.id,c=n.getState().identification.room;if(t.type===x)return bn.getValue(c).then((function(e){n.dispatch(function(n){return{type:w,payload:{state:n}}}(e.ticTacToe)),n.dispatch(S(n.getState().identification.userName))})).catch((function(){n.dispatch(S(n.getState().identification.userName))})),void bn.watch("lastEvent-".concat(c),(function(e){return e.playerId!==r&&(pn.test(e.value.type)&&n.dispatch(e.value),!0)}));if(pn.test(t.type)&&!t.playerId){var a=Object(L.a)(Object(L.a)({},t),{},{playerId:r});bn.setValue("lastEvent-".concat(c),a),bn.setValue(n.getState().identification.room,n.getState())}}}},mn=function(){return window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(n){return n}},yn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.initialState,t=Object(M.e)(dn,e,Object(M.d)(Object(M.a)(On),mn()));return t}();s.a.render(Object(g.jsx)(u.a.StrictMode,{children:Object(g.jsx)(f.a,{store:yn,children:Object(g.jsx)(D,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.79ae61d1.chunk.js.map