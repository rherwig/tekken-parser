grammar TekkenNotation;

combo: (move ';')* move ;

move: (instruction ',')* instruction ;

instruction
    : movement_input '/' movement_input
    | movement_input '/' movement_input ':' action_input
    | (action_input '+')+ action_input
    | action_input '~' action_input
    | action_input
    | movement_input
    | SPECIAL
    | TEXT
    ;

action_input: ACTION_INPUT ;

movement_input
    : MOVEMENT_TAP_INPUT
    | MOVEMENT_HOLD_INPUT
    | MOVEMENT_NEUTRAL_INPUT
    ;

ACTION_INPUT: [1234] ;

MOVEMENT_TAP_INPUT: [fbdu] ;

MOVEMENT_HOLD_INPUT: [FBUD] ;

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
