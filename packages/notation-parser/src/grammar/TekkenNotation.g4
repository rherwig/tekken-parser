grammar TekkenNotation;

combo: (move ';')* move ;

move: (instruction ',')* instruction ;

instruction
    : combineMoves = input '/' input
    | combineActions = input '+' input
    | combineJustFrame = input '~' input
    | input
    | SPECIAL
    | TEXT
    ;

input
    : movement_input
    | action_input
    ;

action_input: ACTION_INPUT ;

movement_input
    : MOVEMENT_TAP_INPUT
    | MOVEMENT_HOLD_INPUT
    | MOVEMENT_NEUTRAL_INPUT
    ;

ACTION_INPUT
    : '1'
    | '2'
    | '3'
    | '4'
    ;

MOVEMENT_TAP_INPUT
    : 'f'
    | 'b'
    | 'u'
    | 'd'
    ;

MOVEMENT_HOLD_INPUT
    : 'F'
    | 'B'
    | 'U'
    | 'D'
    ;

MOVEMENT_NEUTRAL_INPUT
    : 'n'
    | 'N'
    ;

MOVEMENT_ALIAS_INPUT
    : 'QCF'
    | 'QCB'
    | 'HCF'
    | 'HCB'
    ;

TEXT: '"' [a-zA-Z0-9]* '"' ;

SPECIAL
    : MOVEMENT_ALIAS
    | RAGE_ALIAS
    | WALL_ALIAS
    | STATE_ALIAS
    | STANCE_ALIAS
    ;

fragment MOVEMENT_ALIAS
    : 'DASH'
    | 'CD'
    | 'SS'
    | 'SSL'
    | 'SSR'
    | 'SW'
    | 'SWL'
    | 'SWR'
    ;
fragment RAGE_ALIAS
    : 'RAGE'
    | 'RAGEART'
    | 'RAGEDRIVE'
    ;

fragment WALL_ALIAS
    : 'WALL'
    | 'W!'
    | 'W'
    ;

fragment HIT_ALIAS
    : 'S!'
    | 'S'
    | 'A!'
    | 'A'
    | 'KND'
    | 'CH'
    ;

fragment STATE_ALIAS
    : 'BT'
    | 'FC'
    | 'WS'
    | 'WR'
    ;

fragment STANCE_ALIAS
    : 'RAI'
    ;
