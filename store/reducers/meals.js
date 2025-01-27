import {MEALS} from '../../data/test-data1'
import { TOGGLE_FAVORITE,SET_FILTERS } from '../actions/meals';
import meal from '../../model/meal';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals : []
};

const mealsReducer = ( state = initialState, action ) => {
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            var favMeals = [...state.favoriteMeals];
            if(existingIndex >= 0){
                const updatedFavMeals = [...state.favoriteMeals];
                favMeals.splice(existingIndex,1);
            } else {
                const meal = state.meals.find( meal => meal.id === action.mealId )
                favMeals = favMeals.concat(meal);
            }
            return { ...state,favoriteMeals: favMeals };
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const filteredMeals = state.meals.filter(meal => {
                if(appliedFilters.vegan && !meal.vegan){
                    return false;
                }
                if(appliedFilters.vegetarian && !meal.vegetarian){
                    return false;
                }
                if(appliedFilters.sugarFree && !meal.sugarFree){
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.lactoseFree){
                    return false;
                }

            return true;
            });
            return {...state.filteredMeals,filteredMeals}
        default:
            return state;
    }
}

export default mealsReducer;