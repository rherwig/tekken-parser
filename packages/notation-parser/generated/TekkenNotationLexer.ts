// Generated from src/grammar/TekkenNotation.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class TekkenNotationLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly ACTION_INPUT = 6;
	public static readonly MOVEMENT_TAP_INPUT = 7;
	public static readonly MOVEMENT_HOLD_INPUT = 8;
	public static readonly MOVEMENT_NEUTRAL_INPUT = 9;
	public static readonly MOVEMENT_ALIAS_INPUT = 10;
	public static readonly TEXT = 11;
	public static readonly SPECIAL = 12;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "';'", "','", "'/'", 
                                                   "'+'", "'~'" ];
	public static readonly symbolicNames: string[] = [ null, null, null, null, 
                                                    null, null, "ACTION_INPUT", 
                                                    "MOVEMENT_TAP_INPUT", 
                                                    "MOVEMENT_HOLD_INPUT", 
                                                    "MOVEMENT_NEUTRAL_INPUT", 
                                                    "MOVEMENT_ALIAS_INPUT", 
                                                    "TEXT", "SPECIAL" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "ACTION_INPUT", "MOVEMENT_TAP_INPUT", 
		"MOVEMENT_HOLD_INPUT", "MOVEMENT_NEUTRAL_INPUT", "MOVEMENT_ALIAS_INPUT", 
		"TEXT", "SPECIAL", "MOVEMENT_ALIAS", "RAGE_ALIAS", "WALL_ALIAS", "HIT_ALIAS", 
		"STATE_ALIAS", "STANCE_ALIAS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, TekkenNotationLexer._ATN, TekkenNotationLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "TekkenNotation.g4"; }

	public get literalNames(): (string | null)[] { return TekkenNotationLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return TekkenNotationLexer.symbolicNames; }
	public get ruleNames(): string[] { return TekkenNotationLexer.ruleNames; }

	public get serializedATN(): number[] { return TekkenNotationLexer._serializedATN; }

	public get channelNames(): string[] { return TekkenNotationLexer.channelNames; }

	public get modeNames(): string[] { return TekkenNotationLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,12,167,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,
	7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,68,8,
	9,1,10,1,10,5,10,72,8,10,10,10,12,10,75,9,10,1,10,1,10,1,11,1,11,1,11,1,
	11,1,11,3,11,84,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,108,8,
	12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,1,13,1,13,1,13,3,13,130,8,13,1,14,1,14,1,14,1,14,1,14,1,
	14,1,14,3,14,139,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,3,15,152,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,162,8,16,
	1,17,1,17,1,17,1,17,0,0,18,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
	21,11,23,12,25,0,27,0,29,0,31,0,33,0,35,0,1,0,4,4,0,98,98,100,100,102,102,
	117,117,4,0,66,66,68,68,70,70,85,85,2,0,78,78,110,110,3,0,48,57,65,90,97,
	122,187,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
	1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,
	0,0,23,1,0,0,0,1,37,1,0,0,0,3,39,1,0,0,0,5,41,1,0,0,0,7,43,1,0,0,0,9,45,
	1,0,0,0,11,47,1,0,0,0,13,49,1,0,0,0,15,51,1,0,0,0,17,53,1,0,0,0,19,67,1,
	0,0,0,21,69,1,0,0,0,23,83,1,0,0,0,25,107,1,0,0,0,27,129,1,0,0,0,29,138,
	1,0,0,0,31,151,1,0,0,0,33,161,1,0,0,0,35,163,1,0,0,0,37,38,5,59,0,0,38,
	2,1,0,0,0,39,40,5,44,0,0,40,4,1,0,0,0,41,42,5,47,0,0,42,6,1,0,0,0,43,44,
	5,43,0,0,44,8,1,0,0,0,45,46,5,126,0,0,46,10,1,0,0,0,47,48,2,49,52,0,48,
	12,1,0,0,0,49,50,7,0,0,0,50,14,1,0,0,0,51,52,7,1,0,0,52,16,1,0,0,0,53,54,
	7,2,0,0,54,18,1,0,0,0,55,56,5,81,0,0,56,57,5,67,0,0,57,68,5,70,0,0,58,59,
	5,81,0,0,59,60,5,67,0,0,60,68,5,66,0,0,61,62,5,72,0,0,62,63,5,67,0,0,63,
	68,5,70,0,0,64,65,5,72,0,0,65,66,5,67,0,0,66,68,5,66,0,0,67,55,1,0,0,0,
	67,58,1,0,0,0,67,61,1,0,0,0,67,64,1,0,0,0,68,20,1,0,0,0,69,73,5,34,0,0,
	70,72,7,3,0,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,
	76,1,0,0,0,75,73,1,0,0,0,76,77,5,34,0,0,77,22,1,0,0,0,78,84,3,25,12,0,79,
	84,3,27,13,0,80,84,3,29,14,0,81,84,3,33,16,0,82,84,3,35,17,0,83,78,1,0,
	0,0,83,79,1,0,0,0,83,80,1,0,0,0,83,81,1,0,0,0,83,82,1,0,0,0,84,24,1,0,0,
	0,85,86,5,68,0,0,86,87,5,65,0,0,87,88,5,83,0,0,88,108,5,72,0,0,89,90,5,
	67,0,0,90,108,5,68,0,0,91,92,5,83,0,0,92,108,5,83,0,0,93,94,5,83,0,0,94,
	95,5,83,0,0,95,108,5,76,0,0,96,97,5,83,0,0,97,98,5,83,0,0,98,108,5,82,0,
	0,99,100,5,83,0,0,100,108,5,87,0,0,101,102,5,83,0,0,102,103,5,87,0,0,103,
	108,5,76,0,0,104,105,5,83,0,0,105,106,5,87,0,0,106,108,5,82,0,0,107,85,
	1,0,0,0,107,89,1,0,0,0,107,91,1,0,0,0,107,93,1,0,0,0,107,96,1,0,0,0,107,
	99,1,0,0,0,107,101,1,0,0,0,107,104,1,0,0,0,108,26,1,0,0,0,109,110,5,82,
	0,0,110,111,5,65,0,0,111,112,5,71,0,0,112,130,5,69,0,0,113,114,5,82,0,0,
	114,115,5,65,0,0,115,116,5,71,0,0,116,117,5,69,0,0,117,118,5,65,0,0,118,
	119,5,82,0,0,119,130,5,84,0,0,120,121,5,82,0,0,121,122,5,65,0,0,122,123,
	5,71,0,0,123,124,5,69,0,0,124,125,5,68,0,0,125,126,5,82,0,0,126,127,5,73,
	0,0,127,128,5,86,0,0,128,130,5,69,0,0,129,109,1,0,0,0,129,113,1,0,0,0,129,
	120,1,0,0,0,130,28,1,0,0,0,131,132,5,87,0,0,132,133,5,65,0,0,133,134,5,
	76,0,0,134,139,5,76,0,0,135,136,5,87,0,0,136,139,5,33,0,0,137,139,5,87,
	0,0,138,131,1,0,0,0,138,135,1,0,0,0,138,137,1,0,0,0,139,30,1,0,0,0,140,
	141,5,83,0,0,141,152,5,33,0,0,142,152,5,83,0,0,143,144,5,65,0,0,144,152,
	5,33,0,0,145,152,5,65,0,0,146,147,5,75,0,0,147,148,5,78,0,0,148,152,5,68,
	0,0,149,150,5,67,0,0,150,152,5,72,0,0,151,140,1,0,0,0,151,142,1,0,0,0,151,
	143,1,0,0,0,151,145,1,0,0,0,151,146,1,0,0,0,151,149,1,0,0,0,152,32,1,0,
	0,0,153,154,5,66,0,0,154,162,5,84,0,0,155,156,5,70,0,0,156,162,5,67,0,0,
	157,158,5,87,0,0,158,162,5,83,0,0,159,160,5,87,0,0,160,162,5,82,0,0,161,
	153,1,0,0,0,161,155,1,0,0,0,161,157,1,0,0,0,161,159,1,0,0,0,162,34,1,0,
	0,0,163,164,5,82,0,0,164,165,5,65,0,0,165,166,5,73,0,0,166,36,1,0,0,0,9,
	0,67,73,83,107,129,138,151,161,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TekkenNotationLexer.__ATN) {
			TekkenNotationLexer.__ATN = new ATNDeserializer().deserialize(TekkenNotationLexer._serializedATN);
		}

		return TekkenNotationLexer.__ATN;
	}


	static DecisionsToDFA = TekkenNotationLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}