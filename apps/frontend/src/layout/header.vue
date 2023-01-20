<template>
    <div class="navbar bg-base-100">
        <div class="container">
            <div class="flex-1">
                <router-link
                    to="/"
                    class="btn btn-ghost normal-case text-xl -ml-4"
                >
                    Tekken Parser
                </router-link>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1 mr-2">
                    <li>
                        <router-link to="/share">
                            Share Combo
                        </router-link>
                    </li>
                </ul>

                <select
                    class="select select-accent"
                    :value="preferences.layout"
                    @change="handleLayoutChange"
                >
                    <option value="arcade">
                        Arcade
                    </option>
                    <option value="controller">
                        Controller
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { usePreferencesStore } from '@/store/preferences';

const preferences = usePreferencesStore();

/**
 * Changes the action button layout to the user's preference.
 * @param event
 */
const handleLayoutChange = (event: any) => {
    preferences.setLayout(event.target.value);
}
</script>
