# Ben's Cool Pokedex - Kalos Edition
### Ben's Cool Pokedex gets data from an old version of PokeApi as the Docker image for the latest version didn't want to play nice with his computer. For that reason, only Pokemon up to generation VI can be looked up, and there are no shiny sprites for anything after generation V.

* Welcome to my (Ben's) cool Pokedex. To use it, just clone the most up-to-date repository to your own machine and run `npm install`. this should equip you with everything you need to run the Pokedex - just navigate to `localhost:5000/#!/pokemon/1` and have a go!

* The search component allows you to filter the list of Pokemon by name or number - just type something in and click the green button to see your filtered list.

* The results of your search can be clicked to get the data of your chosen Pokemon - this may take a little while as it is getting live data from the api, so please be patient!

* Your selected Pokemon's data will be presented on the right-hand panel. Both pages display some important information, such as the Pokemon's name, number, sprite, and types. On the first page, all of the Pokemon's information is found, including Pokedex descriptions and genus classifications. On the second page, an approximation of the Pokemon's combat stats can be found, as well as images of all the Pokemon related to it by evolutionary chain. These images can be clicked to take you to that Pokemon's entry.

* The two pages can be navigated between by clicking on the red and yellow tabs at the top of the Pokedex. You can also navigate to the previous and next pokemon by clicking the grey buttons in the top left and top right corners, either side of the tabs. The shiny sprite for your chosen Pokemon can be toggled on and off by clicking the round button in the image window.
