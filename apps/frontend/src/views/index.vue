<template>
    <div class="prose">
        <h1>Welcome</h1>
        <p>
            This website is a demo of the <code>@tekken/parser</code> library, used to translate Tekken Notation to button visualization.
        </p>
        <p>
            It can, for example, transform a combo like this: <code>d2;d/f2,1</code>
        </p>
        <p class="mb-2">
            To something like this:
        </p>

        <div class="not-prose">
            <Combo :combo="parse('d2;d/f2,1')"/>
        </div>

        <h2>Choosing a Layout</h2>
        <p>
            In order to help newer players or those unfamiliar with Tekken Notation execute moves,
            you can change the button layout to display arcade-stick- or controller-buttons.
        </p>
        <p>
            Use the dropdown in the top-right to change the layout.
        </p>

        <h2>Sharing Combos</h2>
        <p>
            Since there is not much else to do here at the moment, we suggest you checkout the combo sharing functionality.
        </p>

        <router-link to="/share" class="btn">Get Started</router-link>
    </div>
</template>

<script lang="ts" setup>
import parse from '@tekken/parser';

import Combo from '../components/combo.vue';
</script>
