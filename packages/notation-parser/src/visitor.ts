import { AbstractParseTreeVisitor } from 'antlr4ts/tree';

import {
    ComboContext,
    InputContext,
    InstructionContext,
    MoveContext,
} from './parser/TekkenNotationParser';
import { TekkenNotationVisitor } from './parser/TekkenNotationVisitor';
import {
    TekkenCombo,
    TekkenInstruction,
    TekkenInstructionType,
    TekkenMove,
} from './types';

/**
 * Visitor for the TekkenNotationParser that converts the parse tree into a
 * TekkenCombo object.
 */
export class TekkenVisitor
    extends AbstractParseTreeVisitor<TekkenCombo>
    implements TekkenNotationVisitor<any>
{
    protected defaultResult(): TekkenCombo {
        return {
            moves: [],
        };
    }

    /**
     * Visit a parse tree produced by `TekkenNotationParser.combo`.
     * This is the entrypoint of the program.
     * @param {ComboContext} ctx
     */
    visitCombo: (ctx: ComboContext) => TekkenCombo = (
        ctx: ComboContext,
    ): TekkenCombo => {
        const result: TekkenCombo = {
            moves: [],
        };

        for (const moveCtx of ctx.move()) {
            const moveResult = this.visitMove(moveCtx);
            if (!moveResult) {
                continue;
            }

            result.moves.push(moveResult);
        }

        return result;
    };

    /**
     * Visit a parse tree produced by `TekkenNotationParser.move`.
     * This is called by the `visitCombo` method.
     * @param {MoveContext} ctx
     */
    visitMove: (ctx: MoveContext) => TekkenMove | null = (
        ctx: MoveContext,
    ): TekkenMove | null => {
        if (!ctx.childCount) {
            return null;
        }

        const notation = ctx.text;
        const instructions: TekkenInstruction[] = [];

        for (const instructionCtx of ctx.instruction()) {
            const instructionResult = this.visitInstruction(instructionCtx);
            if (!instructionResult) {
                continue;
            }

            instructions.push(instructionResult);
        }

        return {
            notation,
            instructions,
        };
    };

    /**
     * Visit a parse tree produced by `TekkenNotationParser.instruction`.
     * This is called by the `visitMove` method.
     * @param {InstructionContext} ctx
     */
    visitInstruction: (ctx: InstructionContext) => TekkenInstruction | null = (
        ctx: InstructionContext,
    ): TekkenInstruction | null => {
        if (!ctx.childCount) {
            return null;
        }

        const notation = ctx.text;
        const slug = notation.replace(/[^a-zA-Z0-9]/g, '');
        const type: TekkenInstructionType = ctx
            .input()
            .reduce(
                (
                    instructionType: TekkenInstructionType,
                    inputCtx: InputContext,
                ) => {
                    if (inputCtx.action_input()) {
                        return TekkenInstructionType.ACTION;
                    }

                    if (inputCtx.movement_input()) {
                        return TekkenInstructionType.MOVE;
                    }

                    return instructionType;
                },
                TekkenInstructionType.UNKNOWN,
            );

        return {
            type,
            notation,
            slug,
        };
    };
}
