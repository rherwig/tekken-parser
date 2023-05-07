// Generated from src/grammar/TekkenNotation.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TekkenNotationLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly ACTION_INPUT = 7;
	public static readonly MOVEMENT_TAP_INPUT = 8;
	public static readonly MOVEMENT_HOLD_INPUT = 9;
	public static readonly MOVEMENT_NEUTRAL_INPUT = 10;
	public static readonly MOVEMENT_ALIAS_INPUT = 11;
	public static readonly TEXT = 12;
	public static readonly SPECIAL = 13;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "ACTION_INPUT", "MOVEMENT_TAP_INPUT", 
		"MOVEMENT_HOLD_INPUT", "MOVEMENT_NEUTRAL_INPUT", "MOVEMENT_ALIAS_INPUT", 
		"TEXT", "SPECIAL", "MOVEMENT_ALIAS", "RAGE_ALIAS", "WALL_ALIAS", "HIT_ALIAS", 
		"STATE_ALIAS", "STANCE_ALIAS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'/'", "':'", "'+'", "'~'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"ACTION_INPUT", "MOVEMENT_TAP_INPUT", "MOVEMENT_HOLD_INPUT", "MOVEMENT_NEUTRAL_INPUT", 
		"MOVEMENT_ALIAS_INPUT", "TEXT", "SPECIAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TekkenNotationLexer._LITERAL_NAMES, TekkenNotationLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TekkenNotationLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TekkenNotationLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "TekkenNotation.g4"; }

	// @Override
	public get ruleNames(): string[] { return TekkenNotationLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TekkenNotationLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TekkenNotationLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TekkenNotationLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0F\xAD\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fJ\n\f\x03\r\x03\r\x07\rN\n\r\f\r" +
		"\x0E\rQ\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"Z\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0Fr\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\x88\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\x91\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\x9E\n\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xA8\n\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x02\x1F\x02\x02!" +
		"\x02\x02#\x02\x02%\x02\x02\'\x02\x02\x03\x02\x07\x03\x0236\x06\x02ddf" +
		"fhhww\x06\x02DDFFHHWW\x04\x02PPpp\x06\x02\"\"2;C\\c|\x02\xC1\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x03)\x03\x02\x02\x02\x05+\x03\x02\x02\x02\x07-\x03\x02\x02\x02" +
		"\t/\x03\x02\x02\x02\v1\x03\x02\x02\x02\r3\x03\x02\x02\x02\x0F5\x03\x02" +
		"\x02\x02\x117\x03\x02\x02\x02\x139\x03\x02\x02\x02\x15;\x03\x02\x02\x02" +
		"\x17I\x03\x02\x02\x02\x19K\x03\x02\x02\x02\x1BY\x03\x02\x02\x02\x1Dq\x03" +
		"\x02\x02\x02\x1F\x87\x03\x02\x02\x02!\x90\x03\x02\x02\x02#\x9D\x03\x02" +
		"\x02\x02%\xA7\x03\x02\x02\x02\'\xA9\x03\x02\x02\x02)*\x07=\x02\x02*\x04" +
		"\x03\x02\x02\x02+,\x07.\x02\x02,\x06\x03\x02\x02\x02-.\x071\x02\x02.\b" +
		"\x03\x02\x02\x02/0\x07<\x02\x020\n\x03\x02\x02\x0212\x07-\x02\x022\f\x03" +
		"\x02\x02\x0234\x07\x80\x02\x024\x0E\x03\x02\x02\x0256\t\x02\x02\x026\x10" +
		"\x03\x02\x02\x0278\t\x03\x02\x028\x12\x03\x02\x02\x029:\t\x04\x02\x02" +
		":\x14\x03\x02\x02\x02;<\t\x05\x02\x02<\x16\x03\x02\x02\x02=>\x07S\x02" +
		"\x02>?\x07E\x02\x02?J\x07H\x02\x02@A\x07S\x02\x02AB\x07E\x02\x02BJ\x07" +
		"D\x02\x02CD\x07J\x02\x02DE\x07E\x02\x02EJ\x07H\x02\x02FG\x07J\x02\x02" +
		"GH\x07E\x02\x02HJ\x07D\x02\x02I=\x03\x02\x02\x02I@\x03\x02\x02\x02IC\x03" +
		"\x02\x02\x02IF\x03\x02\x02\x02J\x18\x03\x02\x02\x02KO\x07$\x02\x02LN\t" +
		"\x06\x02\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03" +
		"\x02\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02\x02RS\x07$\x02\x02S\x1A\x03" +
		"\x02\x02\x02TZ\x05\x1D\x0F\x02UZ\x05\x1F\x10\x02VZ\x05!\x11\x02WZ\x05" +
		"%\x13\x02XZ\x05\'\x14\x02YT\x03\x02\x02\x02YU\x03\x02\x02\x02YV\x03\x02" +
		"\x02\x02YW\x03\x02\x02\x02YX\x03\x02\x02\x02Z\x1C\x03\x02\x02\x02[\\\x07" +
		"F\x02\x02\\]\x07C\x02\x02]^\x07U\x02\x02^r\x07J\x02\x02_`\x07E\x02\x02" +
		"`r\x07F\x02\x02ab\x07U\x02\x02br\x07U\x02\x02cd\x07U\x02\x02de\x07U\x02" +
		"\x02er\x07N\x02\x02fg\x07U\x02\x02gh\x07U\x02\x02hr\x07T\x02\x02ij\x07" +
		"U\x02\x02jr\x07Y\x02\x02kl\x07U\x02\x02lm\x07Y\x02\x02mr\x07N\x02\x02" +
		"no\x07U\x02\x02op\x07Y\x02\x02pr\x07T\x02\x02q[\x03\x02\x02\x02q_\x03" +
		"\x02\x02\x02qa\x03\x02\x02\x02qc\x03\x02\x02\x02qf\x03\x02\x02\x02qi\x03" +
		"\x02\x02\x02qk\x03\x02\x02\x02qn\x03\x02\x02\x02r\x1E\x03\x02\x02\x02" +
		"st\x07T\x02\x02tu\x07C\x02\x02uv\x07I\x02\x02v\x88\x07G\x02\x02wx\x07" +
		"T\x02\x02xy\x07C\x02\x02yz\x07I\x02\x02z{\x07G\x02\x02{|\x07C\x02\x02" +
		"|}\x07T\x02\x02}\x88\x07V\x02\x02~\x7F\x07T\x02\x02\x7F\x80\x07C\x02\x02" +
		"\x80\x81\x07I\x02\x02\x81\x82\x07G\x02\x02\x82\x83\x07F\x02\x02\x83\x84" +
		"\x07T\x02\x02\x84\x85\x07K\x02\x02\x85\x86\x07X\x02\x02\x86\x88\x07G\x02" +
		"\x02\x87s\x03\x02\x02\x02\x87w\x03\x02\x02\x02\x87~\x03\x02\x02\x02\x88" +
		" \x03\x02\x02\x02\x89\x8A\x07Y\x02\x02\x8A\x8B\x07C\x02\x02\x8B\x8C\x07" +
		"N\x02\x02\x8C\x91\x07N\x02\x02\x8D\x8E\x07Y\x02\x02\x8E\x91\x07#\x02\x02" +
		"\x8F\x91\x07Y\x02\x02\x90\x89\x03\x02\x02\x02\x90\x8D\x03\x02\x02\x02" +
		"\x90\x8F\x03\x02\x02\x02\x91\"\x03\x02\x02\x02\x92\x93\x07U\x02\x02\x93" +
		"\x9E\x07#\x02\x02\x94\x9E\x07U\x02\x02\x95\x96\x07C\x02\x02\x96\x9E\x07" +
		"#\x02\x02\x97\x9E\x07C\x02\x02\x98\x99\x07M\x02\x02\x99\x9A\x07P\x02\x02" +
		"\x9A\x9E\x07F\x02\x02\x9B\x9C\x07E\x02\x02\x9C\x9E\x07J\x02\x02\x9D\x92" +
		"\x03\x02\x02\x02\x9D\x94\x03\x02\x02\x02\x9D\x95\x03\x02\x02\x02\x9D\x97" +
		"\x03\x02\x02\x02\x9D\x98\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E$" +
		"\x03\x02\x02\x02\x9F\xA0\x07D\x02\x02\xA0\xA8\x07V\x02\x02\xA1\xA2\x07" +
		"H\x02\x02\xA2\xA8\x07E\x02\x02\xA3\xA4\x07Y\x02\x02\xA4\xA8\x07U\x02\x02" +
		"\xA5\xA6\x07Y\x02\x02\xA6\xA8\x07T\x02\x02\xA7\x9F\x03\x02\x02\x02\xA7" +
		"\xA1\x03\x02\x02\x02\xA7\xA3\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8" +
		"&\x03\x02\x02\x02\xA9\xAA\x07T\x02\x02\xAA\xAB\x07C\x02\x02\xAB\xAC\x07" +
		"K\x02\x02\xAC(\x03\x02\x02\x02\v\x02IOYq\x87\x90\x9D\xA7\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TekkenNotationLexer.__ATN) {
			TekkenNotationLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TekkenNotationLexer._serializedATN));
		}

		return TekkenNotationLexer.__ATN;
	}

}

