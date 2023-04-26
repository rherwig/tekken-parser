// Generated from src/grammar/TekkenNotation.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TekkenNotationVisitor } from "./TekkenNotationVisitor";


export class TekkenNotationParser extends Parser {
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
	public static readonly RULE_combo = 0;
	public static readonly RULE_move = 1;
	public static readonly RULE_instruction = 2;
	public static readonly RULE_input = 3;
	public static readonly RULE_action_input = 4;
	public static readonly RULE_movement_input = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"combo", "move", "instruction", "input", "action_input", "movement_input",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'/'", "'+'", "'~'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "ACTION_INPUT", 
		"MOVEMENT_TAP_INPUT", "MOVEMENT_HOLD_INPUT", "MOVEMENT_NEUTRAL_INPUT", 
		"MOVEMENT_ALIAS_INPUT", "TEXT", "SPECIAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TekkenNotationParser._LITERAL_NAMES, TekkenNotationParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TekkenNotationParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TekkenNotation.g4"; }

	// @Override
	public get ruleNames(): string[] { return TekkenNotationParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TekkenNotationParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TekkenNotationParser._ATN, this);
	}
	// @RuleVersion(0)
	public combo(): ComboContext {
		let _localctx: ComboContext = new ComboContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TekkenNotationParser.RULE_combo);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 12;
					this.move();
					this.state = 13;
					this.match(TekkenNotationParser.T__0);
					}
					}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 20;
			this.move();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move(): MoveContext {
		let _localctx: MoveContext = new MoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TekkenNotationParser.RULE_move);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 22;
					this.instruction();
					this.state = 23;
					this.match(TekkenNotationParser.T__1);
					}
					}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 30;
			this.instruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TekkenNotationParser.RULE_instruction);
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 32;
				_localctx._combineMoves = this.input();
				this.state = 33;
				this.match(TekkenNotationParser.T__2);
				this.state = 34;
				this.input();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 36;
				_localctx._combineActions = this.input();
				this.state = 37;
				this.match(TekkenNotationParser.T__3);
				this.state = 38;
				this.input();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 40;
				_localctx._combineJustFrame = this.input();
				this.state = 41;
				this.match(TekkenNotationParser.T__4);
				this.state = 42;
				this.input();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 44;
				this.input();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 45;
				this.match(TekkenNotationParser.SPECIAL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 46;
				this.match(TekkenNotationParser.TEXT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public input(): InputContext {
		let _localctx: InputContext = new InputContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TekkenNotationParser.RULE_input);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TekkenNotationParser.MOVEMENT_TAP_INPUT:
			case TekkenNotationParser.MOVEMENT_HOLD_INPUT:
			case TekkenNotationParser.MOVEMENT_NEUTRAL_INPUT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 49;
				this.movement_input();
				}
				break;
			case TekkenNotationParser.ACTION_INPUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 50;
				this.action_input();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public action_input(): Action_inputContext {
		let _localctx: Action_inputContext = new Action_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TekkenNotationParser.RULE_action_input);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(TekkenNotationParser.ACTION_INPUT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public movement_input(): Movement_inputContext {
		let _localctx: Movement_inputContext = new Movement_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TekkenNotationParser.RULE_movement_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TekkenNotationParser.MOVEMENT_TAP_INPUT) | (1 << TekkenNotationParser.MOVEMENT_HOLD_INPUT) | (1 << TekkenNotationParser.MOVEMENT_NEUTRAL_INPUT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E<\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\x1C\n\x03\f\x03\x0E\x03" +
		"\x1F\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x042\n\x04\x03\x05\x03\x05\x05\x056\n\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x02\x03\x03\x02\t\v\x02=\x02\x13\x03\x02\x02\x02\x04\x1D\x03\x02" +
		"\x02\x02\x061\x03\x02\x02\x02\b5\x03\x02\x02\x02\n7\x03\x02\x02\x02\f" +
		"9\x03\x02\x02\x02\x0E\x0F\x05\x04\x03\x02\x0F\x10\x07\x03\x02\x02\x10" +
		"\x12\x03\x02\x02\x02\x11\x0E\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13" +
		"\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x16\x03\x02\x02\x02\x15" +
		"\x13\x03\x02\x02\x02\x16\x17\x05\x04\x03\x02\x17\x03\x03\x02\x02\x02\x18" +
		"\x19\x05\x06\x04\x02\x19\x1A\x07\x04\x02\x02\x1A\x1C\x03\x02\x02\x02\x1B" +
		"\x18\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D" +
		"\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x05" +
		"\x06\x04\x02!\x05\x03\x02\x02\x02\"#\x05\b\x05\x02#$\x07\x05\x02\x02$" +
		"%\x05\b\x05\x02%2\x03\x02\x02\x02&\'\x05\b\x05\x02\'(\x07\x06\x02\x02" +
		"()\x05\b\x05\x02)2\x03\x02\x02\x02*+\x05\b\x05\x02+,\x07\x07\x02\x02," +
		"-\x05\b\x05\x02-2\x03\x02\x02\x02.2\x05\b\x05\x02/2\x07\x0E\x02\x0202" +
		"\x07\r\x02\x021\"\x03\x02\x02\x021&\x03\x02\x02\x021*\x03\x02\x02\x02" +
		"1.\x03\x02\x02\x021/\x03\x02\x02\x0210\x03\x02\x02\x022\x07\x03\x02\x02" +
		"\x0236\x05\f\x07\x0246\x05\n\x06\x0253\x03\x02\x02\x0254\x03\x02\x02\x02" +
		"6\t\x03\x02\x02\x0278\x07\b\x02\x028\v\x03\x02\x02\x029:\t\x02\x02\x02" +
		":\r\x03\x02\x02\x02\x06\x13\x1D15";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TekkenNotationParser.__ATN) {
			TekkenNotationParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TekkenNotationParser._serializedATN));
		}

		return TekkenNotationParser.__ATN;
	}

}

