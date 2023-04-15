import { persist, createLocalStorage } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

export const workouts = writable([
  {
    name: "run",
    exercises: [
      {
        name: "run",
        repMax: 10,
        unit: "km",
      },
    ],
  },
  {
    name: "legs",
    exercises: [
      {
        name: "squats",
        repMax: 100,
        unit: "rep",
      },
    ],
  },
  {
    name: "belly",
    exercises: [
      {
        name: "legRaises",
        repMax: 30,
        unit: "rep",
      },
      {
        name: "mountainClimbers",
        repMax: 10,
        unit: "set",
      },
    ],
  },
  {
    name: "upperBody",
    exercises: [
      {
        name: "burpees",
        repMax: 20,
        unit: "rep",
      },
      {
        name: "getUps",
        repMax: 30,
        unit: "rep",
      },
    ],
  },
]);

export const exerciseRoll = persist(
  writable({}),
  createLocalStorage("exercise-roll")
);
