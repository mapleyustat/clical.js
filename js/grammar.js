/* parser generated by jison 0.4.2 */
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"statement":3,"exp":4,"opt_sc":5,"EOF":6,"ID":7,"ASSIGN":8,"opt-ws":9,"WS":10,"SEMICOLON":11,"identifier":12,"number":13,"NUMBER":14,"explist":15,"COMMA":16,"concat_mult":17,"paren_exp":18,"LPAREN":19,"RPAREN":20,"INVOLUTION":21,"CONJUGATE":22,"MINUS":23,"PLUS":24,"POWER":25,"OUTER_POWER":26,"PRODUCT":27,"INNER":28,"OUTER":29,"DIV":30,"BACKDIV":31,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",7:"ID",8:"ASSIGN",10:"WS",11:"SEMICOLON",14:"NUMBER",16:"COMMA",19:"LPAREN",20:"RPAREN",21:"INVOLUTION",22:"CONJUGATE",23:"MINUS",24:"PLUS",25:"POWER",26:"OUTER_POWER",27:"PRODUCT",28:"INNER",29:"OUTER",30:"DIV",31:"BACKDIV"},
productions_: [0,[3,3],[3,5],[9,1],[9,0],[5,1],[5,1],[12,1],[13,1],[15,1],[15,3],[17,2],[17,2],[17,2],[17,2],[17,2],[17,2],[17,2],[17,2],[18,3],[4,1],[4,1],[4,1],[4,1],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,4]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return yy.assignment("ans", $$[$0-2], $$[$0-1]); 
break;
case 2: return yy.assignment($$[$0-4], $$[$0-2], $$[$0-1]); 
break;
case 5:this.$ = true;
break;
case 6:this.$ = false;
break;
case 7:this.$ = yy.identifier(yytext);
break;
case 8:this.$ = yy.number(yytext);
break;
case 9:this.$ = [$$[$0]];
break;
case 10: $$[$0].push($$[$0-2]); this.$ = $$[$0]; 
break;
case 11:this.$ = yy.multiply($$[$0-1], $$[$0]);
break;
case 12:this.$ = yy.multiply($$[$0-1], $$[$0]);
break;
case 13:this.$ = yy.multiply($$[$0-1], $$[$0]);
break;
case 14:this.$ = yy.multiply($$[$0], $$[$0-1]);
break;
case 15:this.$ = yy.multiply($$[$0-1], $$[$0]);
break;
case 16:this.$ = yy.multiply($$[$0-1], $$[$0]);
break;
case 17:this.$ = yy.multiply($$[$0-1], $$[$0]);
break;
case 18:this.$ = yy.multiply($$[$0-1], $$[$0]);
break;
case 19:this.$ = $$[$0-1];
break;
case 24:this.$ = yy.involute($$[$0-1]);
break;
case 25:this.$ = yy.conjugate($$[$0-1]);
break;
case 26:this.$ = yy.negate($$[$0]);
break;
case 27:this.$ = yy.multiply($$[$0-2], $$[$0]);;
break;
case 28:this.$ = yy.add($$[$0-2],$$[$0]);
break;
case 29:this.$ = yy.subtract($$[$0-2],$$[$0]);
break;
case 30:this.$ = yy.power($$[$0-2],$$[$0]);
break;
case 31:this.$ = yy.outerPower($$[$0-2],$$[$0]);
break;
case 32:this.$ = yy.multiply($$[$0-2],$$[$0]);
break;
case 33:this.$ = yy.innerProduct($$[$0-2],$$[$0]);
break;
case 34:this.$ = yy.outerProduct($$[$0-2],$$[$0]);
break;
case 35:this.$ = yy.div($$[$0-2],$$[$0]);
break;
case 36:this.$ = yy.backdiv($$[$0-2],$$[$0]);
break;
case 37:this.$ = yy.funcall($$[$0-3], $$[$0-1].reverse());
break;
}
},
table: [{3:1,4:2,7:[1,3],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{1:[3]},{5:11,6:[2,4],9:25,10:[1,14],11:[1,24],21:[1,12],22:[1,13],23:[1,16],24:[1,15],25:[1,17],26:[1,18],27:[1,19],28:[1,20],29:[1,21],30:[1,22],31:[1,23]},{6:[2,7],7:[2,7],8:[1,26],10:[2,7],11:[2,7],14:[2,7],19:[2,7],21:[2,7],22:[2,7],23:[2,7],24:[2,7],25:[2,7],26:[2,7],27:[2,7],28:[2,7],29:[2,7],30:[2,7],31:[2,7]},{6:[2,20],7:[1,30],10:[2,20],11:[2,20],12:27,13:28,14:[1,9],16:[2,20],18:29,19:[1,10],20:[2,20],21:[2,20],22:[2,20],23:[2,20],24:[2,20],25:[2,20],26:[2,20],27:[2,20],28:[2,20],29:[2,20],30:[2,20],31:[2,20]},{6:[2,21],7:[1,30],10:[2,21],11:[2,21],12:33,13:32,14:[1,9],16:[2,21],19:[1,31],20:[2,21],21:[2,21],22:[2,21],23:[2,21],24:[2,21],25:[2,21],26:[2,21],27:[2,21],28:[2,21],29:[2,21],30:[2,21],31:[2,21]},{6:[2,22],10:[2,22],11:[2,22],16:[2,22],20:[2,22],21:[2,22],22:[2,22],23:[2,22],24:[2,22],25:[2,22],26:[2,22],27:[2,22],28:[2,22],29:[2,22],30:[2,22],31:[2,22]},{6:[2,23],7:[1,30],10:[2,23],11:[2,23],12:34,13:35,14:[1,9],16:[2,23],18:36,19:[1,10],20:[2,23],21:[2,23],22:[2,23],23:[2,23],24:[2,23],25:[2,23],26:[2,23],27:[2,23],28:[2,23],29:[2,23],30:[2,23],31:[2,23]},{4:37,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{6:[2,8],7:[2,8],10:[2,8],11:[2,8],14:[2,8],16:[2,8],19:[2,8],20:[2,8],21:[2,8],22:[2,8],23:[2,8],24:[2,8],25:[2,8],26:[2,8],27:[2,8],28:[2,8],29:[2,8],30:[2,8],31:[2,8]},{4:38,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{6:[1,39]},{6:[2,24],10:[2,24],11:[2,24],16:[2,24],20:[2,24],21:[2,24],22:[2,24],23:[2,24],24:[2,24],25:[2,24],26:[2,24],27:[2,24],28:[2,24],29:[2,24],30:[2,24],31:[2,24]},{6:[2,25],10:[2,25],11:[2,25],16:[2,25],20:[2,25],21:[2,25],22:[2,25],23:[2,25],24:[2,25],25:[2,25],26:[2,25],27:[2,25],28:[2,25],29:[2,25],30:[2,25],31:[2,25]},{4:40,6:[2,3],7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{4:41,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{4:42,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{4:43,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{4:44,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{4:45,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{4:46,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{4:47,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{4:48,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{4:49,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{6:[2,5]},{6:[2,6]},{4:50,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{6:[2,11],10:[2,11],11:[2,11],16:[2,11],20:[2,11],21:[2,11],22:[2,11],23:[2,11],24:[2,11],25:[2,11],26:[2,11],27:[2,11],28:[2,11],29:[2,11],30:[2,11],31:[2,11]},{6:[2,12],10:[2,12],11:[2,12],16:[2,12],20:[2,12],21:[2,12],22:[2,12],23:[2,12],24:[2,12],25:[2,12],26:[2,12],27:[2,12],28:[2,12],29:[2,12],30:[2,12],31:[2,12]},{6:[2,13],10:[2,13],11:[2,13],16:[2,13],20:[2,13],21:[2,13],22:[2,13],23:[2,13],24:[2,13],25:[2,13],26:[2,13],27:[2,13],28:[2,13],29:[2,13],30:[2,13],31:[2,13]},{6:[2,7],7:[2,7],10:[2,7],11:[2,7],14:[2,7],16:[2,7],19:[2,7],20:[2,7],21:[2,7],22:[2,7],23:[2,7],24:[2,7],25:[2,7],26:[2,7],27:[2,7],28:[2,7],29:[2,7],30:[2,7],31:[2,7]},{4:52,7:[1,30],12:5,13:4,14:[1,9],15:51,17:6,18:7,19:[1,10],23:[1,8]},{6:[2,14],10:[2,14],11:[2,14],16:[2,14],20:[2,14],21:[2,14],22:[2,14],23:[2,14],24:[2,14],25:[2,14],26:[2,14],27:[2,14],28:[2,14],29:[2,14],30:[2,14],31:[2,14]},{6:[2,15],10:[2,15],11:[2,15],16:[2,15],20:[2,15],21:[2,15],22:[2,15],23:[2,15],24:[2,15],25:[2,15],26:[2,15],27:[2,15],28:[2,15],29:[2,15],30:[2,15],31:[2,15]},{6:[2,16],10:[2,16],11:[2,16],16:[2,16],20:[2,16],21:[2,16],22:[2,16],23:[2,16],24:[2,16],25:[2,16],26:[2,16],27:[2,16],28:[2,16],29:[2,16],30:[2,16],31:[2,16]},{6:[2,17],10:[2,17],11:[2,17],16:[2,17],20:[2,17],21:[2,17],22:[2,17],23:[2,17],24:[2,17],25:[2,17],26:[2,17],27:[2,17],28:[2,17],29:[2,17],30:[2,17],31:[2,17]},{6:[2,18],10:[2,18],11:[2,18],16:[2,18],20:[2,18],21:[2,18],22:[2,18],23:[2,18],24:[2,18],25:[2,18],26:[2,18],27:[2,18],28:[2,18],29:[2,18],30:[2,18],31:[2,18]},{6:[2,26],10:[2,26],11:[2,26],16:[2,26],20:[2,26],21:[2,26],22:[2,26],23:[2,26],24:[2,26],25:[2,26],26:[2,26],27:[2,26],28:[2,26],29:[2,26],30:[2,26],31:[2,26]},{10:[1,53],20:[1,54],21:[1,12],22:[1,13],23:[1,16],24:[1,15],25:[1,17],26:[1,18],27:[1,19],28:[1,20],29:[1,21],30:[1,22],31:[1,23]},{1:[2,1]},{6:[2,27],10:[2,27],11:[2,27],16:[2,27],20:[2,27],21:[1,12],22:[1,13],23:[2,27],24:[2,27],25:[1,17],26:[1,18],27:[2,27],28:[1,20],29:[2,27],30:[2,27],31:[2,27]},{6:[2,28],10:[1,53],11:[2,28],16:[2,28],20:[2,28],21:[1,12],22:[1,13],23:[2,28],24:[2,28],25:[1,17],26:[1,18],27:[1,19],28:[1,20],29:[1,21],30:[1,22],31:[1,23]},{6:[2,29],10:[1,53],11:[2,29],16:[2,29],20:[2,29],21:[1,12],22:[1,13],23:[2,29],24:[2,29],25:[1,17],26:[1,18],27:[1,19],28:[1,20],29:[1,21],30:[1,22],31:[1,23]},{6:[2,30],10:[2,30],11:[2,30],16:[2,30],20:[2,30],21:[1,12],22:[1,13],23:[2,30],24:[2,30],25:[1,17],26:[1,18],27:[2,30],28:[2,30],29:[2,30],30:[2,30],31:[2,30]},{6:[2,31],10:[2,31],11:[2,31],16:[2,31],20:[2,31],21:[1,12],22:[1,13],23:[2,31],24:[2,31],25:[1,17],26:[1,18],27:[2,31],28:[2,31],29:[2,31],30:[2,31],31:[2,31]},{6:[2,32],10:[2,32],11:[2,32],16:[2,32],20:[2,32],21:[1,12],22:[1,13],23:[2,32],24:[2,32],25:[1,17],26:[1,18],27:[2,32],28:[1,20],29:[2,32],30:[2,32],31:[2,32]},{6:[2,33],10:[2,33],11:[2,33],16:[2,33],20:[2,33],21:[1,12],22:[1,13],23:[2,33],24:[2,33],25:[1,17],26:[1,18],27:[2,33],29:[2,33],30:[2,33],31:[2,33]},{6:[2,34],10:[2,34],11:[2,34],16:[2,34],20:[2,34],21:[1,12],22:[1,13],23:[2,34],24:[2,34],25:[1,17],26:[1,18],27:[2,34],28:[1,20],29:[2,34],30:[2,34],31:[2,34]},{6:[2,35],10:[2,35],11:[2,35],16:[2,35],20:[2,35],21:[1,12],22:[1,13],23:[2,35],24:[2,35],25:[1,17],26:[1,18],27:[2,35],28:[1,20],29:[2,35],30:[2,35],31:[2,35]},{6:[2,36],10:[2,36],11:[2,36],16:[2,36],20:[2,36],21:[1,12],22:[1,13],23:[2,36],24:[2,36],25:[1,17],26:[1,18],27:[2,36],28:[1,20],29:[2,36],30:[2,36],31:[2,36]},{5:55,6:[2,4],9:25,10:[1,14],11:[1,24],21:[1,12],22:[1,13],23:[1,16],24:[1,15],25:[1,17],26:[1,18],27:[1,19],28:[1,20],29:[1,21],30:[1,22],31:[1,23]},{20:[1,56]},{10:[1,53],16:[1,57],20:[2,9],21:[1,12],22:[1,13],23:[1,16],24:[1,15],25:[1,17],26:[1,18],27:[1,19],28:[1,20],29:[1,21],30:[1,22],31:[1,23]},{4:40,7:[1,30],12:5,13:4,14:[1,9],17:6,18:7,19:[1,10],23:[1,8]},{6:[2,19],7:[2,19],10:[2,19],11:[2,19],14:[2,19],16:[2,19],19:[2,19],20:[2,19],21:[2,19],22:[2,19],23:[2,19],24:[2,19],25:[2,19],26:[2,19],27:[2,19],28:[2,19],29:[2,19],30:[2,19],31:[2,19]},{6:[1,58]},{6:[2,37],10:[2,37],11:[2,37],16:[2,37],20:[2,37],21:[2,37],22:[2,37],23:[2,37],24:[2,37],25:[2,37],26:[2,37],27:[2,37],28:[2,37],29:[2,37],30:[2,37],31:[2,37]},{4:52,7:[1,30],12:5,13:4,14:[1,9],15:59,17:6,18:7,19:[1,10],23:[1,8]},{1:[2,2]},{20:[2,10]}],
defaultActions: {24:[2,5],25:[2,6],39:[2,1],58:[2,2],59:[2,10]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "NUMBER";
break;
case 1:return "ID";
break;
case 2:return "INVOLUTION";
break;
case 3:return "CONJUGATE";
break;
case 4:return "LPAREN";
break;
case 5:return "RPAREN";
break;
case 6:return "POWER";
break;
case 7:return "OUTER_POWER";
break;
case 8:return "PLUS";
break;
case 9:return "MINUS";
break;
case 10:return "PRODUCT"
break;
case 11:return "INNER";
break;
case 12:return "OUTER";
break;
case 13:return "DIV";
break;
case 14:return "BACKDIV";
break;
case 15:return "COMMA";
break;
case 16:return "ASSIGN";
break;
case 17:return "SEMICOLON";
break;
case 18:return "WS";
break;
case 19:return "EOF";
break;
}
},
rules: [/^(?:[0-9]*\.?[0-9]+((E[-+]?|e[-+])[0-9]+)?)/,/^(?:[_a-zA-Z][_a-zA-Z0-9]*\b)/,/^(?:')/,/^(?:~)/,/^(?:\(\s*)/,/^(?:\s*\))/,/^(?:\s*\*\*\s*)/,/^(?:\s*\^\^\s*)/,/^(?:\s*\+\s*)/,/^(?:\s*-\s*)/,/^(?:\s*\*\s*)/,/^(?:\s*\.\s*)/,/^(?:\s*\^\s*)/,/^(?:\s*\/\s*)/,/^(?:\s*\\\s*)/,/^(?:\s*,\s*)/,/^(?:\s*=\s*)/,/^(?:\s*;\s*)/,/^(?:\s+)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}