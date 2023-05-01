import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SideBar from "../../components/SideBar/SideBar";
import TmpCard from "../../components/TmpCard/TmpCard";
import TmpCardMTVMH from "../../components/TmpCard/TmpCardMTVMH";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchBarFreeText from "../../components/SearchBar/SearchBarFreeText";
import SearchSwitch from "../../components/SearchSwitch/SearchSwitch";
import NoResult from "../../components/NoResult/NoResult";
import ModalSaveAPIKey from "../../components/ModalSaveAPIKey/ModalSaveAPIKey";
import HaveCook from "../../components/HaveCooked/HaveCooked";
import Card from "../../components/RecipeCard/Card";
import CardMTVMH from "../../components/RecipeCard/CardMTVMH";
import { RecipeFrontST } from "../../components/Interface/Interface";
import { RecipeMTVMH } from "../../components/Interface/Interface";
import { useMediaQuery } from "../../components/DropdownNav/DropdownNav";
import { useBackButtonStore } from "../../components/Stores/backButtonClick";
import { useApiCheckerStore } from "../../components/Stores/checkIfApiExists";

import "./StartPage.css";
import Sort from "../../components/Sort/Sort";

//@ts-ignore
export default function StartPage(props) {
  // Below 2 arrays are used to make it clear for TypeScript what types our useState functions require.
  const emptyRecipeST: RecipeFrontST[] = [];
  const emptyRecipeMTVMH: RecipeMTVMH[] = [];
  const emptyArr: string[] = [];

  //@ts-ignore // global zustand variable/state to monitor back button click and persist state
  const backButtonClicked = useBackButtonStore((state) => state.clicked);

  // Storing recipe objects in this state.
  const [recipesST, setRecipesST] = useState(emptyRecipeST);
  const [recipesMTVMH, setRecipesMTVMH] = useState(emptyRecipeMTVMH);

  // Button in search bar and X button in filter uses this state to show/hide filter.
  const [show, setShow] = useState(false);

  // States for all different type of filter/ingredient choices
  const [freeTextSearch, setFreeTextSearch] = useState("");
  const [ingredientChoices, setIngredientChoices] = useState(emptyArr);
  const [mealChoice, setMealChoice] = useState("");
  const [cuisineChoices, setCuisineChoices] = useState(emptyArr);
  const [intoleranceChoices, setIntoleranceChoices] = useState(emptyArr);
  const [dietChoices, setDietChoices] = useState(emptyArr);

  // State for sorting function
  const [sortedBy, setSortedBy] = useState("");

  // State for all filter choices (except ingredients since there are no predefines buttons) so we can make buttons purple if they are selected.
  const [selected, setSelected] = useState(emptyArr);

  // State to monitor if it's a regular search or MTVMH search, will affect api call string and in turn also the response.
  //@ts-ignore
  const persistedSearchSettings = JSON.parse(sessionStorage.getItem("persisted-search-data"));
  const searchSettingsBool: boolean = !backButtonClicked
    ? true
    : persistedSearchSettings.searchMode;
  const [standardSearch, setStandardSearch] = useState(searchSettingsBool);

  // API Settings, read spoonacular documentation for more info.
  const defaultSettings = {
    storedMaxHits: 6,
    storeAddRecipeNutrition: true,
    storedMaxRandomHits: 3,
    storedRanking: 1,
    storedIgnorePantry: true,
  };

  if (localStorage.getItem("mightySettings") === null) {
    localStorage.setItem("mightySettings", JSON.stringify(defaultSettings));
  }

  if (localStorage.getItem("mightyRandomOrStatic") === null) {
    localStorage.setItem("mightyRandomOrStatic", "true");
  }

  //@ts-ignore
  const useStatic = JSON.parse(localStorage.getItem("mightyRandomOrStatic"));

  //@ts-ignore
  const persistedSettings = JSON.parse(localStorage.getItem("mightySettings"));

  //@ts-ignore
  const apiKey: string | null = useApiCheckerStore((state) => state.apiKey);

  const maxHits: number = persistedSettings.storedMaxHits;
  const addRecipeNutrition: boolean = persistedSettings.storeAddRecipeNutrition;
  // ** Settings only for Random recipes **
  const maxRandomHits: number = persistedSettings.storedMaxRandomHits;
  // ** Settings only for MTVMH **
  const ranking: number = persistedSettings.storedRanking; //Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
  const ignorePantry: boolean = persistedSettings.storedIgnorePantry; //Whether to ignore typical pantry items, such as water, salt, flour, etc.

  //useEffect hook that renders when the page load/reload.
  useEffect(() => {
    //If only by render and no backbutton click random recipes are fetched.
    if (!backButtonClicked) {
      if (!useStatic) {
        fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=${getMealTypeByTime()}&number=${maxRandomHits}`
        )
          .then((response) => response.json())
          .then((data) => {
            createCards(data.recipes);
          });
      } else {
        // Sample recipes to use instead of calling fetch method during development.
        const forTesting: RecipeFrontST[] = [
          {
            id: 637776,
            title: "Cherry Pancakes for One",
            image: "https://spoonacular.com/recipeImages/637776-556x370.jpg",
            readyInMinutes: 45,
          },
          {
            id: 660697,
            title: "Southern Fried Catfish",
            image: "https://spoonacular.com/recipeImages/660697-556x370.jpg",
            readyInMinutes: 45,
          },
          {
            id: 634091,
            title: "Banana Foster Bread Pudding",
            image: "https://spoonacular.com/recipeImages/634091-556x370.jpg",
            readyInMinutes: 45,
          },
        ];
        createCards(forTesting);
      }
    }

    //If back button is clicked previous persited states are being loaded back.
    if (backButtonClicked) {
      //@ts-ignore
      const persistedData = JSON.parse(sessionStorage.getItem("persisted-search-data"));

      setRecipesST(persistedData.recipes);
      setRecipesMTVMH(persistedData.recipesByIngredients);
      setSortedBy(persistedData.sortedBy)
      setIngredientChoices(persistedData.ingridients);
      setMealChoice(persistedData.meal);
      setCuisineChoices(persistedData.cuisines);
      setIntoleranceChoices(persistedData.intolerances);
      setDietChoices(persistedData.diets);
      setSelected(persistedData.selectedFilters);
    }
  }, []);

  async function getApiData(isMore: boolean = false) {
    // Function that fetches / GET data back from the API.
    // 2 endpoints which are controlled by state prop standardSearch. If true standard search will run, if false "man tager vad man haver" search will run.
    if (standardSearch === true) {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${mealChoice}&cuisine=${createURIString(
        cuisineChoices
      )}&includeIngredients=${createURIString(
        ingredientChoices
      )}&intolerance=${createURIString(
        intoleranceChoices
      )}&diet=${createURIString(
        dietChoices
      )}&query=${freeTextSearch}&number=${isMore ? 50 : maxHits}&addRecipeInformation=true&addRecipeNutrition=${addRecipeNutrition}&sort=${sortedBy}`;
      try {
        const response = await fetch(encodeURI(url));
        const result = await response.json();
        createCards(result.results);
      } catch (e) {
        console.log(e);
      }
    } else {
      // This search requires at least 1 ingredient, if none are selected an alert will pop-up telling the user to select at least 1..
      if (ingredientChoices.length > 0) {
        const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${createURIString(
          ingredientChoices
        )}&ranking=${ranking}&ignorePantry=${ignorePantry}&number=${isMore ? 50 : maxHits}`;

        try {
          const response = await fetch(encodeURI(url));
          const result = await response.json();
          createCards(result);
        } catch (e) {
          console.log(e);
        }
      } else {
        alert("Please select at least 1 ingredient...");
      }
    }
  }

  function countMatches() {
    let matches: number = 0;

    if (recipesST.length > 1) {
      matches = recipesST.length;
    } else if (recipesMTVMH.length > 1) {
      matches = recipesMTVMH.length;
    }

    return matches;
  }

  // Function called when recipe card is clicked, persisting current filters/result.
  const persistSearchData = () => {
    const currentSearchState = {
      searchMode: standardSearch,

      recipes: recipesST,
      recipesByIngredients: recipesMTVMH,

      sortedBy: sortedBy,

      ingridients: ingredientChoices,
      meal: mealChoice,
      cuisines: cuisineChoices,
      intolerances: intoleranceChoices,
      diets: dietChoices,
      selectedFilters: selected,
    };

    sessionStorage.setItem(
      "persisted-search-data",
      JSON.stringify(currentSearchState)
    );
  };

  function createCards(input: RecipeFrontST[] | RecipeMTVMH[]) {
    if (input === undefined) {
      alert("Fetch unsuccessful, check your API key.");
      return;
    }

    if (input.length < 1) {
      setRecipesST(emptyRecipeST);
      setRecipesMTVMH(emptyRecipeMTVMH);
    } else {
      if (standardSearch === true) {
        setRecipesMTVMH(emptyRecipeMTVMH);

        let tmpTmp: RecipeFrontST[] = [];
        input.forEach((recipe) => {
          let tmp: RecipeFrontST = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            //@ts-ignore
            readyInMinutes: recipe.readyInMinutes,
          };
          tmpTmp.push(tmp);
          setRecipesST(tmpTmp);
        });
      } else {
        setRecipesST(emptyRecipeST);

        let tmpTmp: RecipeMTVMH[] = [];
        input.forEach((recipe) => {
          let tmp: RecipeMTVMH = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            //@ts-ignore
            usedIngredientCount: recipe.usedIngredientCount,
            //@ts-ignore
            missedIngredientCount: recipe.missedIngredientCount,
          };
          tmpTmp.push(tmp);
          setRecipesMTVMH(tmpTmp);
        });
      }
    }
  }

  function handleSortChange(sortKey: string) {
    setSortedBy(sortKey);
  }
  // importing useMediaQuery function to make SearchSwith appear based on if condition is met or not.
  const matches = useMediaQuery(
    "screen and (max-width: 900px) and (max-height: 450px), screen and (max-width: 450px) and (max-height: 900px)"
  );

  return (
    <>
      {apiKey === null && <ModalSaveAPIKey />}
      <div className="app-body d-flex flex-column">
        {matches === true && (
          <SearchSwitch
            standardSearch={standardSearch}
            setStandardSearch={setStandardSearch}
            setMealChoice={setMealChoice}
            setCuisineChoices={setCuisineChoices}
            setIntoleranceChoices={setIntoleranceChoices}
            setDietChoices={setDietChoices}
            setSelected={setSelected}
          />
        )}

        <NavigationBar
          standardSearch={standardSearch}
          setStandardSearch={setStandardSearch}
          setMealChoice={setMealChoice}
          setCuisineChoices={setCuisineChoices}
          setIntoleranceChoices={setIntoleranceChoices}
          setDietChoices={setDietChoices}
          setSelected={setSelected}
        />

        {standardSearch ? (
          <SearchBarFreeText
            freeTextSearch={freeTextSearch}
            setFreeTextSearch={setFreeTextSearch}
            show={show}
            setShow={setShow}
            showRed={true}
            getApiData={getApiData}
          />
        ) : (
          <SearchBar
            show={show}
            setShow={setShow}
            ingredientChoices={ingredientChoices}
            setIngredientChoices={setIngredientChoices}
            showRed={true}
            getApiData={getApiData}
          />
        )}
        <SideBar
          show={show}
          setShow={setShow}
          mealChoice={mealChoice}
          setMealChoice={setMealChoice}
          cuisineChoices={cuisineChoices}
          setCuisineChoices={setCuisineChoices}
          intoleranceChoices={intoleranceChoices}
          setIntoleranceChoices={setIntoleranceChoices}
          dietChoices={dietChoices}
          setDietChoices={setDietChoices}
          selected={selected}
          setSelected={setSelected}
          ingredientChoices={ingredientChoices}
          setIngredientChoices={setIngredientChoices}
          showRed={false}
          createCards={createCards}
          standardSearch={standardSearch}
          setStandardSearch={setStandardSearch}
          getApiData={getApiData}
        />

        <br />
        <div className="d-flex justify-content-evenly match-and-sort">
          <div className="matches">
            <p>
              matches&nbsp;&nbsp;&nbsp;
              <span className="matches-parentes">({countMatches()})</span>
            </p>
          </div>
          <div className="sorting">
            <Sort sortedBy={sortedBy} setSortedBy={setSortedBy} />
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center align-self-center cardArea-styling">
          {recipesST.length > 0 || recipesMTVMH.length > 0 ? (
            <>
              {recipesST.length > 0 &&
                recipesST.map((recipe) => (
                  <Card
                    key={recipe.id}
                    recId={recipe.id}
                    imgSrc={recipe.image}
                    recipeTitle={recipe.title}
                    readyInMin={recipe.readyInMinutes}
                    handleRecipeClick={props.handleRecipeClick}
                    persistSearchData={persistSearchData}
                  ></Card>
                ))}
              {recipesMTVMH.length > 0 &&
                recipesMTVMH.map((recipe) => (
                  <CardMTVMH
                    key={recipe.id}
                    recId={recipe.id}
                    imgSrc={recipe.image}
                    recipeTitle={recipe.title}
                    usedIngredientCount={recipe.usedIngredientCount}
                    missedIngredientCount={recipe.missedIngredientCount}
                    handleRecipeClick={props.handleRecipeClick}
                    persistSearchData={persistSearchData}
                    ingredientChoices={ingredientChoices}
                  />
                ))}
            </>
          ) : (
            <NoResult />
          )}
        </div>

        {recipesST.length < 7 && recipesMTVMH.length < 7 ? <div className="show-more-button-container"> <button onClick={() => getApiData(true)} className="show-more-button"><span>SHOW &nbsp; MORE</span></button> </div> : null}
      </div>
    </>
  );
}

// Used in random API call URL to define type of meal.
function getMealTypeByTime() {
  const date: Date = new Date();
  const hours: number = date.getHours();

  if (hours > 3 && hours < 11) {
    return "breakfast";
  } else if (hours > 10 && hours < 16) {
    return "lunch";
  } else if (hours > 15 && hours < 23) {
    return "dinner";
  } else {
    return "snack";
  }
}

// Takes all choices from the source array and creates a string appropriate for the API URI.
function createURIString(inputArray: string[]) {
  let returnString: string = "";

  if (inputArray.length <= 0) {
    return "";
  } else {
    if (inputArray.length == 1) {
      return inputArray[0];
    } else {
      inputArray.forEach((item: string, index: number) => {
        if (index + 1 < inputArray.length) {
          returnString += `${item},`;
        } else {
          returnString += item;
        }
      });

      return returnString.toLowerCase();
    }
  }
}
