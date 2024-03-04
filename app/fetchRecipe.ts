export default function fetchRecipe(recipeId: string) {
    return {
        "http://www.edamam.com/ontologies/edamam.owl#recipe_4495cbdd038b8342d51ecb463a94dfc0": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4495cbdd038b8342d51ecb463a94dfc0",
            "label": "Mushroom Lasagna",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9d928e577589525813b8f04e0fb283d1763dc8cd0b5b3f7017ec974a947146eb",
            "images": {
                "THUMBNAIL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e65b4ba933ac2b0efa26328948e2dc4f33d4c009caa153ba071091c2b026409e",
                    "width": 100,
                    "height": 100
                },
                "SMALL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e08fb5d2e48123729008d16f11112d4e51926df9df9e907c39a389d3bed53346",
                    "width": 200,
                    "height": 200
                },
                "REGULAR": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ed1dd98460adfd28bd9884cd269c3c3b8f0f230dee1d70268c36a386fbf1e03e",
                    "width": 300,
                    "height": 300
                },
                "LARGE": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2aaec091a2b978c15fdeb7b746c0a4160e4298a00bdd96afd39ba287e4bed8c1",
                    "width": 600,
                    "height": 600
                }
            },
            "source": "Smitten Kitchen",
            "url": "http://smittenkitchen.com/2010/10/mushroom-lasagna/",
            "shareAs": "http://www.edamam.com/recipe/mushroom-lasagna-4495cbdd038b8342d51ecb463a94dfc0/lasagna",
            "yield": 8,
            "dietLabels": [
                "Balanced"
            ],
            "healthLabels": [
                "Vegetarian",
                "Pescatarian",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Sulfite-Free",
                "Kosher",
                "Immuno-Supportive"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "Salt",
                "Olive oil",
                "3/4 pound dried lasagna noodles",
                "1 large clove garlic, minced",
                "4 cups whole milk",
                "3/4 cup (12 tablespoons or 1 1/2 sticks) unsalted butter, divided",
                "1/2 cup all-purpose flour",
                "1 teaspoon freshly ground black pepper",
                "1 teaspoon ground nutmeg (I used less, because this seemed like a lot)",
                "1 1/2 pounds cremini or portobello mushrooms",
                "1 cup freshly grated parmesan"
            ],
            "ingredients": [
                {
                    "text": "Salt",
                    "quantity": 0,
                    "measure": null,
                    "food": "Salt",
                    "weight": 13.367634495,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Olive oil",
                    "quantity": 0,
                    "measure": null,
                    "food": "Olive oil",
                    "weight": 30.299971522,
                    "foodCategory": "Oils",
                    "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                    "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                },
                {
                    "text": "3/4 pound dried lasagna noodles",
                    "quantity": 0.75,
                    "measure": "pound",
                    "food": "lasagna noodles",
                    "weight": 340.1942775,
                    "foodCategory": "grains",
                    "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                    "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                },
                {
                    "text": "1 large clove garlic, minced",
                    "quantity": 1,
                    "measure": "clove",
                    "food": "garlic",
                    "weight": 5,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "4 cups whole milk",
                    "quantity": 4,
                    "measure": "cup",
                    "food": "whole milk",
                    "weight": 976,
                    "foodCategory": "Milk",
                    "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                    "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                },
                {
                    "text": "3/4 cup (12 tablespoons or 1 1/2 sticks) unsalted butter, divided",
                    "quantity": 0.75,
                    "measure": "tablespoon",
                    "food": "unsalted butter",
                    "weight": 10.649999999999999,
                    "foodCategory": "Dairy",
                    "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                    "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                },
                {
                    "text": "1/2 cup all-purpose flour",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "all-purpose flour",
                    "weight": 62.5,
                    "foodCategory": "grains",
                    "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                    "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                },
                {
                    "text": "1 teaspoon freshly ground black pepper",
                    "quantity": 1,
                    "measure": "teaspoon",
                    "food": "black pepper",
                    "weight": 2.3,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1 teaspoon ground nutmeg (I used less, because this seemed like a lot)",
                    "quantity": 1,
                    "measure": "teaspoon",
                    "food": "ground nutmeg",
                    "weight": 2.2,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
                    "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
                },
                {
                    "text": "1 1/2 pounds cremini or portobello mushrooms",
                    "quantity": 1.5,
                    "measure": "pound",
                    "food": "portobello mushrooms",
                    "weight": 680.388555,
                    "foodCategory": "vegetables",
                    "foodId": "food_bikaydza0r1y3ja1c2nxxbqnynlg",
                    "image": "https://www.edamam.com/food-img/245/2457f8850f43817dfeb967825467ef1e.jpg"
                },
                {
                    "text": "1 cup freshly grated parmesan",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "parmesan",
                    "weight": 148.70625,
                    "foodCategory": "Cheese",
                    "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                    "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                }
            ],
            "calories": 3186.5799998794805,
            "totalCO2Emissions": 7980.873477109932,
            "co2EmissionsClass": "E",
            "totalWeight": 2265.947146494466,
            "totalTime": 0,
            "cuisineType": [
                "italian"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 3186.5799998794805,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 116.86305755474999,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 51.43524307421101,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 44.742774389785005,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 10.48527542021,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 383.99799362100003,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 361.434725526,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 22.563268095,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 75.85011795925,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 149.7759970855,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 221.61775,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 5251.489755347082,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 2986.8371468336118,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 366.5827979997247,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 4789.067976138018,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 11.516377923682338,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 16.690883621722463,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3315.674198875,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 830.3589374999999,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 1.6260000000000001,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.7258130347,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 3.5550314380000003,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 41.3861757745,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 2.0767661229499996,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 495.3607028500001,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 331.61070285,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 96.25,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 6.534774277500001,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 15.472696915,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 6.302591065418,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 28.826783383744004,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1582.0804636974449,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 159.32899999397404,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 179.789319315,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 257.17621537105504,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 127.99933120700003,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 90.25307238,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 299.551994171,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 73.87258333333334,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 218.81207313946177,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 298.6837146833612,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 87.28161857136301,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 101.89506332208549,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 63.97987735379076,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 151.7353056520224,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 473.66774269642855,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 92.26210416666666,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 1.8066666666666669,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 143.81775289166666,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 273.4639567692308,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 258.66359859062504,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 159.75124022692304,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 123.84017571250003,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 272.2822615625001,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 103.15131276666668,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 42.01727376945334,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 24.022319486453338,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 116.86305755474999,
                    "hasRDI": true,
                    "daily": 179.789319315,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 51.43524307421101,
                            "hasRDI": true,
                            "daily": 257.17621537105504,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 44.742774389785005,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 10.48527542021,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 383.99799362100003,
                    "hasRDI": true,
                    "daily": 127.99933120700003,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 361.434725526,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 22.563268095,
                            "hasRDI": true,
                            "daily": 90.25307238,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 75.85011795925,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 149.7759970855,
                    "hasRDI": true,
                    "daily": 299.551994171,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 221.61775,
                    "hasRDI": true,
                    "daily": 73.87258333333334,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 5251.489755347082,
                    "hasRDI": true,
                    "daily": 218.81207313946177,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 2986.8371468336118,
                    "hasRDI": true,
                    "daily": 298.6837146833612,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 366.5827979997247,
                    "hasRDI": true,
                    "daily": 87.28161857136301,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 4789.067976138018,
                    "hasRDI": true,
                    "daily": 101.89506332208549,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 11.516377923682338,
                    "hasRDI": true,
                    "daily": 63.97987735379076,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 16.690883621722463,
                    "hasRDI": true,
                    "daily": 151.7353056520224,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 3315.674198875,
                    "hasRDI": true,
                    "daily": 473.66774269642855,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 830.3589374999999,
                    "hasRDI": true,
                    "daily": 92.26210416666666,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 1.6260000000000001,
                    "hasRDI": true,
                    "daily": 1.8066666666666669,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.7258130347,
                    "hasRDI": true,
                    "daily": 143.81775289166666,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 3.5550314380000003,
                    "hasRDI": true,
                    "daily": 273.4639567692308,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 41.3861757745,
                    "hasRDI": true,
                    "daily": 258.66359859062504,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 2.0767661229499996,
                    "hasRDI": true,
                    "daily": 159.75124022692304,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 495.3607028500001,
                    "hasRDI": true,
                    "daily": 123.84017571250003,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 331.61070285,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 96.25,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 6.534774277500001,
                    "hasRDI": true,
                    "daily": 272.2822615625001,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 15.472696915,
                    "hasRDI": true,
                    "daily": 103.15131276666668,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 6.302591065418,
                    "hasRDI": true,
                    "daily": 42.01727376945334,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 28.826783383744004,
                    "hasRDI": true,
                    "daily": 24.022319486453338,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 1582.0804636974449,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        },
        "http://www.edamam.com/ontologies/edamam.owl#recipe_05355f8b49ed6585c2250bf7ed74f476": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_05355f8b49ed6585c2250bf7ed74f476",
            "label": "Mushroom Lasagna Recipe",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d89/d8904af04a68c4750decc39118275a14.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=13d6a84edaed1678c3f725a18ad935d0cf85c804cc3a980d3ac9ae3f54d95ebe",
            "images": {
                "THUMBNAIL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d89/d8904af04a68c4750decc39118275a14-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9d6c6fbc924b5a6ae8c113df02967df6fb7e7c02f9f57378d88b455a91ee9722",
                    "width": 100,
                    "height": 100
                },
                "SMALL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d89/d8904af04a68c4750decc39118275a14-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c606445efa43e1731d50a2e1862a36a678c532ae94392dc5f9a5b8e8210b12ba",
                    "width": 200,
                    "height": 200
                },
                "REGULAR": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d89/d8904af04a68c4750decc39118275a14.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=13d6a84edaed1678c3f725a18ad935d0cf85c804cc3a980d3ac9ae3f54d95ebe",
                    "width": 300,
                    "height": 300
                }
            },
            "source": "Serious Eats",
            "url": "http://www.seriouseats.com/recipes/2011/12/mushroom-lasagna-recipe.html",
            "shareAs": "http://www.edamam.com/recipe/mushroom-lasagna-recipe-05355f8b49ed6585c2250bf7ed74f476/lasagna",
            "yield": 4,
            "dietLabels": [
                "High-Fiber"
            ],
            "healthLabels": [
                "Vegetarian",
                "Pescatarian",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Sulfite-Free",
                "Kosher",
                "Immuno-Supportive"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "3/4 pound dried lasagna noodles",
                "4 tablespoons olive oil, divided",
                "4 cups whole milk",
                "1 large garlic clove, minced",
                "3/4 cup unsalted butter (1 1/2 sticks), divided",
                "1/2 cup all-purpose flour",
                "1 teaspoon ground black pepper",
                "1/2 teaspoon ground nutmeg",
                "1 1/2 pounds cremini or portobello mushrooms, stems removed, sliced 1/4-inch thick",
                "1 cup grated Parmesan"
            ],
            "ingredients": [
                {
                    "text": "3/4 pound dried lasagna noodles",
                    "quantity": 0.75,
                    "measure": "pound",
                    "food": "lasagna noodles",
                    "weight": 340.1942775,
                    "foodCategory": "grains",
                    "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                    "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                },
                {
                    "text": "4 tablespoons olive oil, divided",
                    "quantity": 4,
                    "measure": "tablespoon",
                    "food": "olive oil",
                    "weight": 54,
                    "foodCategory": "Oils",
                    "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                    "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                },
                {
                    "text": "4 cups whole milk",
                    "quantity": 4,
                    "measure": "cup",
                    "food": "whole milk",
                    "weight": 976,
                    "foodCategory": "Milk",
                    "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                    "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                },
                {
                    "text": "1 large garlic clove, minced",
                    "quantity": 1,
                    "measure": "clove",
                    "food": "garlic",
                    "weight": 5,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "3/4 cup unsalted butter (1 1/2 sticks), divided",
                    "quantity": 1.5,
                    "measure": "stick",
                    "food": "unsalted butter",
                    "weight": 169.5,
                    "foodCategory": "Dairy",
                    "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                    "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                },
                {
                    "text": "1/2 cup all-purpose flour",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "all-purpose flour",
                    "weight": 62.5,
                    "foodCategory": "grains",
                    "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                    "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                },
                {
                    "text": "1 teaspoon ground black pepper",
                    "quantity": 1,
                    "measure": "teaspoon",
                    "food": "black pepper",
                    "weight": 2.3,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1/2 teaspoon ground nutmeg",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "ground nutmeg",
                    "weight": 1.1,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
                    "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
                },
                {
                    "text": "1 1/2 pounds cremini or portobello mushrooms, stems removed, sliced 1/4-inch thick",
                    "quantity": 1.5,
                    "measure": "pound",
                    "food": "portobello mushrooms",
                    "weight": 680.388555,
                    "foodCategory": "vegetables",
                    "foodId": "food_bikaydza0r1y3ja1c2nxxbqnynlg",
                    "image": "https://www.edamam.com/food-img/245/2457f8850f43817dfeb967825467ef1e.jpg"
                },
                {
                    "text": "1 cup grated Parmesan",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "Parmesan",
                    "weight": 148.70625,
                    "foodCategory": "Cheese",
                    "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                    "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                }
            ],
            "calories": 4529.2677516250005,
            "totalCO2Emissions": 11906.402062201001,
            "co2EmissionsClass": "G",
            "totalWeight": 2439.6890825,
            "totalTime": 60,
            "cuisineType": [
                "italian"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 4529.2677516250005,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 268.99113603275003,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 134.64019700417498,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 99.17927517872499,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 17.751313410399998,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 383.55100362099995,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 361.216535526,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 22.334468095000002,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 75.91253795925,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 151.0619820855,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 563.14525,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 2278.5213766,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 3021.3242049250002,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 367.66971707499994,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 4822.962329025,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 11.621991378000004,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 16.802490529249997,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 3351.455198875001,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 1916.8379375000004,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 1.593,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.7299495347,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 3.6084134380000004,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 41.43859277450001,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 2.07977162295,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 499.29020285000007,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 335.54020285000007,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 96.25,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 6.804819277500001,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 15.472696915,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 13.400715166250002,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 54.213700527499995,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1607.7302175124998,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 226.46338758125003,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 413.8325169734616,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 673.2009850208749,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 127.85033454033332,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 89.33787238000001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 302.123964171,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 187.71508333333333,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 94.93839069166667,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 302.1324204925,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 87.54040882738094,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 102.61621976648937,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 64.56661876666669,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 152.7499139022727,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 478.77931412500016,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 212.9819930555556,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 1.77,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 144.16246122500002,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 277.5702644615385,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 258.9912048406251,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 159.98243253461538,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 124.82255071250002,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 283.53413656250007,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 103.15131276666668,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 89.33810110833335,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 45.178083772916665,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 268.99113603275003,
                    "hasRDI": true,
                    "daily": 413.8325169734616,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 134.64019700417498,
                            "hasRDI": true,
                            "daily": 673.2009850208749,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 99.17927517872499,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 17.751313410399998,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 383.55100362099995,
                    "hasRDI": true,
                    "daily": 127.85033454033332,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 361.216535526,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 22.334468095000002,
                            "hasRDI": true,
                            "daily": 89.33787238000001,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 75.91253795925,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 151.0619820855,
                    "hasRDI": true,
                    "daily": 302.123964171,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 563.14525,
                    "hasRDI": true,
                    "daily": 187.71508333333333,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 2278.5213766,
                    "hasRDI": true,
                    "daily": 94.93839069166667,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 3021.3242049250002,
                    "hasRDI": true,
                    "daily": 302.1324204925,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 367.66971707499994,
                    "hasRDI": true,
                    "daily": 87.54040882738094,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 4822.962329025,
                    "hasRDI": true,
                    "daily": 102.61621976648937,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 11.621991378000004,
                    "hasRDI": true,
                    "daily": 64.56661876666669,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 16.802490529249997,
                    "hasRDI": true,
                    "daily": 152.7499139022727,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 3351.455198875001,
                    "hasRDI": true,
                    "daily": 478.77931412500016,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 1916.8379375000004,
                    "hasRDI": true,
                    "daily": 212.9819930555556,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 1.593,
                    "hasRDI": true,
                    "daily": 1.77,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.7299495347,
                    "hasRDI": true,
                    "daily": 144.16246122500002,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 3.6084134380000004,
                    "hasRDI": true,
                    "daily": 277.5702644615385,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 41.43859277450001,
                    "hasRDI": true,
                    "daily": 258.9912048406251,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 2.07977162295,
                    "hasRDI": true,
                    "daily": 159.98243253461538,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 499.29020285000007,
                    "hasRDI": true,
                    "daily": 124.82255071250002,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 335.54020285000007,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 96.25,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 6.804819277500001,
                    "hasRDI": true,
                    "daily": 283.53413656250007,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 15.472696915,
                    "hasRDI": true,
                    "daily": 103.15131276666668,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 13.400715166250002,
                    "hasRDI": true,
                    "daily": 89.33810110833335,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 54.213700527499995,
                    "hasRDI": true,
                    "daily": 45.178083772916665,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 1607.7302175124998,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ],
            "tags": [
                "lasagna",
                "vegetarian",
                "Smitten Kitchen",
                "mushroom",
                "Dinner Tonight"
            ]
        },
        "http://www.edamam.com/ontologies/edamam.owl#recipe_98bffffbf45d274a5d5948c489f62aff": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_98bffffbf45d274a5d5948c489f62aff",
            "label": "Lasagna recipes",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6c9/6c997797b0ef444fd0ca70c181bd43cf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7fa09c9308a7b876ec3a3e6d6cfa4c31c7f06c316a88b669d300841ab3e64840",
            "images": {
                "THUMBNAIL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6c9/6c997797b0ef444fd0ca70c181bd43cf-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6f81edcab237c6ebcefa7b83400d9f001b243b3215e40aa68a66b857021c359e",
                    "width": 100,
                    "height": 100
                },
                "SMALL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6c9/6c997797b0ef444fd0ca70c181bd43cf-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8f45720db8f9acda471e723aef50abfa7ca88273598c723e660154eae864058b",
                    "width": 200,
                    "height": 200
                },
                "REGULAR": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6c9/6c997797b0ef444fd0ca70c181bd43cf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLWVhc3QtMSJIMEYCIQDQ8nkGt%2BsDJJ3iJuZKCbua0i8hFPFJ5zzGM%2FQKmqjpCgIhANZ%2FaF0kXR%2FjU9lnj9IPz6nAZnOnxihj1XvuglueDaUUKrkFCGYQABoMMTg3MDE3MTUwOTg2IgyF8pIHip0IiFgFT1UqlgXx1673fPek5LT9wnx7hlFz3u1LHUM3quOmxBUJJopA56FWebSMNba4Wd6t0fRuksDuIyx2f5x%2Fe7FhhTvjcA%2FHS85Cn7UWMcxf5a2UZs61ffs0ISMyaHm79yLtCoFSdg4o2%2F2Xbq6xYPipEtgdLC0QygiWla4iVAubTy8CluB1f7SvVlhVpfsRR0y3YzC1UpdZ%2FNoV%2Fs3TLgx38T9vVULB6bTl2coMf%2F19gctZT3HzmGLB0zCLFU2Jn5chGzYT4F%2BGUdt%2BJN8doIeCimOT2V8yhsrtPCHCp%2BgfXU06YMgHN32tAJzviKV%2Bb6nroCm8ZqS%2FujozPMOPPQYbV5MQFq30WS%2FTLRAtymZugUPa46ntKv5Pmv0s%2BhdSu3aV2hxKz6CGITpKK%2BqmDeHFlQQUhEM%2BB2Vco9y4QBS8NsnNmoEsBw8WhpED86XoeKRCSBMR5ChIUPeRq9qUK7NCsHXwiiO3WlbDXOcbWHiBAufmOImBibpI9Arydmqw9dKWnsuMvnqvh8DUA3W%2BhWuAshVg6GLPv99iSmqTKkwcKlz1vroq6b%2FM6GAv81KE%2FESX76Z94s2y%2FPpM5KklutAavNSTGvMrRrY1MFAJEJ3nfhnJflec%2FBgAjNS07Xc5M8a15jKBVBJ%2FyRc0WvAXRe%2BZXM77g5ArRy7CISAyRuCdhWXN3%2F4q7t8UPujEn8Gtou9Y7aHY9swEqxu%2BGCVhvS5KAiA6KtSS9ca4UjM79vYx3ZGLF3utdPZ3956fG%2BM%2FaUMBwe46NmQtMrQAlFXawovXrYe7J5rSgRoUnr6S9xw792xlS6rIVEUvwRYUrAdp7eY1w2WEyfwa58hwaR6SYhJ6hf7itaNywDdfCooM3G6YorO2KkgnwEzHNzoBTjDH05OvBjqwAfzOc8G8m01CSVkUL%2BqoJhTLeD4a%2Bv0Urpz4o%2FOnbJydbk8f3rjDU2JnpmGJheGHl3VyeR5f6ckY0YuqKAVm4%2BEV7Xk09OETcx8Z9%2Ba9EYbxNenvIO%2Bn8Hf%2Fp9k8gUs5brGg%2FPO4i0f2b5BFFppTtIodFO9XgErQZ4rgrPehoDNu0ERtbSch30GNDvainG1J8Qb7aqMMsjNi3ka0ItFhJ3KZrcIvA3bo30lXX78O%2FV2Y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T214100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL47KBRXY%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7fa09c9308a7b876ec3a3e6d6cfa4c31c7f06c316a88b669d300841ab3e64840",
                    "width": 300,
                    "height": 300
                }
            },
            "source": "Martha Stewart",
            "url": "http://www.marthastewart.com/343399/lasagna",
            "shareAs": "http://www.edamam.com/recipe/lasagna-recipes-98bffffbf45d274a5d5948c489f62aff/lasagna",
            "yield": 12,
            "dietLabels": [
                "Low-Carb"
            ],
            "healthLabels": [
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Sulfite-Free"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "1 pound lasagna noodles or packaged precooked lasagna noodles",
                "coarse salt",
                "5 links sweet Italian sausage, or a mixture of hot and sweet, pierced with a fork",
                "1 large egg",
                "1 pound ricotta cheese",
                "3/4 cup freshly grated pecorino Romano or Parmesan cheese, plus more for serving",
                "5 cups Basic Italian Tomato Sauce, (double the recipe and cook for 30 minutes longer to thicken)",
                "1 pound fresh or prepackaged mozzarella cheese, cut crosswise into 1/3-inch-thick slices",
                "extra-virgin olive oil"
            ],
            "ingredients": [
                {
                    "text": "1 pound lasagna noodles or packaged precooked lasagna noodles",
                    "quantity": 1,
                    "measure": "noodle",
                    "food": "lasagna noodles",
                    "weight": 25,
                    "foodCategory": "grains",
                    "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                    "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                },
                {
                    "text": "coarse salt",
                    "quantity": 0,
                    "measure": null,
                    "food": "coarse salt",
                    "weight": 16.35710844,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "5 links sweet Italian sausage, or a mixture of hot and sweet, pierced with a fork",
                    "quantity": 5,
                    "measure": "link",
                    "food": "sweet Italian sausage",
                    "weight": 420,
                    "foodCategory": "Cured meats",
                    "foodId": "food_ad9x10ia5xkw5xb5pz8d6bgho0nt",
                    "image": "https://www.edamam.com/food-img/1f5/1f5e4b71c948f4c6e6da9db6dbc32e9c.jpg"
                },
                {
                    "text": "1 large egg",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "egg",
                    "weight": 50,
                    "foodCategory": "Eggs",
                    "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                    "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                },
                {
                    "text": "1 pound ricotta cheese",
                    "quantity": 1,
                    "measure": "pound",
                    "food": "ricotta cheese",
                    "weight": 453.59237,
                    "foodCategory": "Cheese",
                    "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                    "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                },
                {
                    "text": "3/4 cup freshly grated pecorino Romano or Parmesan cheese, plus more for serving",
                    "quantity": 0.75,
                    "measure": "cup",
                    "food": "pecorino Romano",
                    "weight": 99,
                    "foodCategory": "Cheese",
                    "foodId": "food_bmxguz9abbdnfvbuklp2mbsrpt6b",
                    "image": "https://www.edamam.com/food-img/71a/71a53d043eded9a8914415178a07f879.jpg"
                },
                {
                    "text": "5 cups Basic Italian Tomato Sauce, (double the recipe and cook for 30 minutes longer to thicken)",
                    "quantity": 5,
                    "measure": "cup",
                    "food": "Tomato Sauce",
                    "weight": 1225,
                    "foodCategory": "canned vegetables",
                    "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
                    "image": null
                },
                {
                    "text": "1 pound fresh or prepackaged mozzarella cheese, cut crosswise into 1/3-inch-thick slices",
                    "quantity": 1,
                    "measure": "pound",
                    "food": "mozzarella cheese",
                    "weight": 453.59237,
                    "foodCategory": "Cheese",
                    "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
                    "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
                },
                {
                    "text": "extra-virgin olive oil",
                    "quantity": 0,
                    "measure": null,
                    "food": "extra-virgin olive oil",
                    "weight": 37.076112464,
                    "foodCategory": "Oils",
                    "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                    "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                }
            ],
            "calories": 3917.7451257817606,
            "totalCO2Emissions": 32279.718644980778,
            "co2EmissionsClass": "G",
            "totalWeight": 2763.260852464,
            "totalTime": 105,
            "cuisineType": [
                "italian"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 3917.74512578176,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 265.72875722400005,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 137.75504339403201,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 1.5294625921000002,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 96.45026275172,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 14.676346493819999,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 140.67609683799998,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 121.501096838,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 19.175,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 50.991182335999994,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 255.528816618,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 1040.9174706000001,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 13408.89895624928,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 4902.07717082464,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 479.96287170000005,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5996.87232892464,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 20.4247810507984,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 26.193111863000006,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 4229.3328142,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 1882.4278129000002,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 86.59,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.2270717872999999,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 4.507454661600001,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 21.034278374699998,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 2.9117618683,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 216.41108440000005,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 216.41108440000005,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 13.088559446000001,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 4.67014659,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 25.210655778815998,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 75.302145023328,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 2044.14728377,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 195.88725628908801,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 408.8134726523077,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 688.77521697016,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 46.89203227933333,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 76.7,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 511.057633236,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 346.97249020000004,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 558.7041231770534,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 490.207717082464,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 114.27687421428573,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 127.59302827499235,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 113.4710058377689,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 238.1191987545455,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 604.1904020285715,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 209.1586458777778,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 96.21111111111111,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 102.255982275,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 346.72728166153854,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 131.46423984187498,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 223.98168217692307,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 54.10277110000001,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 545.3566435833334,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 31.1343106,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 168.07103852544,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 62.75178751943999,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 265.72875722400005,
                    "hasRDI": true,
                    "daily": 408.8134726523077,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 137.75504339403201,
                            "hasRDI": true,
                            "daily": 688.77521697016,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 1.5294625921000002,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 96.45026275172,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 14.676346493819999,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 140.67609683799998,
                    "hasRDI": true,
                    "daily": 46.89203227933333,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 121.501096838,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 19.175,
                            "hasRDI": true,
                            "daily": 76.7,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 50.991182335999994,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 255.528816618,
                    "hasRDI": true,
                    "daily": 511.057633236,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 1040.9174706000001,
                    "hasRDI": true,
                    "daily": 346.97249020000004,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 13408.89895624928,
                    "hasRDI": true,
                    "daily": 558.7041231770534,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 4902.07717082464,
                    "hasRDI": true,
                    "daily": 490.207717082464,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 479.96287170000005,
                    "hasRDI": true,
                    "daily": 114.27687421428573,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 5996.87232892464,
                    "hasRDI": true,
                    "daily": 127.59302827499235,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 20.4247810507984,
                    "hasRDI": true,
                    "daily": 113.4710058377689,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 26.193111863000006,
                    "hasRDI": true,
                    "daily": 238.1191987545455,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 4229.3328142,
                    "hasRDI": true,
                    "daily": 604.1904020285715,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 1882.4278129000002,
                    "hasRDI": true,
                    "daily": 209.1586458777778,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 86.59,
                    "hasRDI": true,
                    "daily": 96.21111111111111,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.2270717872999999,
                    "hasRDI": true,
                    "daily": 102.255982275,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 4.507454661600001,
                    "hasRDI": true,
                    "daily": 346.72728166153854,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 21.034278374699998,
                    "hasRDI": true,
                    "daily": 131.46423984187498,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 2.9117618683,
                    "hasRDI": true,
                    "daily": 223.98168217692307,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 216.41108440000005,
                    "hasRDI": true,
                    "daily": 54.10277110000001,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 216.41108440000005,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 13.088559446000001,
                    "hasRDI": true,
                    "daily": 545.3566435833334,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 4.67014659,
                    "hasRDI": true,
                    "daily": 31.1343106,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 25.210655778815998,
                    "hasRDI": true,
                    "daily": 168.07103852544,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 75.302145023328,
                    "hasRDI": true,
                    "daily": 62.75178751943999,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 2044.14728377,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ],
            "tags": [
                "cookies",
                "beef lasagna",
                "oreo dessert",
                "italian recipes",
                "greek lasagna",
                "mediterranean lasagna",
                "sweet italian sausage dinners",
                "ricotta cheese filling",
                "lasagna meat",
                "main dishes with ricotta cheese",
                "baked pasta tomato sauce eggs",
                "martha stewart pasta",
                "pecorino romano cheese sauce",
                "italian sausage egg noodles",
                "traditional lasagna",
                "lasagne sauce",
                "delicious lasagna",
                "kielbasa lasagna",
                "large lasagna",
                "no boil lasagna recipe"
            ]
        }
    }[recipeId]
}