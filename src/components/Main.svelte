<script>
  import {general} from '../translations/general'
  import {randomInt} from '../utils/randomInt'
  import {getDay} from '../utils/getDay'
  import {workouts, exerciseRoll} from '../store/store'
  import {push} from 'svelte-spa-router'
  import Button from './Button.svelte';

  const handleDaily = () => {
    const today = getDay(new Date());

    if ($exerciseRoll.timeStamp === today && $exerciseRoll.workouts.length > 0) {
      push('/workouts')
    } else {
      $exerciseRoll = {
        timeStamp: getDay(new Date()),
        workouts: []
      }
    }
  }

  const rollWorkouts = () => {
    const rolledWorkouts = $workouts.map(workout => ({
      workout: workout.name,
      exercise: workout.exercises[randomInt(0, workout.exercises.length - 1)]
    }))
    $exerciseRoll = {
      timeStamp: getDay(new Date()),
      workouts: rolledWorkouts
    }
    push('/workouts')
  }

  handleDaily()

</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-200">
  <Button on:click={rollWorkouts}>{general.rollWorkouts}</Button>
</div>