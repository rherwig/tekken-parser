import { CharStream, CommonTokenStream } from 'antlr4';
import Lexer from '@generated/TekkenNotationLexer';
import Parser from '@generated/TekkenNotationParser';

import { TekkenCombo } from '@/types';
import { TekkenVisitor } from '@/visitor';

export * from './types';
export * from './visitor';

/**
 * Parse a Tekken combo notation string into a TekkenCombo object.
 * @param {string} notation
 * @example parse('d/f,2;b,4');
 */
export function parseTekkenNotation(notation: string): TekkenCombo {
    const chars = new CharStream(notation);
    const lexer = new Lexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new Parser(tokens);
    const tree = parser.combo();

    const visitor = new TekkenVisitor();

    return visitor.visit(tree);
}