export class ComboContext extends ParserRuleContext {
	public move(): MoveContext[];
	public move(i: number): MoveContext;
	public move(i?: number): MoveContext | MoveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoveContext);
		} else {
			return this.getRuleContext(i, MoveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TekkenNotationParser.RULE_combo; }
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitCombo) {
			return visitor.visitCombo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoveContext extends ParserRuleContext {
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TekkenNotationParser.RULE_move; }
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitMove) {
			return visitor.visitMove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public _combineMoves!: InputContext;
	public _combineActions!: InputContext;
	public _combineJustFrame!: InputContext;
	public input(): InputContext[];
	public input(i: number): InputContext;
	public input(i?: number): InputContext | InputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputContext);
		} else {
			return this.getRuleContext(i, InputContext);
		}
	}
	public SPECIAL(): TerminalNode | undefined { return this.tryGetToken(TekkenNotationParser.SPECIAL, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(TekkenNotationParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TekkenNotationParser.RULE_instruction; }
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputContext extends ParserRuleContext {
	public movement_input(): Movement_inputContext | undefined {
		return this.tryGetRuleContext(0, Movement_inputContext);
	}
	public action_input(): Action_inputContext | undefined {
		return this.tryGetRuleContext(0, Action_inputContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TekkenNotationParser.RULE_input; }
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitInput) {
			return visitor.visitInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Action_inputContext extends ParserRuleContext {
	public ACTION_INPUT(): TerminalNode { return this.getToken(TekkenNotationParser.ACTION_INPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TekkenNotationParser.RULE_action_input; }
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitAction_input) {
			return visitor.visitAction_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Movement_inputContext extends ParserRuleContext {
	public MOVEMENT_TAP_INPUT(): TerminalNode | undefined { return this.tryGetToken(TekkenNotationParser.MOVEMENT_TAP_INPUT, 0); }
	public MOVEMENT_HOLD_INPUT(): TerminalNode | undefined { return this.tryGetToken(TekkenNotationParser.MOVEMENT_HOLD_INPUT, 0); }
	public MOVEMENT_NEUTRAL_INPUT(): TerminalNode | undefined { return this.tryGetToken(TekkenNotationParser.MOVEMENT_NEUTRAL_INPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TekkenNotationParser.RULE_movement_input; }
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitMovement_input) {
			return visitor.visitMovement_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


