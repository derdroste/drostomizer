<script>
    import {exerciseRoll} from '../store/store'
    import { getDay } from '../utils/getDay';
    import { randomInt } from '../utils/randomInt';
    import {push} from 'svelte-spa-router'
    import Card from './Card.svelte';
    import Button from './Button.svelte';
    import {general} from '../translations/general'

    const handleDaily = () => {
        if (!$exerciseRoll.workouts || $exerciseRoll.workouts.length === 0) {
            push('/')
        }
    }

    const rollReps = (index) => {
        const today = getDay(new Date());

        if ($exerciseRoll.timeStamp === today && !$exerciseRoll.workouts[index].exercise.reps) {
            const reps = randomInt(0, $exerciseRoll.workouts[index].exercise.repMax)
            $exerciseRoll.workouts[index].exercise.reps = reps
        }
    }

    handleDaily()
</script>
  
<div class="flex flex-col items-center justify-center bg-gray-200 gap-8 p-6">
    {#if $exerciseRoll.workouts}
        {#each $exerciseRoll.workouts as workout, index }
        <Card>
            <p slot="header">{general[workout.workout]}</p>
            <p slot="sub-header">{general[workout.exercise.name]}:</p>
            <p slot="number">{workout.exercise.reps ? workout.exercise.reps : 0}</p>

            <Button slot="button" on:click={() => rollReps(index)}>Roll Reps</Button>
        </Card>
        {/each}
    {/if}
</div>
  