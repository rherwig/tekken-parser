import { CommonTokenStream } from 'antlr4ts';

import { TekkenNotationLexer } from './parser/TekkenNotationLexer';
import { TekkenNotationParser } from './parser/TekkenNotationParser';
import { TekkenCombo } from './types';
import { TekkenVisitor } from './visitor';
import { TekkenInputStream } from './stream';

export * from './types';
export * from './visitor';

/**
 * Parse a Tekken combo notation string into a TekkenCombo object.
 * @param {string} notation
 * @example parse('d/f,2;b,4');
 */
export function parseTekkenNotation(notation: string): TekkenCombo {
    const charStream = new TekkenInputStream(notation);

    const lexer = new TekkenNotationLexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new TekkenNotationParser(tokens);
    const tree = parser.combo();

    const visitor = new TekkenVisitor();

    return visitor.visit(tree) as TekkenCombo;
}
