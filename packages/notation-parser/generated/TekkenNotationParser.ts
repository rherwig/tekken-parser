// Generated from src/grammar/TekkenNotation.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import TekkenNotationVisitor from "./TekkenNotationVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TekkenNotationParser extends Parser {
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
	public static readonly RULE_combo = 0;
	public static readonly RULE_move = 1;
	public static readonly RULE_instruction = 2;
	public static readonly RULE_input = 3;
	public static readonly RULE_action_input = 4;
	public static readonly RULE_movement_input = 5;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "','", "'/'", 
                                                            "'+'", "'~'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ACTION_INPUT", 
                                                             "MOVEMENT_TAP_INPUT", 
                                                             "MOVEMENT_HOLD_INPUT", 
                                                             "MOVEMENT_NEUTRAL_INPUT", 
                                                             "MOVEMENT_ALIAS_INPUT", 
                                                             "TEXT", "SPECIAL" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"combo", "move", "instruction", "input", "action_input", "movement_input",
	];
	public get grammarFileName(): string { return "TekkenNotation.g4"; }
	public get literalNames(): (string | null)[] { return TekkenNotationParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TekkenNotationParser.symbolicNames; }
	public get ruleNames(): string[] { return TekkenNotationParser.ruleNames; }
	public get serializedATN(): number[] { return TekkenNotationParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TekkenNotationParser._ATN, TekkenNotationParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public combo(): ComboContext {
		let localctx: ComboContext = new ComboContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TekkenNotationParser.RULE_combo);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
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
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 20;
			this.move();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public move(): MoveContext {
		let localctx: MoveContext = new MoveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TekkenNotationParser.RULE_move);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
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
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 30;
			this.instruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let localctx: InstructionContext = new InstructionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, TekkenNotationParser.RULE_instruction);
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 32;
				localctx._combineMoves = this.input();
				this.state = 33;
				this.match(TekkenNotationParser.T__2);
				this.state = 34;
				this.input();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 36;
				localctx._combineActions = this.input();
				this.state = 37;
				this.match(TekkenNotationParser.T__3);
				this.state = 38;
				this.input();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 40;
				localctx._combineJustFrame = this.input();
				this.state = 41;
				this.match(TekkenNotationParser.T__4);
				this.state = 42;
				this.input();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 44;
				this.input();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 45;
				this.match(TekkenNotationParser.SPECIAL);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 46;
				this.match(TekkenNotationParser.TEXT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public input(): InputContext {
		let localctx: InputContext = new InputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TekkenNotationParser.RULE_input);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
			case 8:
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 49;
				this.movement_input();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public action_input(): Action_inputContext {
		let localctx: Action_inputContext = new Action_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TekkenNotationParser.RULE_action_input);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 53;
			this.match(TekkenNotationParser.ACTION_INPUT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public movement_input(): Movement_inputContext {
		let localctx: Movement_inputContext = new Movement_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TekkenNotationParser.RULE_movement_input);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 896) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,12,58,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,1,0,5,0,16,8,0,10,0,12,0,
	19,9,0,1,0,1,0,1,1,1,1,1,1,5,1,26,8,1,10,1,12,1,29,9,1,1,1,1,1,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,48,8,2,1,3,1,3,
	3,3,52,8,3,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,7,9,59,0,17,1,
	0,0,0,2,27,1,0,0,0,4,47,1,0,0,0,6,51,1,0,0,0,8,53,1,0,0,0,10,55,1,0,0,0,
	12,13,3,2,1,0,13,14,5,1,0,0,14,16,1,0,0,0,15,12,1,0,0,0,16,19,1,0,0,0,17,
	15,1,0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,20,21,3,2,1,0,21,1,
	1,0,0,0,22,23,3,4,2,0,23,24,5,2,0,0,24,26,1,0,0,0,25,22,1,0,0,0,26,29,1,
	0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,3,4,
	2,0,31,3,1,0,0,0,32,33,3,6,3,0,33,34,5,3,0,0,34,35,3,6,3,0,35,48,1,0,0,
	0,36,37,3,6,3,0,37,38,5,4,0,0,38,39,3,6,3,0,39,48,1,0,0,0,40,41,3,6,3,0,
	41,42,5,5,0,0,42,43,3,6,3,0,43,48,1,0,0,0,44,48,3,6,3,0,45,48,5,12,0,0,
	46,48,5,11,0,0,47,32,1,0,0,0,47,36,1,0,0,0,47,40,1,0,0,0,47,44,1,0,0,0,
	47,45,1,0,0,0,47,46,1,0,0,0,48,5,1,0,0,0,49,52,3,10,5,0,50,52,3,8,4,0,51,
	49,1,0,0,0,51,50,1,0,0,0,52,7,1,0,0,0,53,54,5,6,0,0,54,9,1,0,0,0,55,56,
	7,0,0,0,56,11,1,0,0,0,4,17,27,47,51];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TekkenNotationParser.__ATN) {
			TekkenNotationParser.__ATN = new ATNDeserializer().deserialize(TekkenNotationParser._serializedATN);
		}

		return TekkenNotationParser.__ATN;
	}


	static DecisionsToDFA = TekkenNotationParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ComboContext extends ParserRuleContext {
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public move_list(): MoveContext[] {
		return this.getTypedRuleContexts(MoveContext) as MoveContext[];
	}
	public move(i: number): MoveContext {
		return this.getTypedRuleContext(MoveContext, i) as MoveContext;
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_combo;
	}
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
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public instruction_list(): InstructionContext[] {
		return this.getTypedRuleContexts(InstructionContext) as InstructionContext[];
	}
	public instruction(i: number): InstructionContext {
		return this.getTypedRuleContext(InstructionContext, i) as InstructionContext;
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_move;
	}
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
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input_list(): InputContext[] {
		return this.getTypedRuleContexts(InputContext) as InputContext[];
	}
	public input(i: number): InputContext {
		return this.getTypedRuleContext(InputContext, i) as InputContext;
	}
	public SPECIAL(): TerminalNode {
		return this.getToken(TekkenNotationParser.SPECIAL, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(TekkenNotationParser.TEXT, 0);
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_instruction;
	}
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
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public movement_input(): Movement_inputContext {
		return this.getTypedRuleContext(Movement_inputContext, 0) as Movement_inputContext;
	}
	public action_input(): Action_inputContext {
		return this.getTypedRuleContext(Action_inputContext, 0) as Action_inputContext;
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_input;
	}
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
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACTION_INPUT(): TerminalNode {
		return this.getToken(TekkenNotationParser.ACTION_INPUT, 0);
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_action_input;
	}
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
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MOVEMENT_TAP_INPUT(): TerminalNode {
		return this.getToken(TekkenNotationParser.MOVEMENT_TAP_INPUT, 0);
	}
	public MOVEMENT_HOLD_INPUT(): TerminalNode {
		return this.getToken(TekkenNotationParser.MOVEMENT_HOLD_INPUT, 0);
	}
	public MOVEMENT_NEUTRAL_INPUT(): TerminalNode {
		return this.getToken(TekkenNotationParser.MOVEMENT_NEUTRAL_INPUT, 0);
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_movement_input;
	}
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitMovement_input) {
			return visitor.visitMovement_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
