import ContainerLayout from '@/components/layouts/container-layout';
import MoveDisplay from '@/components/move-display/move-display';

/**
 * The main page of the website.
 * @route /
 * @constructor
 */
export default function IndexPage() {
    return (
        <ContainerLayout>
            <div className="prose prose-teal prose-invert">
                <h1>Welcome</h1>
                <p>
                    This website is a demo of the <code>@tekken/parser</code>{' '}
                    library, used to translate Tekken Notation to button
                    visualization.
                </p>
                <p>
                    It can, for example, transform a combo like this:{' '}
                    <code>d,2;d/f,2,1</code>
                </p>
                <p className="mb-2">To something like this:</p>

                <div className="not-prose">
                    <MoveDisplay notation={'d+2;d/f+2,1'} />
                </div>

                <div className="not-prose"></div>

                <h2>Choosing a Layout</h2>
                <p>
                    In order to help newer players or those unfamiliar with
                    Tekken Notation execute moves, you can change the button
                    layout to display arcade-stick- or controller-buttons.
                </p>
                <p>Use the dropdown in the top-right to change the layout.</p>

                <h2>Sharing Combos</h2>
                <p>
                    Since there is not much else to do here at the moment, we
                    suggest you checkout the combo sharing functionality.
                </p>

                {/*<TsButton*/}
                {/*    is={'a'}*/}
                {/*    href="/share"*/}
                {/*>*/}
                {/*    Get Started*/}
                {/*</TsButton>*/}
            </div>
        </ContainerLayout>
    );
}
