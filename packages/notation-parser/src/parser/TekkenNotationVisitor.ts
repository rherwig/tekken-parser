// Generated from src/grammar/TekkenNotation.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ComboContext } from "./TekkenNotationParser";
import { MoveContext } from "./TekkenNotationParser";
import { InstructionContext } from "./TekkenNotationParser";
import { Action_inputContext } from "./TekkenNotationParser";
import { Movement_inputContext } from "./TekkenNotationParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TekkenNotationParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TekkenNotationVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TekkenNotationParser.combo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombo?: (ctx: ComboContext) => Result;

	/**
	 * Visit a parse tree produced by `TekkenNotationParser.move`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMove?: (ctx: MoveContext) => Result;

	/**
	 * Visit a parse tree produced by `TekkenNotationParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `TekkenNotationParser.action_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_input?: (ctx: Action_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `TekkenNotationParser.movement_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMovement_input?: (ctx: Movement_inputContext) => Result;
}

