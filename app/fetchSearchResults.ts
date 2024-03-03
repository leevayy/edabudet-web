const mockResults = {
    "from": 1,
    "to": 20,
    "count": 6171,
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4495cbdd038b8342d51ecb463a94dfc0",
                "label": "Mushroom Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39de616ea87e21576e1c3b9b9d11b3bead02c7b1c99cd11b5a2086116451352e",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=31bde4584758a3b27f9355eb03916774449f7130255263bea48b8c1033bc066e",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8b24b450d3c9c4f0448ad3d3726febec9f19d6aa7c07cd2206310d8ea95fd4f2",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39de616ea87e21576e1c3b9b9d11b3bead02c7b1c99cd11b5a2086116451352e",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d7c45c543fe1887c453d8cd6dc0af8c3a583f890994aa0056c5237b87a129cb",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Smitten Kitchen",
                "url": "http://smittenkitchen.com/2010/10/mushroom-lasagna/",
                "shareAs": "http://www.edamam.com/recipe/mushroom-lasagna-4495cbdd038b8342d51ecb463a94dfc0/lasagna",
                "yield": 8.0,
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
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 13.367634495,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Olive oil",
                        "quantity": 0.0,
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
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 5.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "4 cups whole milk",
                        "quantity": 4.0,
                        "measure": "cup",
                        "food": "whole milk",
                        "weight": 976.0,
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
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "black pepper",
                        "weight": 2.3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 teaspoon ground nutmeg (I used less, because this seemed like a lot)",
                        "quantity": 1.0,
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
                        "quantity": 1.0,
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
                "totalTime": 0.0,
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
                        "quantity": 0.0,
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
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 44.742774389785005,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 10.48527542021,
                                "hasRDI": false,
                                "daily": 0.0,
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
                                "daily": 0.0,
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
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
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
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 96.25,
                        "hasRDI": false,
                        "daily": 0.0,
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
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1582.0804636974449,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_05355f8b49ed6585c2250bf7ed74f476",
                "label": "Mushroom Lasagna Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d89/d8904af04a68c4750decc39118275a14.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=09612fae1646e91b2887d40db71e105f182b8c6466b5c0ddea4b8c38caf77d4d",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d89/d8904af04a68c4750decc39118275a14-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=876237c07fbe07eb05fa39aee7674fdfcc3a1844c959868b97e46ea0c0ae7c65",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d89/d8904af04a68c4750decc39118275a14-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8d47cbef42217fbc4b59fcd1a5e4b6fdff844457e2e1aac26bb1a65e850a34c7",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d89/d8904af04a68c4750decc39118275a14.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=09612fae1646e91b2887d40db71e105f182b8c6466b5c0ddea4b8c38caf77d4d",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2011/12/mushroom-lasagna-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/mushroom-lasagna-recipe-05355f8b49ed6585c2250bf7ed74f476/lasagna",
                "yield": 4.0,
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
                        "quantity": 4.0,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 54.0,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "4 cups whole milk",
                        "quantity": 4.0,
                        "measure": "cup",
                        "food": "whole milk",
                        "weight": 976.0,
                        "foodCategory": "Milk",
                        "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                        "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                    },
                    {
                        "text": "1 large garlic clove, minced",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 5.0,
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
                        "quantity": 1.0,
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
                        "quantity": 1.0,
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
                "totalTime": 60.0,
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
                        "quantity": 0.0,
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
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 99.17927517872499,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 17.751313410399998,
                                "hasRDI": false,
                                "daily": 0.0,
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
                                "daily": 0.0,
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
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
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
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 96.25,
                        "hasRDI": false,
                        "daily": 0.0,
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
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1607.7302175124998,
                        "hasRDI": false,
                        "daily": 0.0,
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
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_98bffffbf45d274a5d5948c489f62aff",
                "label": "Lasagna recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6c9/6c997797b0ef444fd0ca70c181bd43cf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e5de02fd5b3d956bf405d002fec35b1090df009e3cb1934d6579b312aa6f3185",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6c9/6c997797b0ef444fd0ca70c181bd43cf-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3d92d27b66c055f5e6a0b610081968809005fb2f4b6a324ef1cd26fdcd055ff8",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6c9/6c997797b0ef444fd0ca70c181bd43cf-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b1ad6a162ac36a698ff2dc7f8564382790654c8754ea7354053904c130dea134",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6c9/6c997797b0ef444fd0ca70c181bd43cf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e5de02fd5b3d956bf405d002fec35b1090df009e3cb1934d6579b312aa6f3185",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "http://www.marthastewart.com/343399/lasagna",
                "shareAs": "http://www.edamam.com/recipe/lasagna-recipes-98bffffbf45d274a5d5948c489f62aff/lasagna",
                "yield": 12.0,
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
                        "quantity": 1.0,
                        "measure": "noodle",
                        "food": "lasagna noodles",
                        "weight": 25.0,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "coarse salt",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "coarse salt",
                        "weight": 16.35710844,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "5 links sweet Italian sausage, or a mixture of hot and sweet, pierced with a fork",
                        "quantity": 5.0,
                        "measure": "link",
                        "food": "sweet Italian sausage",
                        "weight": 420.0,
                        "foodCategory": "Cured meats",
                        "foodId": "food_ad9x10ia5xkw5xb5pz8d6bgho0nt",
                        "image": "https://www.edamam.com/food-img/1f5/1f5e4b71c948f4c6e6da9db6dbc32e9c.jpg"
                    },
                    {
                        "text": "1 large egg",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 50.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 pound ricotta cheese",
                        "quantity": 1.0,
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
                        "weight": 99.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_bmxguz9abbdnfvbuklp2mbsrpt6b",
                        "image": "https://www.edamam.com/food-img/71a/71a53d043eded9a8914415178a07f879.jpg"
                    },
                    {
                        "text": "5 cups Basic Italian Tomato Sauce, (double the recipe and cook for 30 minutes longer to thicken)",
                        "quantity": 5.0,
                        "measure": "cup",
                        "food": "Tomato Sauce",
                        "weight": 1225.0,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
                        "image": null
                    },
                    {
                        "text": "1 pound fresh or prepackaged mozzarella cheese, cut crosswise into 1/3-inch-thick slices",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "mozzarella cheese",
                        "weight": 453.59237,
                        "foodCategory": "Cheese",
                        "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
                        "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
                    },
                    {
                        "text": "extra-virgin olive oil",
                        "quantity": 0.0,
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
                "totalTime": 105.0,
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
                        "quantity": 0.0,
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
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 96.45026275172,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 14.676346493819999,
                                "hasRDI": false,
                                "daily": 0.0,
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
                                "daily": 0.0,
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
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
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
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
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
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 2044.14728377,
                        "hasRDI": false,
                        "daily": 0.0,
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
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8c5213a50315fab06be162dfbf75e24d",
                "label": "Momma's Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4f4/4f43cbe7c894676b48b2db24ef22c654.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ce1f0b7abc913287df65943d55525ac4652b183d31782a4f732b21b8eaf39f26",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f4/4f43cbe7c894676b48b2db24ef22c654-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=25ddd929084254033652e42ffe302d0e63d56bbfb22f42520c958eb64e2619f9",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f4/4f43cbe7c894676b48b2db24ef22c654-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2974bcfa64aa4da63c514effbe6f7dadd1a0d3ec54421954854dd8e471f79397",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f4/4f43cbe7c894676b48b2db24ef22c654.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ce1f0b7abc913287df65943d55525ac4652b183d31782a4f732b21b8eaf39f26",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/2483-momma-s-lasagna",
                "shareAs": "http://www.edamam.com/recipe/momma-s-lasagna-8c5213a50315fab06be162dfbf75e24d/lasagna",
                "yield": 10.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Egg-Free",
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
                    "No oil added",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 pound ground beef",
                    "1 pound mild italian sausage",
                    "Salt and pepper to taste",
                    "1 teaspoon red pepper flakes (optional)",
                    "4 cups sausage marinara",
                    "1 box of about 20 or more lasagna noodles, cooked",
                    "1 cup parmesan cheese, grated",
                    "30 ounces ricotta cheese",
                    "4 cups mozzarella cheese, shredded"
                ],
                "ingredients": [
                    {
                        "text": "1 pound ground beef",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "ground beef",
                        "weight": 453.59237,
                        "foodCategory": "meats",
                        "foodId": "food_boq91pbbhklr6sb0d9sbybzgklkm",
                        "image": "https://www.edamam.com/food-img/cfa/cfae8f9276eaf8f0d9349ba662744a0c.jpg"
                    },
                    {
                        "text": "1 pound mild italian sausage",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "italian sausage",
                        "weight": 453.59237,
                        "foodCategory": "Cured meats",
                        "foodId": "food_a6z51qra5sgreaa8hpu5datt7c52",
                        "image": "https://www.edamam.com/food-img/caf/cafaac36e1482d9bec67dd39393b5d12.jpg"
                    },
                    {
                        "text": "Salt and pepper to taste",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 20.997885102500234,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and pepper to taste",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 10.498942551250117,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 teaspoon red pepper flakes (optional)",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "red pepper flakes",
                        "weight": 0.7708333333724309,
                        "foodCategory": "vegetables",
                        "foodId": "food_bispmxiaijcuxcagex14mbhk2o48",
                        "image": "https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg"
                    },
                    {
                        "text": "4 cups sausage marinara",
                        "quantity": 4.0,
                        "measure": "<unit>",
                        "food": "sausage",
                        "weight": 100.0,
                        "foodCategory": "Cured meats",
                        "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                        "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
                    },
                    {
                        "text": "1 box of about 20 or more lasagna noodles, cooked",
                        "quantity": 1.0,
                        "measure": "box",
                        "food": "lasagna noodles",
                        "weight": 453.0,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "1 cup parmesan cheese, grated",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "parmesan cheese",
                        "weight": 148.70625,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "30 ounces ricotta cheese",
                        "quantity": 30.0,
                        "measure": "ounce",
                        "food": "ricotta cheese",
                        "weight": 850.48569375,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "4 cups mozzarella cheese, shredded",
                        "quantity": 4.0,
                        "measure": "cup",
                        "food": "mozzarella cheese",
                        "weight": 1039.5,
                        "foodCategory": "Cheese",
                        "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
                        "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
                    }
                ],
                "calories": 9629.289379228765,
                "totalCO2Emissions": 101368.80979468055,
                "co2EmissionsClass": "G",
                "totalWeight": 3510.1464596346227,
                "totalTime": 108.0,
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
                        "quantity": 9629.289379228765,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 612.6118741163398,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 321.2306826552127,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 8.807138551687501,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 207.61638958420394,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 42.10747230371685,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 452.3451303074524,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 434.97166867530825,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 17.37346163214417,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 31.765693183469068,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 558.4262842374176,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 2148.0425579375,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 13692.795267268619,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 9769.924180627055,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 877.2298959460054,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 6432.018238278191,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 29.207305233937085,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 70.32257130123529,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 8919.695628406036,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3434.373179289353,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.24204166667894328,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.172586529742882,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 8.009937143667718,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 61.34812324402516,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.9239428383619543,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 245.05827638373248,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 245.05827638373248,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 31.764753814875,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 9.4955950075,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 5.8384382113258955,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 64.83927732534241,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1813.9520874059926,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 481.4644689614383,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 942.4798063328304,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1606.1534132760637,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 150.78171010248414,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 69.49384652857668,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 1116.8525684748352,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 716.0141859791667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 570.5331361361925,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 976.9924180627054,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 208.8642609395251,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 136.85145187825938,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 162.26280685520604,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 639.2961027385026,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1274.2422326294338,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 381.59701992103925,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.26893518519882587,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 97.71554414524017,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 616.149011051363,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 383.4257702751573,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 301.8417567970734,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 61.26456909593312,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1323.531408953125,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 63.30396671666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 38.92292140883931,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 54.032731104452004,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 612.6118741163398,
                        "hasRDI": true,
                        "daily": 942.4798063328304,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 321.2306826552127,
                                "hasRDI": true,
                                "daily": 1606.1534132760637,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 8.807138551687501,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 207.61638958420394,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 42.10747230371685,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 452.3451303074524,
                        "hasRDI": true,
                        "daily": 150.78171010248414,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 434.97166867530825,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 17.37346163214417,
                                "hasRDI": true,
                                "daily": 69.49384652857668,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 31.765693183469068,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 558.4262842374176,
                        "hasRDI": true,
                        "daily": 1116.8525684748352,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 2148.0425579375,
                        "hasRDI": true,
                        "daily": 716.0141859791667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 13692.795267268619,
                        "hasRDI": true,
                        "daily": 570.5331361361925,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 9769.924180627055,
                        "hasRDI": true,
                        "daily": 976.9924180627054,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 877.2298959460054,
                        "hasRDI": true,
                        "daily": 208.8642609395251,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 6432.018238278191,
                        "hasRDI": true,
                        "daily": 136.85145187825938,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 29.207305233937085,
                        "hasRDI": true,
                        "daily": 162.26280685520604,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 70.32257130123529,
                        "hasRDI": true,
                        "daily": 639.2961027385026,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 8919.695628406036,
                        "hasRDI": true,
                        "daily": 1274.2422326294338,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 3434.373179289353,
                        "hasRDI": true,
                        "daily": 381.59701992103925,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.24204166667894328,
                        "hasRDI": true,
                        "daily": 0.26893518519882587,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.172586529742882,
                        "hasRDI": true,
                        "daily": 97.71554414524017,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 8.009937143667718,
                        "hasRDI": true,
                        "daily": 616.149011051363,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 61.34812324402516,
                        "hasRDI": true,
                        "daily": 383.4257702751573,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.9239428383619543,
                        "hasRDI": true,
                        "daily": 301.8417567970734,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 245.05827638373248,
                        "hasRDI": true,
                        "daily": 61.26456909593312,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 245.05827638373248,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 31.764753814875,
                        "hasRDI": true,
                        "daily": 1323.531408953125,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 9.4955950075,
                        "hasRDI": true,
                        "daily": 63.30396671666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 5.8384382113258955,
                        "hasRDI": true,
                        "daily": 38.92292140883931,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 64.83927732534241,
                        "hasRDI": true,
                        "daily": 54.032731104452004,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1813.9520874059926,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_50dbfe8cd031904259220c490d8fba7c",
                "label": "Slow-Cooker Spinach Lasagna Rollups",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/7be/7be680a05cc8fcdaceb36cde318956f6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1ed31b9c3631e6a35974fabf3eab6f1fcf1347e975c05024157551868826f099",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7be/7be680a05cc8fcdaceb36cde318956f6-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0380588a875de283b2d87bf641fa437d7b5f8d0f008c01637257acdf82260c55",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7be/7be680a05cc8fcdaceb36cde318956f6-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=463889948b0711886e17c60e7689e065c42ea381970e2dc3610800dd0a1efe5f",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7be/7be680a05cc8fcdaceb36cde318956f6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1ed31b9c3631e6a35974fabf3eab6f1fcf1347e975c05024157551868826f099",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/slow-cooker-spinach-lasagna-rollups",
                "shareAs": "http://www.edamam.com/recipe/slow-cooker-spinach-lasagna-rollups-50dbfe8cd031904259220c490d8fba7c/lasagna",
                "yield": 6.0,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
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
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 pound lasagna noodles (not no-boil)",
                    "1 (16-ounce) container ricotta",
                    "2 cups shredded mozzarella",
                    "1/2 cup grated Parmesan",
                    "1 tablespoon Italian seasoning",
                    "2 large eggs",
                    "1 (10-ounce) package frozen chopped spinach, thawed and excess water squeezed out",
                    "2 (24-ounce) jars marinara sauce, divided"
                ],
                "ingredients": [
                    {
                        "text": "1 pound lasagna noodles (not no-boil)",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "lasagna noodles",
                        "weight": 453.59237,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "1 (16-ounce) container ricotta",
                        "quantity": 16.0,
                        "measure": "ounce",
                        "food": "ricotta",
                        "weight": 453.59237,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "2 cups shredded mozzarella",
                        "quantity": 2.0,
                        "measure": "cup",
                        "food": "mozzarella",
                        "weight": 224.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                        "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
                    },
                    {
                        "text": "1/2 cup grated Parmesan",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "Parmesan",
                        "weight": 74.353125,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "1 tablespoon Italian seasoning",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "Italian seasoning",
                        "weight": 2.7,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                        "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
                    },
                    {
                        "text": "2 large eggs",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 (10-ounce) package frozen chopped spinach, thawed and excess water squeezed out",
                        "quantity": 10.0,
                        "measure": "ounce",
                        "food": "spinach",
                        "weight": 283.49523125,
                        "foodCategory": "vegetables",
                        "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                        "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
                    },
                    {
                        "text": "2 (24-ounce) jars marinara sauce, divided",
                        "quantity": 48.0,
                        "measure": "ounce",
                        "food": "marinara sauce",
                        "weight": 1360.77711,
                        "foodCategory": "canned soup",
                        "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
                        "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
                    }
                ],
                "calories": 4220.484955887501,
                "totalCO2Emissions": 22141.800073963404,
                "co2EmissionsClass": "G",
                "totalWeight": 2952.51020625,
                "totalTime": 0.0,
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
                        "quantity": 4220.484955887501,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 153.93270064987502,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 78.86614961438751,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.6437169898000004,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 40.90551030562501,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 18.2813433764125,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 493.42175248137505,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 447.176913573875,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 46.24483890750001,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 81.83841018775001,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 209.38302699075,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 848.9959285,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 8806.2162275875,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 3779.7138824375006,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 895.4789175875001,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 8339.891292775,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 30.796060185875,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 23.066141861125004,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 3669.7963973125006,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3015.7453514125004,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 108.22770218124998,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.1649616466250001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 4.3382860837625,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 64.3702969919,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.3264372092875,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 901.9548130750002,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 901.9548130750002,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 10.744972645,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.174950365000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 41.252643923375,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1616.7590967924998,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 2045.1572098725003,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 211.02424779437504,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 236.81953946134618,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 394.3307480719376,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 164.4739174937917,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 184.97935563000001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 418.7660539815,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 282.99864283333335,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 366.92567614947916,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 377.9713882437501,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 213.2092660922619,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 177.44449559095747,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 171.0892232548611,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 209.69219873750006,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 524.2566281875,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 335.08281682361115,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 120.2530024236111,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 97.08013721875001,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 333.71431413557696,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 402.314356199375,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 332.8028622528846,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 225.48870326875004,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 447.7071935416667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 27.833002433333338,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 275.01762615583334,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1347.299247327083,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 153.93270064987502,
                        "hasRDI": true,
                        "daily": 236.81953946134618,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 78.86614961438751,
                                "hasRDI": true,
                                "daily": 394.3307480719376,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.6437169898000004,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 40.90551030562501,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 18.2813433764125,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 493.42175248137505,
                        "hasRDI": true,
                        "daily": 164.4739174937917,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 447.176913573875,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 46.24483890750001,
                                "hasRDI": true,
                                "daily": 184.97935563000001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 81.83841018775001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 209.38302699075,
                        "hasRDI": true,
                        "daily": 418.7660539815,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 848.9959285,
                        "hasRDI": true,
                        "daily": 282.99864283333335,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 8806.2162275875,
                        "hasRDI": true,
                        "daily": 366.92567614947916,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 3779.7138824375006,
                        "hasRDI": true,
                        "daily": 377.9713882437501,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 895.4789175875001,
                        "hasRDI": true,
                        "daily": 213.2092660922619,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 8339.891292775,
                        "hasRDI": true,
                        "daily": 177.44449559095747,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 30.796060185875,
                        "hasRDI": true,
                        "daily": 171.0892232548611,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 23.066141861125004,
                        "hasRDI": true,
                        "daily": 209.69219873750006,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 3669.7963973125006,
                        "hasRDI": true,
                        "daily": 524.2566281875,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 3015.7453514125004,
                        "hasRDI": true,
                        "daily": 335.08281682361115,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 108.22770218124998,
                        "hasRDI": true,
                        "daily": 120.2530024236111,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.1649616466250001,
                        "hasRDI": true,
                        "daily": 97.08013721875001,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 4.3382860837625,
                        "hasRDI": true,
                        "daily": 333.71431413557696,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 64.3702969919,
                        "hasRDI": true,
                        "daily": 402.314356199375,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.3264372092875,
                        "hasRDI": true,
                        "daily": 332.8028622528846,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 901.9548130750002,
                        "hasRDI": true,
                        "daily": 225.48870326875004,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 901.9548130750002,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 10.744972645,
                        "hasRDI": true,
                        "daily": 447.7071935416667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 4.174950365000001,
                        "hasRDI": true,
                        "daily": 27.833002433333338,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 41.252643923375,
                        "hasRDI": true,
                        "daily": 275.01762615583334,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 1616.7590967924998,
                        "hasRDI": true,
                        "daily": 1347.299247327083,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 2045.1572098725003,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "Slow Cooker",
                    "Vegetarian",
                    "Lasagna",
                    "Pasta",
                    "Dinner",
                    "Spinach",
                    "Ricotta"
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b8a4de31e0cba18e0e1561adcca9671a",
                "label": "Sweet Pea Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/62e/62e60835baaf4e9e5c5258d7d32925ca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5b6e87170cc0279e8152bf47554a9971af90d9a47da6e070910040daf3321402",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/62e/62e60835baaf4e9e5c5258d7d32925ca-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1d1febdfdf1472284cb654f2f97094aa1d6200e99f5ec7ad45ae81fad33019a3",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/62e/62e60835baaf4e9e5c5258d7d32925ca-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7d03f0300c8dfcb7cf7e77f442500df9e801f66c42eec6d90e054331aa95ed76",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/62e/62e60835baaf4e9e5c5258d7d32925ca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5b6e87170cc0279e8152bf47554a9971af90d9a47da6e070910040daf3321402",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Real Simple",
                "url": "https://www.realsimple.com/food-recipes/browse-all-recipes/sweet-pea-lasagna-recipe",
                "shareAs": "http://www.edamam.com/recipe/sweet-pea-lasagna-b8a4de31e0cba18e0e1561adcca9671a/lasagna",
                "yield": 4.0,
                "dietLabels": [
                    "Balanced",
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
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 10-ounce package frozen peas",
                    "1 16-ounce container ricotta",
                    "Kosher salt and black pepper",
                    "1 16-ounce jar marinara sauce",
                    "1 9-ounce package no-boil lasagna noodles",
                    "1/4 cup shredded mozzarella"
                ],
                "ingredients": [
                    {
                        "text": "1 10-ounce package frozen peas",
                        "quantity": 10.0,
                        "measure": "ounce",
                        "food": "frozen peas",
                        "weight": 283.49523125,
                        "foodCategory": "vegetables",
                        "foodId": "food_aqrct01b4nxw5eaxoo8woaxc3xd7",
                        "image": "https://www.edamam.com/food-img/c91/c9130a361d5c5b279bf48c69e2466ec2.jpg"
                    },
                    {
                        "text": "1 16-ounce container ricotta",
                        "quantity": 16.0,
                        "measure": "ounce",
                        "food": "ricotta",
                        "weight": 453.59237,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "Kosher salt and black pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Kosher salt",
                        "weight": 8.84295407625,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Kosher salt and black pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 4.421477038125,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 16-ounce jar marinara sauce",
                        "quantity": 16.0,
                        "measure": "ounce",
                        "food": "marinara sauce",
                        "weight": 453.59237,
                        "foodCategory": "canned soup",
                        "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
                        "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
                    },
                    {
                        "text": "1 9-ounce package no-boil lasagna noodles",
                        "quantity": 9.0,
                        "measure": "ounce",
                        "food": "no-boil lasagna",
                        "weight": 255.145708125,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "1/4 cup shredded mozzarella",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "mozzarella",
                        "weight": 28.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                        "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
                    }
                ],
                "calories": 2166.884552571944,
                "totalCO2Emissions": 12959.12251159406,
                "co2EmissionsClass": "G",
                "totalWeight": 1479.530754469183,
                "totalTime": 65.0,
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
                        "quantity": 2166.884552571944,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 64.88808016613038,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 34.95678051556119,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.5422140580000003,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 15.819389607117996,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 7.264627485952988,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 299.3290191137751,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 269.1237746968794,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 30.205244416895628,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 44.51153418848151,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 95.149025380465,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 253.45210870000003,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3437.634197295594,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1329.5790547935978,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 394.4746477470044,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3527.7738396827976,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.11202691973693,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 10.104938856622246,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1673.5510673014878,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1028.238365687794,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 60.100989025000004,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.144888158351175,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.152177923093625,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 27.695362304759627,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.845533844655944,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 276.00105402148125,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 276.00105402148125,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 4.493935145,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.0191847400000003,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 11.821711173384001,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 155.28439306940004,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 999.6161318502528,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 108.3442276285972,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 99.82781564020058,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 174.78390257780595,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 99.77633970459169,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 120.82097766758253,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 190.29805076093,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 84.48403623333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 143.23475822064975,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 132.9579054793598,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 93.92253517785818,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 75.05901786559144,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 67.28903844298294,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 91.8630805147477,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 239.07872390021254,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 114.24870729864378,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 66.77887669444445,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 95.40734652926459,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 165.55214793027886,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 173.09601440474768,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 141.96414189661107,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 69.00026350537031,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 187.24729770833332,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.794564933333335,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 78.81140782256001,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 129.40366089116668,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 64.88808016613038,
                        "hasRDI": true,
                        "daily": 99.82781564020058,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 34.95678051556119,
                                "hasRDI": true,
                                "daily": 174.78390257780595,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.5422140580000003,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 15.819389607117996,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 7.264627485952988,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 299.3290191137751,
                        "hasRDI": true,
                        "daily": 99.77633970459169,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 269.1237746968794,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 30.205244416895628,
                                "hasRDI": true,
                                "daily": 120.82097766758253,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 44.51153418848151,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 95.149025380465,
                        "hasRDI": true,
                        "daily": 190.29805076093,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 253.45210870000003,
                        "hasRDI": true,
                        "daily": 84.48403623333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3437.634197295594,
                        "hasRDI": true,
                        "daily": 143.23475822064975,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1329.5790547935978,
                        "hasRDI": true,
                        "daily": 132.9579054793598,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 394.4746477470044,
                        "hasRDI": true,
                        "daily": 93.92253517785818,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3527.7738396827976,
                        "hasRDI": true,
                        "daily": 75.05901786559144,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 12.11202691973693,
                        "hasRDI": true,
                        "daily": 67.28903844298294,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 10.104938856622246,
                        "hasRDI": true,
                        "daily": 91.8630805147477,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1673.5510673014878,
                        "hasRDI": true,
                        "daily": 239.07872390021254,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1028.238365687794,
                        "hasRDI": true,
                        "daily": 114.24870729864378,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 60.100989025000004,
                        "hasRDI": true,
                        "daily": 66.77887669444445,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.144888158351175,
                        "hasRDI": true,
                        "daily": 95.40734652926459,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.152177923093625,
                        "hasRDI": true,
                        "daily": 165.55214793027886,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 27.695362304759627,
                        "hasRDI": true,
                        "daily": 173.09601440474768,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.845533844655944,
                        "hasRDI": true,
                        "daily": 141.96414189661107,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 276.00105402148125,
                        "hasRDI": true,
                        "daily": 69.00026350537031,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 276.00105402148125,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 4.493935145,
                        "hasRDI": true,
                        "daily": 187.24729770833332,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.0191847400000003,
                        "hasRDI": true,
                        "daily": 6.794564933333335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 11.821711173384001,
                        "hasRDI": true,
                        "daily": 78.81140782256001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 155.28439306940004,
                        "hasRDI": true,
                        "daily": 129.40366089116668,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 999.6161318502528,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_45819b35b2d365f851b75c743e9f8106",
                "label": "Easy Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4e8/4e84abfbabd6aca3f105713d8f95aa09.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f3b51ff0c3dd7b9ae9a5a7361128d5f68ba42d5f3fc22794f6fde5dc6e5e09b0",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4e8/4e84abfbabd6aca3f105713d8f95aa09-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=01029f182c8b073573a5378d8c57cebe3e395992e976374be7879119817cf86f",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4e8/4e84abfbabd6aca3f105713d8f95aa09-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9767898d90fe8ae2f4255fcedc946fb2dfe7a2d4ac18ecb0d9875d2b0d6a5553",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4e8/4e84abfbabd6aca3f105713d8f95aa09.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f3b51ff0c3dd7b9ae9a5a7361128d5f68ba42d5f3fc22794f6fde5dc6e5e09b0",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4e8/4e84abfbabd6aca3f105713d8f95aa09-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bdee2a3311564cae42b6afc6e3cce4dfc5cc1b511797584988dfe6acd46ed40d",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "EatingWell",
                "url": "http://www.eatingwell.com/recipe/268375/easy-lasagna/",
                "shareAs": "http://www.edamam.com/recipe/easy-lasagna-45819b35b2d365f851b75c743e9f8106/lasagna",
                "yield": 6.0,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
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
                    "1 (15 ounce) container fat-free ricotta cheese",
                    "1 large egg",
                    "1 teaspoon dried Italian seasoning, crushed",
                    "2 cups shredded fresh spinach",
                    "3 cups Italian Turkey Chili Master Recipe (see associated recipe)",
                    "6 no-boil lasagna noodles",
                    "1 cup shredded part-skim mozzarella cheese (4 ounces)"
                ],
                "ingredients": [
                    {
                        "text": "1 (15 ounce) container fat-free ricotta cheese",
                        "quantity": 15.0,
                        "measure": "ounce",
                        "food": "ricotta cheese",
                        "weight": 425.242846875,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "1 large egg",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 50.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 teaspoon dried Italian seasoning, crushed",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "Italian seasoning",
                        "weight": 1.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                        "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
                    },
                    {
                        "text": "2 cups shredded fresh spinach",
                        "quantity": 2.0,
                        "measure": "cup",
                        "food": "spinach",
                        "weight": 60.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                        "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
                    },
                    {
                        "text": "3 cups Italian Turkey Chili Master Recipe (see associated recipe)",
                        "quantity": 3.0,
                        "measure": "cup",
                        "food": "Turkey Chili",
                        "weight": 789.0,
                        "foodCategory": "canned soup",
                        "foodId": "food_b3kbmobbt4annkbyhm0krbd69f1s",
                        "image": "https://www.edamam.com/food-img/634/634563d5ff15cd877e800327daa3b340.jpg"
                    },
                    {
                        "text": "6 no-boil lasagna noodles",
                        "quantity": 6.0,
                        "measure": "noodle",
                        "food": "no-boil lasagna",
                        "weight": 150.0,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "1 cup shredded part-skim mozzarella cheese (4 ounces)",
                        "quantity": 4.0,
                        "measure": "ounce",
                        "food": "mozzarella cheese",
                        "weight": 113.3980925,
                        "foodCategory": "Cheese",
                        "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
                        "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
                    }
                ],
                "calories": 2566.1602044625,
                "totalCO2Emissions": 91857.68229894199,
                "co2EmissionsClass": "G",
                "totalWeight": 1588.640939375,
                "totalTime": 110.0,
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
                        "quantity": 2566.1602044625,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 98.56070113625,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 56.819893199375,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.97946868009375,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 29.349445629625002,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 5.43601782824375,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 298.0640878525625,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 271.84908785256255,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 26.215000000000003,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 46.9126764208125,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 124.32449863437498,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 574.19329729375,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 7618.163588312501,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1926.2092964375001,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 393.87216880000005,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4918.770404031249,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 19.252411885937505,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 20.4915801639375,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2427.5541252875,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1546.715658475,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 41.819,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.63540526489375,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.4669085334374996,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 10.175046907168749,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.8500923788187502,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 266.73156127500005,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 266.73156127500005,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 7.254370273687499,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.4174761562500002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 11.209903125812499,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 339.96062362812495,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1035.557554916875,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 128.308010223125,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 151.6318479019231,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 284.099465996875,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 99.35469595085418,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 104.86000000000001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 248.64899726874995,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 191.39776576458334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 317.4234828463542,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 192.62092964375,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 93.77908780952383,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 104.65468944747339,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 106.9578438107639,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 186.2870923994318,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 346.79344646964284,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 171.8572953861111,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 46.46555555555556,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 52.95043874114584,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 189.76219487980765,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 63.59404316980468,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 142.3147983706731,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 66.68289031875001,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 302.26542807031245,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 16.116507708333337,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 74.73268750541665,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 283.3005196901041,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 98.56070113625,
                        "hasRDI": true,
                        "daily": 151.6318479019231,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 56.819893199375,
                                "hasRDI": true,
                                "daily": 284.099465996875,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.97946868009375,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 29.349445629625002,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 5.43601782824375,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 298.0640878525625,
                        "hasRDI": true,
                        "daily": 99.35469595085418,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 271.84908785256255,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 26.215000000000003,
                                "hasRDI": true,
                                "daily": 104.86000000000001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 46.9126764208125,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 124.32449863437498,
                        "hasRDI": true,
                        "daily": 248.64899726874995,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 574.19329729375,
                        "hasRDI": true,
                        "daily": 191.39776576458334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 7618.163588312501,
                        "hasRDI": true,
                        "daily": 317.4234828463542,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1926.2092964375001,
                        "hasRDI": true,
                        "daily": 192.62092964375,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 393.87216880000005,
                        "hasRDI": true,
                        "daily": 93.77908780952383,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4918.770404031249,
                        "hasRDI": true,
                        "daily": 104.65468944747339,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 19.252411885937505,
                        "hasRDI": true,
                        "daily": 106.9578438107639,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 20.4915801639375,
                        "hasRDI": true,
                        "daily": 186.2870923994318,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2427.5541252875,
                        "hasRDI": true,
                        "daily": 346.79344646964284,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1546.715658475,
                        "hasRDI": true,
                        "daily": 171.8572953861111,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 41.819,
                        "hasRDI": true,
                        "daily": 46.46555555555556,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.63540526489375,
                        "hasRDI": true,
                        "daily": 52.95043874114584,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.4669085334374996,
                        "hasRDI": true,
                        "daily": 189.76219487980765,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 10.175046907168749,
                        "hasRDI": true,
                        "daily": 63.59404316980468,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.8500923788187502,
                        "hasRDI": true,
                        "daily": 142.3147983706731,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 266.73156127500005,
                        "hasRDI": true,
                        "daily": 66.68289031875001,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 266.73156127500005,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 7.254370273687499,
                        "hasRDI": true,
                        "daily": 302.26542807031245,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.4174761562500002,
                        "hasRDI": true,
                        "daily": 16.116507708333337,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 11.209903125812499,
                        "hasRDI": true,
                        "daily": 74.73268750541665,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 339.96062362812495,
                        "hasRDI": true,
                        "daily": 283.3005196901041,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1035.557554916875,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "Healthy Aging",
                    "Healthy Pregnancy",
                    "Nut-Free",
                    "Soy-Free"
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b8bf4cdc2de3e4c2e6251382d8a748e7",
                "label": "Skillet Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f12/f121c0ef81d745a17f3bd5ff85a10495.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=02b978af365a5a6421e84af73fc41d071c62ed63af4d4f801b28a8fe59800fad",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f12/f121c0ef81d745a17f3bd5ff85a10495-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=115a70148bdc5f561bd1db74a0ee3d5e7cbdc89e1bcf99d5f078179c04be8653",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f12/f121c0ef81d745a17f3bd5ff85a10495-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6fc78de89a474771b3e1905e1fd03f2c7cb7810cb403639bb12a635108e1aa13",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f12/f121c0ef81d745a17f3bd5ff85a10495.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7fa2caac9ed6d8a61c8f0e19e1973579631499f91bc8a519483da2a403ffcf20",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Delish",
                "url": "http://www.delish.com/cooking/recipe-ideas/recipes/a33694/skillet-lasagna-122040/",
                "shareAs": "http://www.edamam.com/recipe/skillet-lasagna-b8bf4cdc2de3e4c2e6251382d8a748e7/lasagna",
                "yield": 6.0,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 lb. meat loaf mix",
                    "8 curly lasagna noodles",
                    "1 jar marinara sauce",
                    "2 c. water",
                    "1 c. shredded Italian cheese blend",
                    "¾ c. part-skim ricotta"
                ],
                "ingredients": [
                    {
                        "text": "1 lb. meat loaf mix",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "loaf",
                        "weight": 453.59237,
                        "foodCategory": "bread, rolls and tortillas",
                        "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
                        "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
                    },
                    {
                        "text": "8 curly lasagna noodles",
                        "quantity": 8.0,
                        "measure": "<unit>",
                        "food": "lasagna noodles",
                        "weight": 134.4,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "1 jar marinara sauce",
                        "quantity": 1.0,
                        "measure": "jar",
                        "food": "marinara sauce",
                        "weight": 680.0,
                        "foodCategory": "canned soup",
                        "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
                        "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
                    },
                    {
                        "text": "2 c. water",
                        "quantity": 2.0,
                        "measure": "cup",
                        "food": "water",
                        "weight": 473.176473,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "1 c. shredded Italian cheese blend",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "cheese",
                        "weight": 113.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                        "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
                    },
                    {
                        "text": "¾ c. part-skim ricotta",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "part-skim ricotta",
                        "weight": 186.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_bq8uocoaf7p03aa32mcwjbtok51o",
                        "image": "https://www.edamam.com/food-img/9f7/9f7f95228e22fb736a2b1e8aaaab359c.jpg"
                    }
                ],
                "calories": 2793.5370937999996,
                "totalCO2Emissions": 9484.4680209,
                "co2EmissionsClass": "F",
                "totalWeight": 2040.168843,
                "totalTime": 30.0,
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
                        "quantity": 2793.5370937999996,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 85.86677436100001,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 35.5430268189,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.19728548210000002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 19.9395093044,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 14.230672394000003,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 379.7456757500001,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 345.0611809500001,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 34.6844948,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 64.08632280100001,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 122.53938359000003,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 183.13,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 6066.1129690200005,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 2094.42975669,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 442.74663642999997,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3433.6572417000007,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 24.017125320000005,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 14.625318295300001,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1924.8801573,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 790.6300000000001,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 14.50718474,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.2202546407000003,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.4662327724,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 54.508363483,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.9825155306999998,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 616.3384463,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 462.11704050000003,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 90.71847400000001,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.7824000000000004,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.8640000000000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 18.262165503,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 120.89442613,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1423.3614107670003,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 139.67685468999997,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 132.10272978615384,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 177.7151340945,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 126.58189191666669,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 138.7379792,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 245.07876718000006,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 61.04333333333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 252.75470704250003,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 209.44297566900002,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 105.41586581666667,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 73.05653705744682,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 133.42847400000002,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 132.95743904818184,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 274.9828796142857,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 87.8477777777778,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 16.119094155555555,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 185.02122005833337,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 189.71021326153848,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 340.67727176874996,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 152.50119466923076,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 154.084611575,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 74.26666666666668,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.760000000000001,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 121.74777001999999,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 100.74535510833333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 85.86677436100001,
                        "hasRDI": true,
                        "daily": 132.10272978615384,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 35.5430268189,
                                "hasRDI": true,
                                "daily": 177.7151340945,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.19728548210000002,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 19.9395093044,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 14.230672394000003,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 379.7456757500001,
                        "hasRDI": true,
                        "daily": 126.58189191666669,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 345.0611809500001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 34.6844948,
                                "hasRDI": true,
                                "daily": 138.7379792,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 64.08632280100001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 122.53938359000003,
                        "hasRDI": true,
                        "daily": 245.07876718000006,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 183.13,
                        "hasRDI": true,
                        "daily": 61.04333333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 6066.1129690200005,
                        "hasRDI": true,
                        "daily": 252.75470704250003,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 2094.42975669,
                        "hasRDI": true,
                        "daily": 209.44297566900002,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 442.74663642999997,
                        "hasRDI": true,
                        "daily": 105.41586581666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3433.6572417000007,
                        "hasRDI": true,
                        "daily": 73.05653705744682,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 24.017125320000005,
                        "hasRDI": true,
                        "daily": 133.42847400000002,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 14.625318295300001,
                        "hasRDI": true,
                        "daily": 132.95743904818184,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1924.8801573,
                        "hasRDI": true,
                        "daily": 274.9828796142857,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 790.6300000000001,
                        "hasRDI": true,
                        "daily": 87.8477777777778,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 14.50718474,
                        "hasRDI": true,
                        "daily": 16.119094155555555,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.2202546407000003,
                        "hasRDI": true,
                        "daily": 185.02122005833337,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.4662327724,
                        "hasRDI": true,
                        "daily": 189.71021326153848,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 54.508363483,
                        "hasRDI": true,
                        "daily": 340.67727176874996,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.9825155306999998,
                        "hasRDI": true,
                        "daily": 152.50119466923076,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 616.3384463,
                        "hasRDI": true,
                        "daily": 154.084611575,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 462.11704050000003,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 90.71847400000001,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.7824000000000004,
                        "hasRDI": true,
                        "daily": 74.26666666666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.8640000000000001,
                        "hasRDI": true,
                        "daily": 5.760000000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 18.262165503,
                        "hasRDI": true,
                        "daily": 121.74777001999999,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 120.89442613,
                        "hasRDI": true,
                        "daily": 100.74535510833333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1423.3614107670003,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d101a99201fe838941ec27c3d54800b2",
                "label": "Vegetable Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/247/247cb97d79c936812e51425449f72bad.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=55b2fa6def1b79537b9458a6654310177c0836fa68923d5ae60b15854ae6eb95",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/247/247cb97d79c936812e51425449f72bad-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cc22aa36f26028ac7e5d9dffa8132bac17a28cf046ea40fdaa2d7790ae83039b",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/247/247cb97d79c936812e51425449f72bad-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=81a6cc24f9d73008014b712118ea62548d5179006efdeba06bfbedab10914b4a",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/247/247cb97d79c936812e51425449f72bad.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=55b2fa6def1b79537b9458a6654310177c0836fa68923d5ae60b15854ae6eb95",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/247/247cb97d79c936812e51425449f72bad-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=13a7869fcb867788b3d9cefc71b6ca0db8916f0bfefc7b18851e08ad05c157be",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Martha Stewart",
                "url": "http://www.marthastewart.com/336769/vegetable-lasagna",
                "shareAs": "http://www.edamam.com/recipe/vegetable-lasagna-d101a99201fe838941ec27c3d54800b2/lasagna",
                "yield": 8.0,
                "dietLabels": [
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Mediterranean",
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
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "4 cups (32 ounces) whole-milk ricotta cheese",
                    "2 large eggs",
                    "Salt and fresh ground pepper",
                    "2 packages (10 ounces each) frozen chopped spinach, thawed and squeezed to remove excess moisture",
                    "6 cups store-bought or homemade tomato sauce",
                    "12 no-boil lasagna noodles (8 ounces)",
                    "1 pound fontina cheese (4 cups), shredded"
                ],
                "ingredients": [
                    {
                        "text": "4 cups (32 ounces) whole-milk ricotta cheese",
                        "quantity": 32.0,
                        "measure": "ounce",
                        "food": "whole-milk ricotta cheese",
                        "weight": 907.18474,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "2 large eggs",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "Salt and fresh ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 22.793828325000003,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and fresh ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "ground pepper",
                        "weight": 11.396914162500002,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "2 packages (10 ounces each) frozen chopped spinach, thawed and squeezed to remove excess moisture",
                        "quantity": 20.0,
                        "measure": "ounce",
                        "food": "spinach",
                        "weight": 566.9904625,
                        "foodCategory": "vegetables",
                        "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                        "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
                    },
                    {
                        "text": "6 cups store-bought or homemade tomato sauce",
                        "quantity": 6.0,
                        "measure": "cup",
                        "food": "tomato sauce",
                        "weight": 1470.0,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
                        "image": null
                    },
                    {
                        "text": "12 no-boil lasagna noodles (8 ounces)",
                        "quantity": 8.0,
                        "measure": "ounce",
                        "food": "no-boil lasagna",
                        "weight": 226.796185,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "1 pound fontina cheese (4 cups), shredded",
                        "quantity": 4.0,
                        "measure": "cup",
                        "food": "fontina cheese",
                        "weight": 528.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_bocv6wqb7zq8y4bzbjx2val9imlj",
                        "image": "https://www.edamam.com/food-img/0ac/0acf62d2ccdf71b1c03e13115f6cc002.jpg"
                    }
                ],
                "calories": 4910.925017272875,
                "totalCO2Emissions": 38499.67651345062,
                "co2EmissionsClass": "G",
                "totalWeight": 3810.3683016625,
                "totalTime": 80.0,
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
                        "quantity": 4910.925017272875,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 276.66826807894756,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 164.49380683868378,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 3.0589251842000005,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 74.86455780226089,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 18.766078042866752,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 350.20585964575,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 305.54117226763753,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 44.664687378112504,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 71.84515713064,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 280.6944397464,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1429.0005226,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 12795.5128333075,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 5694.036650864875,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 1075.470114642875,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 10649.69581226125,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 37.676172465928744,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 34.15057806028375,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 4543.32174025175,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 5612.364123948875,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 262.2243199625,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.2802918107455001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 6.4212346558175,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 24.768014008752502,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.389656202587876,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1389.9896755576253,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 1389.9896755576253,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 17.47147029,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.982369480000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 36.51941331354,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 2822.6487014265,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 2829.123872690313,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 245.54625086364376,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 425.643489352227,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 822.4690341934189,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 116.73528654858335,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 178.65874951245002,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 561.3888794928,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 476.3335075333333,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 533.1463680544792,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 569.4036650864875,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 256.0643130102083,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 226.5892726013032,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 209.31206925515968,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 310.4598005480341,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 649.0459628931072,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 623.5960137720973,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 291.36035551388886,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 106.69098422879169,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 493.9411273705769,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 154.80008755470314,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 337.66586173752887,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 347.49741888940633,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 727.97792875,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 46.549129866666675,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 243.4627554236,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 2352.20725118875,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 276.66826807894756,
                        "hasRDI": true,
                        "daily": 425.643489352227,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 164.49380683868378,
                                "hasRDI": true,
                                "daily": 822.4690341934189,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 3.0589251842000005,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 74.86455780226089,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 18.766078042866752,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 350.20585964575,
                        "hasRDI": true,
                        "daily": 116.73528654858335,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 305.54117226763753,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 44.664687378112504,
                                "hasRDI": true,
                                "daily": 178.65874951245002,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 71.84515713064,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 280.6944397464,
                        "hasRDI": true,
                        "daily": 561.3888794928,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1429.0005226,
                        "hasRDI": true,
                        "daily": 476.3335075333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 12795.5128333075,
                        "hasRDI": true,
                        "daily": 533.1463680544792,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 5694.036650864875,
                        "hasRDI": true,
                        "daily": 569.4036650864875,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 1075.470114642875,
                        "hasRDI": true,
                        "daily": 256.0643130102083,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 10649.69581226125,
                        "hasRDI": true,
                        "daily": 226.5892726013032,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 37.676172465928744,
                        "hasRDI": true,
                        "daily": 209.31206925515968,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 34.15057806028375,
                        "hasRDI": true,
                        "daily": 310.4598005480341,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 4543.32174025175,
                        "hasRDI": true,
                        "daily": 649.0459628931072,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 5612.364123948875,
                        "hasRDI": true,
                        "daily": 623.5960137720973,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 262.2243199625,
                        "hasRDI": true,
                        "daily": 291.36035551388886,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.2802918107455001,
                        "hasRDI": true,
                        "daily": 106.69098422879169,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 6.4212346558175,
                        "hasRDI": true,
                        "daily": 493.9411273705769,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 24.768014008752502,
                        "hasRDI": true,
                        "daily": 154.80008755470314,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.389656202587876,
                        "hasRDI": true,
                        "daily": 337.66586173752887,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1389.9896755576253,
                        "hasRDI": true,
                        "daily": 347.49741888940633,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 1389.9896755576253,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 17.47147029,
                        "hasRDI": true,
                        "daily": 727.97792875,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 6.982369480000001,
                        "hasRDI": true,
                        "daily": 46.549129866666675,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 36.51941331354,
                        "hasRDI": true,
                        "daily": 243.4627554236,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 2822.6487014265,
                        "hasRDI": true,
                        "daily": 2352.20725118875,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 2829.123872690313,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0e6ddeb9642b1d1b850f442b8a7794b2",
                "label": "Marc's Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a33/a332121eaa60a84c93174a5ee54e06b2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e5b7bcdc243ff4d9b7dbc8ba6b70fa59bd575f95ac596caa0d81491e7e774313",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a33/a332121eaa60a84c93174a5ee54e06b2-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=64c54db51b0a7dbb5f3be0f29521f279856b65efe3fac13589983a68e6a673e3",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a33/a332121eaa60a84c93174a5ee54e06b2-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7fd09f41a818b6f4ec2848e06b39982514f697d2d6184ae7fd99926cb1460cd",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a33/a332121eaa60a84c93174a5ee54e06b2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e5b7bcdc243ff4d9b7dbc8ba6b70fa59bd575f95ac596caa0d81491e7e774313",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a33/a332121eaa60a84c93174a5ee54e06b2-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8ffcda27dd9074817ae8184dbf1251b98eabd520f7e0a08cde84a79e7583e942",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/20238-marc-s-lasagna",
                "shareAs": "http://www.edamam.com/recipe/marc-s-lasagna-0e6ddeb9642b1d1b850f442b8a7794b2/lasagna",
                "yield": 16.0,
                "dietLabels": [],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
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
                    "1 jar Classico Tomato Basil pasta sauce",
                    "1 pound lean ground beef",
                    "1 teaspoon kosher salt",
                    "15 ounces ricotta",
                    "1 package no-cook lasagna noodles",
                    "3 cups good mozzarella",
                    "1 tablespoon dried oregano",
                    "1 tablespoon dried basil",
                    "1 cup parmesan",
                    "2 eggs"
                ],
                "ingredients": [
                    {
                        "text": "1 jar Classico Tomato Basil pasta sauce",
                        "quantity": 1.0,
                        "measure": "jar",
                        "food": "pasta sauce",
                        "weight": 680.0,
                        "foodCategory": "canned soup",
                        "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
                        "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
                    },
                    {
                        "text": "1 pound lean ground beef",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "ground beef",
                        "weight": 453.59237,
                        "foodCategory": "meats",
                        "foodId": "food_boq91pbbhklr6sb0d9sbybzgklkm",
                        "image": "https://www.edamam.com/food-img/cfa/cfae8f9276eaf8f0d9349ba662744a0c.jpg"
                    },
                    {
                        "text": "1 teaspoon kosher salt",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "kosher salt",
                        "weight": 4.854166666912875,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "15 ounces ricotta",
                        "quantity": 15.0,
                        "measure": "ounce",
                        "food": "ricotta",
                        "weight": 425.242846875,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "1 package no-cook lasagna noodles",
                        "quantity": 1.0,
                        "measure": "package",
                        "food": "lasagna noodles",
                        "weight": 453.0,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "3 cups good mozzarella",
                        "quantity": 3.0,
                        "measure": "cup",
                        "food": "mozzarella",
                        "weight": 336.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                        "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
                    },
                    {
                        "text": "1 tablespoon dried oregano",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "dried oregano",
                        "weight": 2.9999999997971143,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
                        "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
                    },
                    {
                        "text": "1 tablespoon dried basil",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "dried basil",
                        "weight": 2.1,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_abrithza96sev8ae5za0paqf42o0",
                        "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
                    },
                    {
                        "text": "1 cup parmesan",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "parmesan",
                        "weight": 148.70625,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "2 eggs",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 86.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    }
                ],
                "calories": 5534.010390111962,
                "totalCO2Emissions": 69417.81776347621,
                "co2EmissionsClass": "G",
                "totalWeight": 2587.641466874797,
                "totalTime": 0.0,
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
                        "quantity": 5534.010390111962,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 271.70657688124135,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 135.91628741537187,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 6.84872864609375,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 90.70844447187355,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 16.497563478790973,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 436.37249621767273,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 407.56979621775895,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 28.802699999913777,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 47.271642561554195,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 317.84103579435674,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1230.4998276687502,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 7278.077845762448,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 4824.310641159254,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 690.6310222744523,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 5946.050983653694,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 27.39809892886284,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 44.20107002943204,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 4860.8553037872,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1789.4240485498276,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 13.685799999995334,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.021411726693391,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 4.517392912386428,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 55.18557388870934,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.16243160406664,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 306.6706172745192,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 306.6706172745192,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 23.5321159164375,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.11160931375,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 20.699427910525372,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 172.89934022436307,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1515.4048301768548,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 276.7005195055981,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 418.01011827883286,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 679.5814370768593,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 145.45749873922423,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 115.2107999996551,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 635.6820715887135,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 410.16660922291675,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 303.2532435734354,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 482.43106411592544,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 164.4359576843934,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 126.51172305646156,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 152.21166071590469,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 401.8279093584731,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 694.4079005410285,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 198.8248942833142,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 15.20644444443926,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 85.11764389111593,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 347.49176249126367,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 344.9098368044334,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 320.1870464666646,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 76.6676543186298,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 980.5048298515626,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 34.077395425,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 137.99618607016916,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 144.08278352030257,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 271.70657688124135,
                        "hasRDI": true,
                        "daily": 418.01011827883286,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 135.91628741537187,
                                "hasRDI": true,
                                "daily": 679.5814370768593,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 6.84872864609375,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 90.70844447187355,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 16.497563478790973,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 436.37249621767273,
                        "hasRDI": true,
                        "daily": 145.45749873922423,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 407.56979621775895,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 28.802699999913777,
                                "hasRDI": true,
                                "daily": 115.2107999996551,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 47.271642561554195,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 317.84103579435674,
                        "hasRDI": true,
                        "daily": 635.6820715887135,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1230.4998276687502,
                        "hasRDI": true,
                        "daily": 410.16660922291675,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 7278.077845762448,
                        "hasRDI": true,
                        "daily": 303.2532435734354,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 4824.310641159254,
                        "hasRDI": true,
                        "daily": 482.43106411592544,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 690.6310222744523,
                        "hasRDI": true,
                        "daily": 164.4359576843934,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 5946.050983653694,
                        "hasRDI": true,
                        "daily": 126.51172305646156,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 27.39809892886284,
                        "hasRDI": true,
                        "daily": 152.21166071590469,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 44.20107002943204,
                        "hasRDI": true,
                        "daily": 401.8279093584731,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 4860.8553037872,
                        "hasRDI": true,
                        "daily": 694.4079005410285,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1789.4240485498276,
                        "hasRDI": true,
                        "daily": 198.8248942833142,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 13.685799999995334,
                        "hasRDI": true,
                        "daily": 15.20644444443926,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.021411726693391,
                        "hasRDI": true,
                        "daily": 85.11764389111593,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 4.517392912386428,
                        "hasRDI": true,
                        "daily": 347.49176249126367,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 55.18557388870934,
                        "hasRDI": true,
                        "daily": 344.9098368044334,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.16243160406664,
                        "hasRDI": true,
                        "daily": 320.1870464666646,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 306.6706172745192,
                        "hasRDI": true,
                        "daily": 76.6676543186298,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 306.6706172745192,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 23.5321159164375,
                        "hasRDI": true,
                        "daily": 980.5048298515626,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 5.11160931375,
                        "hasRDI": true,
                        "daily": 34.077395425,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 20.699427910525372,
                        "hasRDI": true,
                        "daily": 137.99618607016916,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 172.89934022436307,
                        "hasRDI": true,
                        "daily": 144.08278352030257,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1515.4048301768548,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "pasta",
                    "lasagna",
                    "entree",
                    "italian",
                    "cheese",
                    "oregano",
                    "mozzarella",
                    "recipes"
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c038409da6971e687cf7e53d0bf63e38",
                "label": "Vodka Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/314/3147872a1b42c26ea4ea64d46830653c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3f23479717701d8b3f3edb129f74c91f0d17ebac040a889f804c344778ab17fa",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/314/3147872a1b42c26ea4ea64d46830653c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9c65b8058ddc362002ab53d15409708cc1221299cdf621cb57668bba698c670d",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/314/3147872a1b42c26ea4ea64d46830653c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=42effd6c3e6eaf0c8e0f5ff7a92b75bbd02083630b74e960277c11d30ccc91fe",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/314/3147872a1b42c26ea4ea64d46830653c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3f23479717701d8b3f3edb129f74c91f0d17ebac040a889f804c344778ab17fa",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/314/3147872a1b42c26ea4ea64d46830653c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=983796c615ed8c4f312f67124719e3357daf4db9030d52950397483f6dd4822f",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Delish",
                "url": "http://www.delish.com/cooking/recipe-ideas/recipes/a45576/vodka-lasagna-recipe/",
                "shareAs": "http://www.edamam.com/recipe/vodka-lasagna-c038409da6971e687cf7e53d0bf63e38/lasagna",
                "yield": 8.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Mediterranean",
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
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 16-oz. jars vodka sauce",
                    "1 box no-boil lasagna noodles or cooked lasagna noodles",
                    "2 15-oz. tubs ricotta",
                    "1 large egg",
                    "kosher salt",
                    "4 c. shredded mozzarella",
                    "Torn fresh basil, for serving"
                ],
                "ingredients": [
                    {
                        "text": "2 16-oz. jars vodka sauce",
                        "quantity": 32.0,
                        "measure": "ounce",
                        "food": "vodka sauce",
                        "weight": 907.18474,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
                        "image": null
                    },
                    {
                        "text": "1 box no-boil lasagna noodles or cooked lasagna noodles",
                        "quantity": 1.0,
                        "measure": "box",
                        "food": "no-boil lasagna",
                        "weight": 453.0,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "2 15-oz. tubs ricotta",
                        "quantity": 30.0,
                        "measure": "ounce",
                        "food": "ricotta",
                        "weight": 850.48569375,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "1 large egg",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 50.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "kosher salt",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "kosher salt",
                        "weight": 16.2820226025,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "4 c. shredded mozzarella",
                        "quantity": 4.0,
                        "measure": "cup",
                        "food": "mozzarella",
                        "weight": 448.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                        "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
                    },
                    {
                        "text": "Torn fresh basil, for serving",
                        "quantity": 1.0,
                        "measure": "serving",
                        "food": "fresh basil",
                        "weight": 5.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                        "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
                    }
                ],
                "calories": 4586.252878225,
                "totalCO2Emissions": 33879.08603964096,
                "co2EmissionsClass": "G",
                "totalWeight": 2713.67043375,
                "totalTime": 55.0,
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
                        "quantity": 4586.252878225,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 200.1063949825,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 120.06698728215,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 2.8511173601875,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 55.073782586750006,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 11.838924872587501,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 459.63731962962504,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 431.45354852962504,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 28.1837711,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 46.88718811712501,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 239.81633818875005,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 956.6579899375001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 7511.249930725001,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 4273.386392725,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 645.0648497500001,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 5991.3223471125,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 18.708304905875003,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 26.657780604875,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 4098.577848175,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2115.2834752999997,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 64.4029318,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.8920874777875001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 4.896057448375,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 18.404886173837504,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.6157821681375,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 255.46605435000004,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 255.46605435000004,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 17.888528396875,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.492971387500001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 15.913494519125,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 66.41351535125,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1766.6196239137498,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 229.31264391125,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 307.85599228076927,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 600.3349364107501,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 153.21243987654168,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 112.73508440000002,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 479.6326763775001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 318.88599664583336,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 312.9687471135417,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 427.3386392725001,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 153.58686898809526,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 127.47494355558511,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 103.93502725486114,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 242.3434600443182,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 585.5111211678573,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 235.03149725555554,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 71.55881311111112,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 74.34062314895834,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 376.61980372115386,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 115.0305385864844,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 201.21401293365386,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 63.86651358750001,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 745.3553498697917,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 29.95314258333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 106.08996346083335,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 55.344596126041665,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 200.1063949825,
                        "hasRDI": true,
                        "daily": 307.85599228076927,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 120.06698728215,
                                "hasRDI": true,
                                "daily": 600.3349364107501,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 2.8511173601875,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 55.073782586750006,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 11.838924872587501,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 459.63731962962504,
                        "hasRDI": true,
                        "daily": 153.21243987654168,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 431.45354852962504,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 28.1837711,
                                "hasRDI": true,
                                "daily": 112.73508440000002,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 46.88718811712501,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 239.81633818875005,
                        "hasRDI": true,
                        "daily": 479.6326763775001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 956.6579899375001,
                        "hasRDI": true,
                        "daily": 318.88599664583336,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 7511.249930725001,
                        "hasRDI": true,
                        "daily": 312.9687471135417,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 4273.386392725,
                        "hasRDI": true,
                        "daily": 427.3386392725001,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 645.0648497500001,
                        "hasRDI": true,
                        "daily": 153.58686898809526,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 5991.3223471125,
                        "hasRDI": true,
                        "daily": 127.47494355558511,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 18.708304905875003,
                        "hasRDI": true,
                        "daily": 103.93502725486114,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 26.657780604875,
                        "hasRDI": true,
                        "daily": 242.3434600443182,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 4098.577848175,
                        "hasRDI": true,
                        "daily": 585.5111211678573,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2115.2834752999997,
                        "hasRDI": true,
                        "daily": 235.03149725555554,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 64.4029318,
                        "hasRDI": true,
                        "daily": 71.55881311111112,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.8920874777875001,
                        "hasRDI": true,
                        "daily": 74.34062314895834,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 4.896057448375,
                        "hasRDI": true,
                        "daily": 376.61980372115386,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 18.404886173837504,
                        "hasRDI": true,
                        "daily": 115.0305385864844,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.6157821681375,
                        "hasRDI": true,
                        "daily": 201.21401293365386,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 255.46605435000004,
                        "hasRDI": true,
                        "daily": 63.86651358750001,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 255.46605435000004,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 17.888528396875,
                        "hasRDI": true,
                        "daily": 745.3553498697917,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 4.492971387500001,
                        "hasRDI": true,
                        "daily": 29.95314258333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 15.913494519125,
                        "hasRDI": true,
                        "daily": 106.08996346083335,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 66.41351535125,
                        "hasRDI": true,
                        "daily": 55.344596126041665,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1766.6196239137498,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0895e4dfb82e5325cdcf05b946d71df0",
                "label": "Lean Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/9e0/9e0f6877f92b1bdce911892aa297b34e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ee9a450cb45bf2a56a560d23e6742afe875bebd2068e1634c70c88eb914bfb32",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9e0/9e0f6877f92b1bdce911892aa297b34e-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b86dab16ba92a11d06e0c9565305b2f7b7845a8e63aedcab10fa558d9df5ba2f",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9e0/9e0f6877f92b1bdce911892aa297b34e-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9ee00e1ed532d15ac648996203e9b9b2ca196cf82f89ebf7bf7373afe504f000",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9e0/9e0f6877f92b1bdce911892aa297b34e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ee9a450cb45bf2a56a560d23e6742afe875bebd2068e1634c70c88eb914bfb32",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/lean-lasagna-230145",
                "shareAs": "http://www.edamam.com/recipe/lean-lasagna-0895e4dfb82e5325cdcf05b946d71df0/lasagna",
                "yield": 8.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Peanut-Free",
                    "Tree-Nut-Free",
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
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "Vegetable-oil cooking spray",
                    "1/2 cup chopped onion",
                    "1 lb ground turkey breast",
                    "3 cups tomato sauce",
                    "3 tsp Italian seasoning (or 1 tsp each dried basil, parsley, and oregano)",
                    "1/4 tsp freshly ground black pepper",
                    "1/4 tsp garlic powder",
                    "1/2 cup chopped mushrooms",
                    "6 cups chopped fresh spinach (or chard)",
                    "2 cups fat-free ricotta",
                    "1/4 tsp nutmeg",
                    "1 package whole-wheat lasagna noodles(about 8 oz, or 9 noodles)",
                    "2 cups (8 oz) shredded part-skim mozzarella"
                ],
                "ingredients": [
                    {
                        "text": "Vegetable-oil cooking spray",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Vegetable-oil",
                        "weight": 30.413524348,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "1/2 cup chopped onion",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "onion",
                        "weight": 80.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "1 lb ground turkey breast",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "turkey breast",
                        "weight": 453.59237,
                        "foodCategory": "Poultry",
                        "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
                        "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
                    },
                    {
                        "text": "3 cups tomato sauce",
                        "quantity": 3.0,
                        "measure": "cup",
                        "food": "tomato sauce",
                        "weight": 735.0,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
                        "image": null
                    },
                    {
                        "text": "3 tsp Italian seasoning (or 1 tsp each dried basil, parsley, and oregano)",
                        "quantity": 3.0,
                        "measure": "teaspoon",
                        "food": "Italian seasoning",
                        "weight": 3.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                        "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
                    },
                    {
                        "text": "1/4 tsp freshly ground black pepper",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "black pepper",
                        "weight": 0.575,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1/4 tsp garlic powder",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "garlic powder",
                        "weight": 0.775,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_boq94r1a036492bdup9u1beyph0l",
                        "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
                    },
                    {
                        "text": "1/2 cup chopped mushrooms",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "mushrooms",
                        "weight": 35.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
                        "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
                    },
                    {
                        "text": "6 cups chopped fresh spinach (or chard)",
                        "quantity": 6.0,
                        "measure": "cup",
                        "food": "spinach",
                        "weight": 180.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                        "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
                    },
                    {
                        "text": "2 cups fat-free ricotta",
                        "quantity": 2.0,
                        "measure": "cup",
                        "food": "ricotta",
                        "weight": 496.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "1/4 tsp nutmeg",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "nutmeg",
                        "weight": 0.55,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
                        "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
                    },
                    {
                        "text": "1 package whole-wheat lasagna noodles(about 8 oz, or 9 noodles)",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "whole-wheat lasagna noodles",
                        "weight": 25.0,
                        "foodCategory": "grains",
                        "foodId": "food_aet2nhrax3uc3ubfefw91b6w094y",
                        "image": "https://www.edamam.com/food-img/fe8/fe84b730ff869fbd68ee9eb598ed455c.jpg"
                    },
                    {
                        "text": "2 cups (8 oz) shredded part-skim mozzarella",
                        "quantity": 8.0,
                        "measure": "ounce",
                        "food": "part-skim mozzarella",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_aabnx11b6l5nwuace295zazcnnxs",
                        "image": "https://www.edamam.com/food-img/166/16626441d34964553a4036bd50b7f43c.jpg"
                    }
                ],
                "calories": 2661.73388603632,
                "totalCO2Emissions": 23610.359698171844,
                "co2EmissionsClass": "G",
                "totalWeight": 2266.702079348,
                "totalTime": 0.0,
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
                        "quantity": 2661.73388603632,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 153.193754637,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 66.2002716370548,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.88545173174916,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 57.87175301606001,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 17.593716998708,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 117.9865293245,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 97.5519043245,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 20.434625,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 35.68425439050001,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 211.744971985,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 683.0245989000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5851.955883449999,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 3222.9446748,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 565.0117913500001,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 6091.2928129,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 23.605200047,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 19.868514915,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 3094.6066447499998,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1904.08575235,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 110.2108,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.8733721379,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.7360649160499997,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 36.78838323425,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.1234114555,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 534.85312255,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 534.85312255,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 7.994816671000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.7423885550000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 22.101335466863997,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 951.98083896,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1746.7203340300002,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 133.086694301816,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 235.6826994415385,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 331.00135818527394,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 39.328843108166666,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 81.7385,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 423.48994397,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 227.67486630000005,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 243.83149514374998,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 322.29446748,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 134.52661698809524,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 129.6019747425532,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 131.1400002611111,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 180.62286286363636,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 442.0866635357143,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 211.56508359444445,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 122.45644444444444,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 72.78101149166667,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 287.3896089269231,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 229.9273952140625,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 317.1854965769231,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 133.7132806375,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 333.1173612916667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 11.615923700000002,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 147.34223644576,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 793.3173658,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 153.193754637,
                        "hasRDI": true,
                        "daily": 235.6826994415385,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 66.2002716370548,
                                "hasRDI": true,
                                "daily": 331.00135818527394,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.88545173174916,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 57.87175301606001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 17.593716998708,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 117.9865293245,
                        "hasRDI": true,
                        "daily": 39.328843108166666,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 97.5519043245,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 20.434625,
                                "hasRDI": true,
                                "daily": 81.7385,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 35.68425439050001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 211.744971985,
                        "hasRDI": true,
                        "daily": 423.48994397,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 683.0245989000001,
                        "hasRDI": true,
                        "daily": 227.67486630000005,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5851.955883449999,
                        "hasRDI": true,
                        "daily": 243.83149514374998,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 3222.9446748,
                        "hasRDI": true,
                        "daily": 322.29446748,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 565.0117913500001,
                        "hasRDI": true,
                        "daily": 134.52661698809524,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 6091.2928129,
                        "hasRDI": true,
                        "daily": 129.6019747425532,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 23.605200047,
                        "hasRDI": true,
                        "daily": 131.1400002611111,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 19.868514915,
                        "hasRDI": true,
                        "daily": 180.62286286363636,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 3094.6066447499998,
                        "hasRDI": true,
                        "daily": 442.0866635357143,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1904.08575235,
                        "hasRDI": true,
                        "daily": 211.56508359444445,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 110.2108,
                        "hasRDI": true,
                        "daily": 122.45644444444444,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.8733721379,
                        "hasRDI": true,
                        "daily": 72.78101149166667,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 3.7360649160499997,
                        "hasRDI": true,
                        "daily": 287.3896089269231,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 36.78838323425,
                        "hasRDI": true,
                        "daily": 229.9273952140625,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.1234114555,
                        "hasRDI": true,
                        "daily": 317.1854965769231,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 534.85312255,
                        "hasRDI": true,
                        "daily": 133.7132806375,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 534.85312255,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 7.994816671000001,
                        "hasRDI": true,
                        "daily": 333.1173612916667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.7423885550000002,
                        "hasRDI": true,
                        "daily": 11.615923700000002,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 22.101335466863997,
                        "hasRDI": true,
                        "daily": 147.34223644576,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 951.98083896,
                        "hasRDI": true,
                        "daily": 793.3173658,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1746.7203340300002,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "Low Fat",
                    "Pasta",
                    "Cheese",
                    "Healthy",
                    "Italian",
                    "Poultry",
                    "Bake",
                    "turkey",
                    "Self",
                    "Tomato",
                    "Fall",
                    "American",
                    "Winter",
                    "Leafy Green"
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ac01da7ecfaf8aa3cdfa9ba10358c52b",
                "label": "8-Layer Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/0d9/0d94882b4ddba09d7b114af7f23f2c14.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4402aa811355602b626e6b4fe3c84cbe668c4642de7c74085e5cf738427406af",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0d9/0d94882b4ddba09d7b114af7f23f2c14-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e7cdc0afc6e136dfaeaec7063cc19ec9586306cf68c0eb0771dba59a83d7933",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0d9/0d94882b4ddba09d7b114af7f23f2c14-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cb5e96f9ab316494f0127ac41738ca630966eac6e8b5d91e823844fb35a1165a",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/0d9/0d94882b4ddba09d7b114af7f23f2c14.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4402aa811355602b626e6b4fe3c84cbe668c4642de7c74085e5cf738427406af",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/1094889/8-layer-lasagna",
                "shareAs": "http://www.edamam.com/recipe/8-layer-lasagna-ac01da7ecfaf8aa3cdfa9ba10358c52b/lasagna",
                "yield": 12.0,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Crustacean-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "3/4 cup dried porcini mushrooms (about 3/4 ounce)",
                    "1 bay leaf, preferably fresh",
                    "1 sprig fresh rosemary",
                    "1 sprig fresh thyme",
                    "2 whole cloves",
                    "3/4 cup (1 1/2 sticks) plus 2 tablespoons unsalted butter, divided",
                    "4 1/2 ounces prosciutto, cut into 1/4-inch pieces",
                    "2 1/4 cups very finely chopped onions",
                    "3/4 cup very finely chopped celery",
                    "3/4 cup very finely chopped carrots",
                    "2 tablespoons extra-virgin olive oil, divided",
                    "2 pounds boneless pork shoulder, trimmed and coarsely ground",
                    "2 teaspoons tomato paste",
                    "3 cups dry Marsala wine",
                    "3 cups Homemade Brown Chicken Stock",
                    "Coarse salt and freshly ground black pepper",
                    "10 ounces cremini mushrooms, finely chopped (about 3 1/4 cups)",
                    "2 pounds Lasagna Noodles for 8-Layer Lasagna",
                    "2 cups freshly grated Parmigiano-Reggiano cheese, plus more for topping",
                    "4 cups Martha's Bechamel Sauce for Lasagna"
                ],
                "ingredients": [
                    {
                        "text": "3/4 cup dried porcini mushrooms (about 3/4 ounce)",
                        "quantity": 0.75,
                        "measure": "ounce",
                        "food": "dried porcini mushrooms",
                        "weight": 21.26214234375,
                        "foodCategory": "vegetables",
                        "foodId": "food_awl67rcb7mtdtsa5s3s1bae6zijs",
                        "image": "https://www.edamam.com/food-img/34e/34e3396564deed18766b5e7d2b987bd0.jpg"
                    },
                    {
                        "text": "1 bay leaf, preferably fresh",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "bay leaf",
                        "weight": 0.6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
                        "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
                    },
                    {
                        "text": "1 sprig fresh rosemary",
                        "quantity": 1.0,
                        "measure": "sprig",
                        "food": "fresh rosemary",
                        "weight": 5.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
                        "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
                    },
                    {
                        "text": "1 sprig fresh thyme",
                        "quantity": 1.0,
                        "measure": "sprig",
                        "food": "fresh thyme",
                        "weight": 3.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                        "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
                    },
                    {
                        "text": "2 whole cloves",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "cloves",
                        "weight": 0.3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_abb00nxbw761ggavcuto7b3mw1s0",
                        "image": "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg"
                    },
                    {
                        "text": "3/4 cup (1 1/2 sticks) plus 2 tablespoons unsalted butter, divided",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "unsalted butter",
                        "weight": 170.25,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "3/4 cup (1 1/2 sticks) plus 2 tablespoons unsalted butter, divided",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "4 1/2 ounces prosciutto, cut into 1/4-inch pieces",
                        "quantity": 4.5,
                        "measure": "ounce",
                        "food": "prosciutto",
                        "weight": 127.5728540625,
                        "foodCategory": "cured meats",
                        "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
                        "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
                    },
                    {
                        "text": "2 1/4 cups very finely chopped onions",
                        "quantity": 2.25,
                        "measure": "cup",
                        "food": "onions",
                        "weight": 360.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "3/4 cup very finely chopped celery",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "celery",
                        "weight": 75.75,
                        "foodCategory": "vegetables",
                        "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
                        "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
                    },
                    {
                        "text": "3/4 cup very finely chopped carrots",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "carrots",
                        "weight": 96.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                        "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                    },
                    {
                        "text": "2 tablespoons extra-virgin olive oil, divided",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "extra-virgin olive oil",
                        "weight": 27.0,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "2 pounds boneless pork shoulder, trimmed and coarsely ground",
                        "quantity": 2.0,
                        "measure": "pound",
                        "food": "pork shoulder",
                        "weight": 907.18474,
                        "foodCategory": "meats",
                        "foodId": "food_a299wq8bece4vtb3ku5edb5gnjhc",
                        "image": "https://www.edamam.com/food-img/f7b/f7be68b0bf0b29937281c1cf8758e4e5.jpg"
                    },
                    {
                        "text": "2 teaspoons tomato paste",
                        "quantity": 2.0,
                        "measure": "teaspoon",
                        "food": "tomato paste",
                        "weight": 10.91666666722038,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
                        "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
                    },
                    {
                        "text": "3 cups dry Marsala wine",
                        "quantity": 3.0,
                        "measure": "cup",
                        "food": "wine",
                        "weight": 708.0,
                        "foodCategory": "wines",
                        "foodId": "food_bw5p1agbubb4dubpm8r0yax8fjco",
                        "image": "https://www.edamam.com/food-img/aeb/aebdd2e72bc13fa8ca762a408b6e58b6.jpg"
                    },
                    {
                        "text": "3 cups Homemade Brown Chicken Stock",
                        "quantity": 3.0,
                        "measure": "cup",
                        "food": "Chicken Stock",
                        "weight": 720.0,
                        "foodCategory": "canned soup",
                        "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                        "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                    },
                    {
                        "text": "Coarse salt and freshly ground black pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Coarse salt",
                        "weight": 33.91550185844083,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Coarse salt and freshly ground black pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 16.957750929220413,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "10 ounces cremini mushrooms, finely chopped (about 3 1/4 cups)",
                        "quantity": 3.25,
                        "measure": "cup",
                        "food": "cremini mushrooms",
                        "weight": 282.75,
                        "foodCategory": "vegetables",
                        "foodId": "food_bizlqkfby3d954bfyuxhsbhybslp",
                        "image": "https://www.edamam.com/food-img/17a/17a9ef54308a434004be9ba16c0eea03.jpg"
                    },
                    {
                        "text": "2 pounds Lasagna Noodles for 8-Layer Lasagna",
                        "quantity": 2.0,
                        "measure": "pound",
                        "food": "Lasagna Noodles",
                        "weight": 907.18474,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "2 cups freshly grated Parmigiano-Reggiano cheese, plus more for topping",
                        "quantity": 2.0,
                        "measure": "cup",
                        "food": "Parmigiano-Reggiano cheese",
                        "weight": 297.4125,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "4 cups Martha's Bechamel Sauce for Lasagna",
                        "quantity": 4.0,
                        "measure": "cup",
                        "food": "Bechamel Sauce",
                        "weight": 904.0,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_ar7pcr8af8v84tbmedzmibnzkyol",
                        "image": "https://www.edamam.com/food-img/19e/19eb6b82157a7f74e37fc286bd255c09.jpg"
                    }
                ],
                "calories": 10736.05750005884,
                "totalCO2Emissions": 37949.63219270236,
                "co2EmissionsClass": "G",
                "totalWeight": 5675.148807921445,
                "totalTime": 0.0,
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
                        "quantity": 10736.05750005884,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 526.0411904548317,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 252.64158407359434,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.356762,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 188.47467454185116,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 40.07016694021981,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 888.8104744308475,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 837.6885220628676,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 51.12195236798006,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 109.92533925981135,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 483.1810592425691,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1565.14016324375,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 13184.405120925378,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 5210.3897434212095,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 1161.7607350377623,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 11320.113399055874,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 1147.2467401662486,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 60.496463516667475,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 7543.570589611337,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3053.3238292179767,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 51.747068162152516,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 9.517133477369518,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 7.101289845270319,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 84.54998083237058,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 7.327655816884915,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 516.2921175814715,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 516.2921175814715,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 22.873213191750004,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 19.169332317968752,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 14.056382987729371,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 103.35065876398463,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 3619.0818854979916,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 536.802875002942,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 809.2941391612796,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1263.2079203679718,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 296.27015814361584,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 204.48780947192023,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 966.3621184851382,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 521.7133877479166,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 549.3502133718907,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 521.0389743421209,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 276.60969881851486,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 240.8534765756569,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 6373.5930009236035,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 549.9678501515225,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1077.6529413730482,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 339.2582032464419,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 57.49674240239169,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 793.0944564474598,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 546.2530650207938,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 528.4373802023161,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 563.6658320680705,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 129.07302939536788,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 953.0505496562503,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 127.79554878645834,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 93.70921991819581,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 86.1255489699872,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 526.0411904548317,
                        "hasRDI": true,
                        "daily": 809.2941391612796,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 252.64158407359434,
                                "hasRDI": true,
                                "daily": 1263.2079203679718,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.356762,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 188.47467454185116,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 40.07016694021981,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 888.8104744308475,
                        "hasRDI": true,
                        "daily": 296.27015814361584,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 837.6885220628676,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 51.12195236798006,
                                "hasRDI": true,
                                "daily": 204.48780947192023,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 109.92533925981135,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 483.1810592425691,
                        "hasRDI": true,
                        "daily": 966.3621184851382,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1565.14016324375,
                        "hasRDI": true,
                        "daily": 521.7133877479166,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 13184.405120925378,
                        "hasRDI": true,
                        "daily": 549.3502133718907,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 5210.3897434212095,
                        "hasRDI": true,
                        "daily": 521.0389743421209,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 1161.7607350377623,
                        "hasRDI": true,
                        "daily": 276.60969881851486,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 11320.113399055874,
                        "hasRDI": true,
                        "daily": 240.8534765756569,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 1147.2467401662486,
                        "hasRDI": true,
                        "daily": 6373.5930009236035,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 60.496463516667475,
                        "hasRDI": true,
                        "daily": 549.9678501515225,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 7543.570589611337,
                        "hasRDI": true,
                        "daily": 1077.6529413730482,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 3053.3238292179767,
                        "hasRDI": true,
                        "daily": 339.2582032464419,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 51.747068162152516,
                        "hasRDI": true,
                        "daily": 57.49674240239169,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 9.517133477369518,
                        "hasRDI": true,
                        "daily": 793.0944564474598,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 7.101289845270319,
                        "hasRDI": true,
                        "daily": 546.2530650207938,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 84.54998083237058,
                        "hasRDI": true,
                        "daily": 528.4373802023161,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 7.327655816884915,
                        "hasRDI": true,
                        "daily": 563.6658320680705,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 516.2921175814715,
                        "hasRDI": true,
                        "daily": 129.07302939536788,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 516.2921175814715,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 22.873213191750004,
                        "hasRDI": true,
                        "daily": 953.0505496562503,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 19.169332317968752,
                        "hasRDI": true,
                        "daily": 127.79554878645834,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 14.056382987729371,
                        "hasRDI": true,
                        "daily": 93.70921991819581,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 103.35065876398463,
                        "hasRDI": true,
                        "daily": 86.1255489699872,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 3619.0818854979916,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4d3da02e5d748bdc706b76258714d305",
                "label": "Tomato-Basil Lasagna Soup",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/621/62118911d1c95fe1b3fc12f61898a6a8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=54e881e2df901f9da23fbaae57f617be31451fda3cf0dfb66f548b7c464162d6",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/621/62118911d1c95fe1b3fc12f61898a6a8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6eccd74f1efba909e518e4011d2c56ad3f2b25305181c5ba6db8f0201dc0fc1c",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/621/62118911d1c95fe1b3fc12f61898a6a8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=57ac5bf60a42d6225ad431ba7712673f43f7ca86277d48f8e8d8c3f51ba03e3f",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/621/62118911d1c95fe1b3fc12f61898a6a8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=54e881e2df901f9da23fbaae57f617be31451fda3cf0dfb66f548b7c464162d6",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/621/62118911d1c95fe1b3fc12f61898a6a8-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d9d37200b37018b17a9481d57b3467b31d31abb21544ff967f068ffcdc142a1b",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/68090-tomato-basil-lasagna-soup",
                "shareAs": "http://www.edamam.com/recipe/tomato-basil-lasagna-soup-4d3da02e5d748bdc706b76258714d305/lasagna",
                "yield": 6.0,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Egg-Free",
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
                    "1 tablespoon Extra virgin olive oil",
                    "1/4 cup chopped yellow onion",
                    "3/4 pound loose sweet Italian sausage",
                    "25 ounces Pomodoro Fresco Tomato Basil Sauce",
                    "6 cups vegetable stock",
                    "9 ounces No-boil lasagna",
                    "1/4 cup chopped fresh basil leaves",
                    "1/4 cup heavy cream",
                    "1 clove garlic, chopped"
                ],
                "ingredients": [
                    {
                        "text": "1 tablespoon Extra virgin olive oil",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "Extra virgin olive oil",
                        "weight": 13.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1/4 cup chopped yellow onion",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "yellow onion",
                        "weight": 40.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "3/4 pound loose sweet Italian sausage",
                        "quantity": 0.75,
                        "measure": "pound",
                        "food": "sweet Italian sausage",
                        "weight": 340.1942775,
                        "foodCategory": "Cured meats",
                        "foodId": "food_ad9x10ia5xkw5xb5pz8d6bgho0nt",
                        "image": "https://www.edamam.com/food-img/1f5/1f5e4b71c948f4c6e6da9db6dbc32e9c.jpg"
                    },
                    {
                        "text": "25 ounces Pomodoro Fresco Tomato Basil Sauce",
                        "quantity": 25.0,
                        "measure": "ounce",
                        "food": "Tomato Basil Sauce",
                        "weight": 708.738078125,
                        "foodCategory": "canned soup",
                        "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
                        "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
                    },
                    {
                        "text": "6 cups vegetable stock",
                        "quantity": 6.0,
                        "measure": "cup",
                        "food": "vegetable stock",
                        "weight": 1362.0,
                        "foodCategory": "Vegan products",
                        "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
                        "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
                    },
                    {
                        "text": "9 ounces No-boil lasagna",
                        "quantity": 9.0,
                        "measure": "ounce",
                        "food": "No-boil lasagna",
                        "weight": 255.145708125,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "1/4 cup chopped fresh basil leaves",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "fresh basil",
                        "weight": 6.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                        "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
                    },
                    {
                        "text": "1/4 cup heavy cream",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "heavy cream",
                        "weight": 59.5,
                        "foodCategory": "Dairy",
                        "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
                        "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
                    },
                    {
                        "text": "1 clove garlic, chopped",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    }
                ],
                "calories": 2164.45952529693,
                "totalCO2Emissions": 8181.2394944685,
                "co2EmissionsClass": "F",
                "totalWeight": 2788.07806375,
                "totalTime": 0.0,
                "cuisineType": [
                    "italian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "soup",
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2164.45952529693,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 79.49368462902,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 28.98690219343875,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.78741166546875,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 30.51113741151626,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 10.345093898701249,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 259.0221467523025,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 236.6857920399725,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 22.33635471233,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 45.82123498405501,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 100.7145417234675,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 183.4680448125,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5285.90935601375,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 440.57413639713,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 334.11039655841,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3708.5647654266504,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 13.306953697627499,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 10.700534474692502,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1138.03537967159,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 527.3694469523899,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 23.96072229186,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.0356783533625,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.16446285428625,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 38.413520356285,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.3740040973187497,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 173.48067330001,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 173.48067330001,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.634052668,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.95698492,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 19.9998245523775,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 154.80598446674,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 2326.1572335884493,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 108.22297626484651,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 122.29797635233847,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 144.93451096719375,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 86.34071558410083,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 89.34541884932,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 201.429083446935,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 61.156014937500004,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 220.24622316723955,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 44.057413639713,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 79.55009441866905,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 78.90563330695001,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 73.92752054237499,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 97.27758613356819,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 162.57648281022713,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 58.59660521693221,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 26.623024768733334,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 86.306529446875,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 89.57406571432692,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 240.08450222678124,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 182.61569979374997,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 43.3701683250025,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 151.41886116666666,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.379899466666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 133.33216368251666,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 129.00498705561665,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 79.49368462902,
                        "hasRDI": true,
                        "daily": 122.29797635233847,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 28.98690219343875,
                                "hasRDI": true,
                                "daily": 144.93451096719375,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.78741166546875,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 30.51113741151626,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 10.345093898701249,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 259.0221467523025,
                        "hasRDI": true,
                        "daily": 86.34071558410083,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 236.6857920399725,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 22.33635471233,
                                "hasRDI": true,
                                "daily": 89.34541884932,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 45.82123498405501,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 100.7145417234675,
                        "hasRDI": true,
                        "daily": 201.429083446935,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 183.4680448125,
                        "hasRDI": true,
                        "daily": 61.156014937500004,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5285.90935601375,
                        "hasRDI": true,
                        "daily": 220.24622316723955,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 440.57413639713,
                        "hasRDI": true,
                        "daily": 44.057413639713,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 334.11039655841,
                        "hasRDI": true,
                        "daily": 79.55009441866905,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3708.5647654266504,
                        "hasRDI": true,
                        "daily": 78.90563330695001,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 13.306953697627499,
                        "hasRDI": true,
                        "daily": 73.92752054237499,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 10.700534474692502,
                        "hasRDI": true,
                        "daily": 97.27758613356819,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1138.03537967159,
                        "hasRDI": true,
                        "daily": 162.57648281022713,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 527.3694469523899,
                        "hasRDI": true,
                        "daily": 58.59660521693221,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 23.96072229186,
                        "hasRDI": true,
                        "daily": 26.623024768733334,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.0356783533625,
                        "hasRDI": true,
                        "daily": 86.306529446875,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.16446285428625,
                        "hasRDI": true,
                        "daily": 89.57406571432692,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 38.413520356285,
                        "hasRDI": true,
                        "daily": 240.08450222678124,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.3740040973187497,
                        "hasRDI": true,
                        "daily": 182.61569979374997,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 173.48067330001,
                        "hasRDI": true,
                        "daily": 43.3701683250025,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 173.48067330001,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.634052668,
                        "hasRDI": true,
                        "daily": 151.41886116666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.95698492,
                        "hasRDI": true,
                        "daily": 6.379899466666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 19.9998245523775,
                        "hasRDI": true,
                        "daily": 133.33216368251666,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 154.80598446674,
                        "hasRDI": true,
                        "daily": 129.00498705561665,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 2326.1572335884493,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "lasagna",
                    "soup",
                    "italian",
                    "tomato",
                    "basil",
                    "recipes",
                    "milk-cream"
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_58b7c9c778b004f7d53dea58d4eefb93",
                "label": "Lasagna Carbonara",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/325/325776868b059528738ae1f392d1a41b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ba6c56859f8c38c82ec30776dda298e32476f927c6f98eefba14a730238c666",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/325/325776868b059528738ae1f392d1a41b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=745989397f966d944d62e314ac38815c0e617c535267872763334ec9515a932d",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/325/325776868b059528738ae1f392d1a41b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5c0a193eec972fb4cb9dca2f0ebbaa3046decfe751c5fc2475cacf2fc16b884",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/325/325776868b059528738ae1f392d1a41b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ba6c56859f8c38c82ec30776dda298e32476f927c6f98eefba14a730238c666",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/3944-lasagna-carbonara",
                "shareAs": "http://www.edamam.com/recipe/lasagna-carbonara-58b7c9c778b004f7d53dea58d4eefb93/lasagna",
                "yield": 6.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Egg-Free",
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
                    "12-15 lasagna sheets, cooked according to the package",
                    "6 cloves of garlic, minced as close to a paste as you can get it",
                    "12 slices of bacon, cooked and crumbled, reserve bits for garnish",
                    "1 1/2 cup frozen peas",
                    "1 teaspoon kosher salt",
                    "1 teaspoon dried basil",
                    "1 teaspoon black pepper",
                    "2 1/4 cups heavy cream",
                    "4 tablespoons unsalted butter",
                    "1 cup grated parmesan cheese",
                    "1/4 cup pecorino cheese",
                    "2 cups shredded mozzarella cheese"
                ],
                "ingredients": [
                    {
                        "text": "12-15 lasagna sheets, cooked according to the package",
                        "quantity": 13.5,
                        "measure": "<unit>",
                        "food": "lasagna sheets",
                        "weight": 226.8,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "6 cloves of garlic, minced as close to a paste as you can get it",
                        "quantity": 6.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 18.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "12 slices of bacon, cooked and crumbled, reserve bits for garnish",
                        "quantity": 12.0,
                        "measure": "slice",
                        "food": "bacon",
                        "weight": 348.0,
                        "foodCategory": "cured meats",
                        "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
                        "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
                    },
                    {
                        "text": "1 1/2 cup frozen peas",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "frozen peas",
                        "weight": 201.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_aqrct01b4nxw5eaxoo8woaxc3xd7",
                        "image": "https://www.edamam.com/food-img/c91/c9130a361d5c5b279bf48c69e2466ec2.jpg"
                    },
                    {
                        "text": "1 teaspoon kosher salt",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "kosher salt",
                        "weight": 4.854166666912875,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 teaspoon dried basil",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "dried basil",
                        "weight": 0.7,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_abrithza96sev8ae5za0paqf42o0",
                        "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
                    },
                    {
                        "text": "1 teaspoon black pepper",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "black pepper",
                        "weight": 2.9,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "2 1/4 cups heavy cream",
                        "quantity": 2.25,
                        "measure": "cup",
                        "food": "heavy cream",
                        "weight": 535.5,
                        "foodCategory": "Dairy",
                        "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
                        "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
                    },
                    {
                        "text": "4 tablespoons unsalted butter",
                        "quantity": 4.0,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 56.8,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1 cup grated parmesan cheese",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "parmesan cheese",
                        "weight": 148.70625,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "1/4 cup pecorino cheese",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "pecorino cheese",
                        "weight": 33.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_bmxguz9abbdnfvbuklp2mbsrpt6b",
                        "image": "https://www.edamam.com/food-img/71a/71a53d043eded9a8914415178a07f879.jpg"
                    },
                    {
                        "text": "2 cups shredded mozzarella cheese",
                        "quantity": 2.0,
                        "measure": "cup",
                        "food": "mozzarella cheese",
                        "weight": 519.75,
                        "foodCategory": "Cheese",
                        "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
                        "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
                    }
                ],
                "calories": 6990.967500000001,
                "totalCO2Emissions": 35622.19040716732,
                "co2EmissionsClass": "G",
                "totalWeight": 2091.15625,
                "totalTime": 151.0,
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
                        "quantity": 6990.967500000001,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 546.8420725000001,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 305.261871,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 7.151760000000001,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 168.148284,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 36.9554635625,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 238.97054625000004,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 221.29234625000004,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 17.6782,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 38.85872187500001,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 280.9474375,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1554.93275,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 8916.03175,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 5633.99325,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 458.8692500000001,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2719.29325,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.62214125,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 28.169281874999996,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 4953.605375,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 4199.1784375,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 45.01460000000001,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.9881874375,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.69756175,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 22.779304937499997,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.3303316875,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 227.9804375,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 227.9804375,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 8.64161,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 13.46728125,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 9.644428750000003,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 110.69755625000002,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 981.3054750000001,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 349.5483750000001,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 841.2954961538462,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1526.3093549999999,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 79.65684875000001,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 70.7128,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 561.894875,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 518.3109166666667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 371.5013229166667,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 563.3993250000001,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 109.25458333333336,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 57.857303191489365,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 64.56745138888888,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 256.0843806818182,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 707.6579107142858,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 466.5753819444444,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 50.01622222222223,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 165.68228645833332,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 284.42782692307696,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 142.37065585937498,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 179.25628365384617,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 56.995109375,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 360.06708333333336,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 89.78187499999999,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 64.29619166666669,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 92.24796354166668,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 546.8420725000001,
                        "hasRDI": true,
                        "daily": 841.2954961538462,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 305.261871,
                                "hasRDI": true,
                                "daily": 1526.3093549999999,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 7.151760000000001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 168.148284,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 36.9554635625,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 238.97054625000004,
                        "hasRDI": true,
                        "daily": 79.65684875000001,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 221.29234625000004,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 17.6782,
                                "hasRDI": true,
                                "daily": 70.7128,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 38.85872187500001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 280.9474375,
                        "hasRDI": true,
                        "daily": 561.894875,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1554.93275,
                        "hasRDI": true,
                        "daily": 518.3109166666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 8916.03175,
                        "hasRDI": true,
                        "daily": 371.5013229166667,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 5633.99325,
                        "hasRDI": true,
                        "daily": 563.3993250000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 458.8692500000001,
                        "hasRDI": true,
                        "daily": 109.25458333333336,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2719.29325,
                        "hasRDI": true,
                        "daily": 57.857303191489365,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.62214125,
                        "hasRDI": true,
                        "daily": 64.56745138888888,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 28.169281874999996,
                        "hasRDI": true,
                        "daily": 256.0843806818182,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 4953.605375,
                        "hasRDI": true,
                        "daily": 707.6579107142858,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 4199.1784375,
                        "hasRDI": true,
                        "daily": 466.5753819444444,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 45.01460000000001,
                        "hasRDI": true,
                        "daily": 50.01622222222223,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.9881874375,
                        "hasRDI": true,
                        "daily": 165.68228645833332,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 3.69756175,
                        "hasRDI": true,
                        "daily": 284.42782692307696,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 22.779304937499997,
                        "hasRDI": true,
                        "daily": 142.37065585937498,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.3303316875,
                        "hasRDI": true,
                        "daily": 179.25628365384617,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 227.9804375,
                        "hasRDI": true,
                        "daily": 56.995109375,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 227.9804375,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 8.64161,
                        "hasRDI": true,
                        "daily": 360.06708333333336,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 13.46728125,
                        "hasRDI": true,
                        "daily": 89.78187499999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 9.644428750000003,
                        "hasRDI": true,
                        "daily": 64.29619166666669,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 110.69755625000002,
                        "hasRDI": true,
                        "daily": 92.24796354166668,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 981.3054750000001,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_aaa348404adcf3a3dc62af3d24222aec",
                "label": "Acorn Squash Lasagna recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/09d/09d3c8038233ccbe3e08d3dc8cce1c31?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d2dac0f14365bd43685e919b068152aa1ac501f51bc76050929c7b66693d6d39",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/09d/09d3c8038233ccbe3e08d3dc8cce1c31-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=79b500db65760aec993715260395aad7f973eae56d78398f04fc5dc1f6041ba4",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/09d/09d3c8038233ccbe3e08d3dc8cce1c31-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e913a8a6ce19fe1e4259f8e49112b230edda731416ca58eecaf806fdac75a0ba",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/09d/09d3c8038233ccbe3e08d3dc8cce1c31?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d2dac0f14365bd43685e919b068152aa1ac501f51bc76050929c7b66693d6d39",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "http://www.marthastewart.com/338746/acorn-squash-lasagna",
                "shareAs": "http://www.edamam.com/recipe/acorn-squash-lasagna-recipes-aaa348404adcf3a3dc62af3d24222aec/lasagna",
                "yield": 4.0,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Mediterranean",
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
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "olive oil",
                    "4 cups Acorn Squash Puree, or 2 packages (12 ounces each) frozen winter squash puree, thawed",
                    "4 cups Acorn Squash Puree, or 2 packages (12 ounces each) frozen winter squash puree, thawed",
                    "1/2 teaspoon dried rubbed sage",
                    "coarse salt",
                    "ground pepper",
                    "1 container (15 ounces) part-skim ricotta cheese",
                    "1 cup grated Parmesan cheese",
                    "8 no-boil lasagna noodles, half of an 8-ounce package"
                ],
                "ingredients": [
                    {
                        "text": "olive oil",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "olive oil",
                        "weight": 23.525041050834556,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "4 cups Acorn Squash Puree, or 2 packages (12 ounces each) frozen winter squash puree, thawed",
                        "quantity": 4.0,
                        "measure": "cup",
                        "food": "winter squash",
                        "weight": 464.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6aiaf8aokpc4gagdiu88b3cj13t",
                        "image": null
                    },
                    {
                        "text": "4 cups Acorn Squash Puree, or 2 packages (12 ounces each) frozen winter squash puree, thawed",
                        "quantity": 4.0,
                        "measure": "cup",
                        "food": "winter squash",
                        "weight": 464.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6aiaf8aokpc4gagdiu88b3cj13t",
                        "image": null
                    },
                    {
                        "text": "1/2 teaspoon dried rubbed sage",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "sage",
                        "weight": 1.333333333423504,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b00mwy0bne9gs4au15ja8ab10h0e",
                        "image": "https://www.edamam.com/food-img/509/50984580e9aad4b4ddd5b7ed45a64bf4.jpg"
                    },
                    {
                        "text": "coarse salt",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "coarse salt",
                        "weight": 10.37869458125054,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "ground pepper",
                        "weight": 5.18934729062527,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 container (15 ounces) part-skim ricotta cheese",
                        "quantity": 15.0,
                        "measure": "ounce",
                        "food": "ricotta cheese",
                        "weight": 425.242846875,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "1 cup grated Parmesan cheese",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "Parmesan cheese",
                        "weight": 148.70625,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "8 no-boil lasagna noodles, half of an 8-ounce package",
                        "quantity": 0.5,
                        "measure": "package",
                        "food": "no-boil lasagna",
                        "weight": 226.5,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    }
                ],
                "calories": 2601.814394901631,
                "totalCO2Emissions": 14720.821652683468,
                "co2EmissionsClass": "G",
                "totalWeight": 1763.1733218052777,
                "totalTime": 85.0,
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
                        "quantity": 2601.814394901631,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 109.04276332043715,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 53.59940169506954,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.41605868009375,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 40.21084730379697,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 7.080994894060073,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 288.74471181720077,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 265.7264736193029,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 23.018238197897865,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 27.831294384224044,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 124.24217360594292,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 309.48924496875003,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4089.349181601383,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 2984.4854342532612,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 415.07153494157575,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4905.080940960138,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.124831930176693,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 11.61475536612224,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2337.8328612401033,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1454.4878108520682,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 114.57600000002923,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.6111848360016385,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.4860092588109284,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 9.611501863503703,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.3680859162535617,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 295.44467374798666,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 295.44467374798666,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 5.3990391984375,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.5940169437500002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 5.698979338045256,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 63.11278183639476,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1214.5475078980544,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 130.09071974508157,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 167.75809741605715,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 267.9970084753477,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 96.24823727240026,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 92.07295279159148,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 248.48434721188585,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 103.16308165625001,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 170.38954923339097,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 298.44854342532614,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 98.82655593847042,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 104.36342427574762,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 61.80462183431496,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 105.58868514656582,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 333.9761230343005,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 161.6097567613409,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 127.30666666669913,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 50.932069666803216,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 191.23148144699448,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 60.07188664689814,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 182.16045509642782,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 73.86116843699666,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 224.9599666015625,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 10.626779625000003,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 37.993195586968376,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 52.5939848636623,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 109.04276332043715,
                        "hasRDI": true,
                        "daily": 167.75809741605715,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 53.59940169506954,
                                "hasRDI": true,
                                "daily": 267.9970084753477,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.41605868009375,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 40.21084730379697,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 7.080994894060073,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 288.74471181720077,
                        "hasRDI": true,
                        "daily": 96.24823727240026,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 265.7264736193029,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 23.018238197897865,
                                "hasRDI": true,
                                "daily": 92.07295279159148,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 27.831294384224044,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 124.24217360594292,
                        "hasRDI": true,
                        "daily": 248.48434721188585,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 309.48924496875003,
                        "hasRDI": true,
                        "daily": 103.16308165625001,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4089.349181601383,
                        "hasRDI": true,
                        "daily": 170.38954923339097,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 2984.4854342532612,
                        "hasRDI": true,
                        "daily": 298.44854342532614,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 415.07153494157575,
                        "hasRDI": true,
                        "daily": 98.82655593847042,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4905.080940960138,
                        "hasRDI": true,
                        "daily": 104.36342427574762,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.124831930176693,
                        "hasRDI": true,
                        "daily": 61.80462183431496,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 11.61475536612224,
                        "hasRDI": true,
                        "daily": 105.58868514656582,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2337.8328612401033,
                        "hasRDI": true,
                        "daily": 333.9761230343005,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1454.4878108520682,
                        "hasRDI": true,
                        "daily": 161.6097567613409,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 114.57600000002923,
                        "hasRDI": true,
                        "daily": 127.30666666669913,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.6111848360016385,
                        "hasRDI": true,
                        "daily": 50.932069666803216,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.4860092588109284,
                        "hasRDI": true,
                        "daily": 191.23148144699448,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 9.611501863503703,
                        "hasRDI": true,
                        "daily": 60.07188664689814,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.3680859162535617,
                        "hasRDI": true,
                        "daily": 182.16045509642782,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 295.44467374798666,
                        "hasRDI": true,
                        "daily": 73.86116843699666,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 295.44467374798666,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 5.3990391984375,
                        "hasRDI": true,
                        "daily": 224.9599666015625,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.5940169437500002,
                        "hasRDI": true,
                        "daily": 10.626779625000003,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 5.698979338045256,
                        "hasRDI": true,
                        "daily": 37.993195586968376,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 63.11278183639476,
                        "hasRDI": true,
                        "daily": 52.5939848636623,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1214.5475078980544,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "avocado",
                    "devilled eggs",
                    "baked acorn squash",
                    "winter squash soup",
                    "healthy vegetarian winter",
                    "acorn squash casserole",
                    "healthy baked acorn squash",
                    "squash lasagne",
                    "winter savory",
                    "winter vegetarian pasta",
                    "winter vegetable vegetarian",
                    "martha stewart winter recipes",
                    "no tomato lasagna",
                    "acorn squash dinner",
                    "lasagna with squash",
                    "acorn squash and pasta",
                    "acorn squash lasagne",
                    "squash bechamel lasagna",
                    "acorn squash baked winter",
                    "acorn squash lasanga"
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d962586293585947f77d2cc34dfefec9",
                "label": "Crab Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f3f/f3f90f533b84e0543597aa2d7aea52f6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=25703df3d0ed85f040fe6bab399510e6486b9b16fb5cc07ea5b765f67a6d5406",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f3f/f3f90f533b84e0543597aa2d7aea52f6-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bf37f74520c94073e628339f1a32c7b41eaf6f53b338e30f808fa31d3d0f5708",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f3f/f3f90f533b84e0543597aa2d7aea52f6-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8f4b2952442f6c5c2d5ff367d0ae85e82c62d373a3751bce58bfe73108360353",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f3f/f3f90f533b84e0543597aa2d7aea52f6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=25703df3d0ed85f040fe6bab399510e6486b9b16fb5cc07ea5b765f67a6d5406",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/35956-crab-lasagna",
                "shareAs": "http://www.edamam.com/recipe/crab-lasagna-d962586293585947f77d2cc34dfefec9/lasagna",
                "yield": 8.0,
                "dietLabels": [],
                "healthLabels": [
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "8 ounces lasagna noodles (dry), not the \\\\\\\"no boil\\\\\\\" type",
                    "1 teaspoon olive oil",
                    "8 ounces cream cheese, softened",
                    "2 cans cream of mushroom soup",
                    "1 pound crab meat",
                    "16 ounces cottage cheese",
                    "1 onion, chopped",
                    "1 egg",
                    "1/2 teaspoon salt",
                    "1-2 tablespoons pesto",
                    "1 cup shredded cheddar cheese",
                    "1/4 cup grated parmesan cheese"
                ],
                "ingredients": [
                    {
                        "text": "8 ounces lasagna noodles (dry), not the \\\\\\\"no boil\\\\\\\" type",
                        "quantity": 8.0,
                        "measure": "ounce",
                        "food": "lasagna noodles",
                        "weight": 226.796185,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "1 teaspoon olive oil",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "olive oil",
                        "weight": 4.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "8 ounces cream cheese, softened",
                        "quantity": 8.0,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "2 cans cream of mushroom soup",
                        "quantity": 2.0,
                        "measure": "can",
                        "food": "cream of mushroom soup",
                        "weight": 606.0,
                        "foodCategory": "canned soup",
                        "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
                        "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
                    },
                    {
                        "text": "1 pound crab meat",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "crab meat",
                        "weight": 453.59237,
                        "foodCategory": "seafood",
                        "foodId": "food_ao6g1pnapm2qazallo96ybafy3ie",
                        "image": "https://www.edamam.com/food-img/ac5/ac53a456f302ed1167f8bdc818161188.jpg"
                    },
                    {
                        "text": "16 ounces cottage cheese",
                        "quantity": 16.0,
                        "measure": "ounce",
                        "food": "cottage cheese",
                        "weight": 453.59237,
                        "foodCategory": "Cheese",
                        "foodId": "food_adqkk4ta6dggveb3hy192aqzdfnv",
                        "image": "https://www.edamam.com/food-img/8ee/8ee7b75071fc907cce2819031a9ae563.jpg"
                    },
                    {
                        "text": "1 onion, chopped",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "onion",
                        "weight": 125.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "1 egg",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 43.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1/2 teaspoon salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1-2 tablespoons pesto",
                        "quantity": 1.5,
                        "measure": "tablespoon",
                        "food": "pesto",
                        "weight": 25.4999999995689,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_amlzb2yam5vuysaaikhe3a68ojnn",
                        "image": "https://www.edamam.com/food-img/6e3/6e3933ee3f66304462b42f766329633c.jpg"
                    },
                    {
                        "text": "1 cup shredded cheddar cheese",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "cheddar cheese",
                        "weight": 113.0,
                        "foodCategory": "Cheese",
                        "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                        "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
                    },
                    {
                        "text": "1/4 cup grated parmesan cheese",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "parmesan cheese",
                        "weight": 37.1765625,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    }
                ],
                "calories": 3772.1437973126112,
                "totalCO2Emissions": 33004.38919605177,
                "co2EmissionsClass": "G",
                "totalWeight": 2314.9536724995687,
                "totalTime": 0.0,
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
                        "quantity": 3772.1437973126112,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 200.08147801647675,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 90.94937368237905,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 2.8727382963,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 50.38407185575001,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 26.528945591725,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 257.4707250029942,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 243.41647180210256,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 14.054253200891612,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 35.160305193250004,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 230.40846610247849,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1045.2751291274944,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 10393.472238095688,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 2465.9964124082694,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 422.901965,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3201.4741973500004,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 9.022013451337418,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 29.99740137925,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 3492.92006545,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1409.582834775,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 24.21854821,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.677764733425,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.7531915912000002,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 19.420134779025,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.7877237055750002,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 436.190522425,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 436.190522425,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 19.625843469000007,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.3894751825,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 15.947484936000002,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 131.80829474249998,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1575.3874145250002,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 188.60718986563055,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 307.8176584868873,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 454.7468684118952,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 85.82357500099806,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 56.21701280356645,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 460.81693220495697,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 348.42504304249815,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 433.061343253987,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 246.59964124082694,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 100.69094404761906,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 68.11647228404257,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 50.122296951874546,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 272.70364890227273,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 498.9885807785714,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 156.62031497499999,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 26.909498011111115,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 56.48039445208333,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 211.78396855384614,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 121.37584236890623,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 137.51720812115386,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 109.04763060625001,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 817.7434778750003,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 22.59650121666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 106.31656624000001,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 109.84024561874999,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 200.08147801647675,
                        "hasRDI": true,
                        "daily": 307.8176584868873,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 90.94937368237905,
                                "hasRDI": true,
                                "daily": 454.7468684118952,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 2.8727382963,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 50.38407185575001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 26.528945591725,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 257.4707250029942,
                        "hasRDI": true,
                        "daily": 85.82357500099806,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 243.41647180210256,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 14.054253200891612,
                                "hasRDI": true,
                                "daily": 56.21701280356645,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 35.160305193250004,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 230.40846610247849,
                        "hasRDI": true,
                        "daily": 460.81693220495697,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1045.2751291274944,
                        "hasRDI": true,
                        "daily": 348.42504304249815,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 10393.472238095688,
                        "hasRDI": true,
                        "daily": 433.061343253987,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 2465.9964124082694,
                        "hasRDI": true,
                        "daily": 246.59964124082694,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 422.901965,
                        "hasRDI": true,
                        "daily": 100.69094404761906,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3201.4741973500004,
                        "hasRDI": true,
                        "daily": 68.11647228404257,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 9.022013451337418,
                        "hasRDI": true,
                        "daily": 50.122296951874546,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 29.99740137925,
                        "hasRDI": true,
                        "daily": 272.70364890227273,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 3492.92006545,
                        "hasRDI": true,
                        "daily": 498.9885807785714,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1409.582834775,
                        "hasRDI": true,
                        "daily": 156.62031497499999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 24.21854821,
                        "hasRDI": true,
                        "daily": 26.909498011111115,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.677764733425,
                        "hasRDI": true,
                        "daily": 56.48039445208333,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.7531915912000002,
                        "hasRDI": true,
                        "daily": 211.78396855384614,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 19.420134779025,
                        "hasRDI": true,
                        "daily": 121.37584236890623,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.7877237055750002,
                        "hasRDI": true,
                        "daily": 137.51720812115386,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 436.190522425,
                        "hasRDI": true,
                        "daily": 109.04763060625001,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 436.190522425,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 19.625843469000007,
                        "hasRDI": true,
                        "daily": 817.7434778750003,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 3.3894751825,
                        "hasRDI": true,
                        "daily": 22.59650121666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 15.947484936000002,
                        "hasRDI": true,
                        "daily": 106.31656624000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 131.80829474249998,
                        "hasRDI": true,
                        "daily": 109.84024561874999,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1575.3874145250002,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "pasta",
                    "lasagna",
                    "seafood",
                    "entree",
                    "italian",
                    "crab",
                    "recipes",
                    "cream-cheese",
                    "cottage-cheese"
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1f4247e7229310adb2c5092d3ab40648",
                "label": "Very Vegetable Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5b3/5b3da1ea88b768b90ab6e7cc49e4e25a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f4c1f50fc4d6e47776edab80ea4df6b989489d959d9ac58c5e89b1e750ffe0f1",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5b3/5b3da1ea88b768b90ab6e7cc49e4e25a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e67c1ede53ef3829acf03dd0b4f0c74dce2e0fc5417e9cdba74312f94453a7a5",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5b3/5b3da1ea88b768b90ab6e7cc49e4e25a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4469885cff6b2ab9d99e4bf3950b78926d8ab0be7e43db67bb26af43900e16d4",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5b3/5b3da1ea88b768b90ab6e7cc49e4e25a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f4c1f50fc4d6e47776edab80ea4df6b989489d959d9ac58c5e89b1e750ffe0f1",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/1048960/very-vegetable-lasagna",
                "shareAs": "http://www.edamam.com/recipe/very-vegetable-lasagna-1f4247e7229310adb2c5092d3ab40648/lasagna",
                "yield": 14.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
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
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 pounds zucchini (about 4 medium), cut lengthwise into 1/4-inch slices",
                    "15 ounces low-fat ricotta",
                    "10 ounces frozen chopped spinach, thawed and squeezed dry",
                    "1/2 cup grated Parmesan (2 ounces), divided",
                    "1 large egg, lightly beaten",
                    "Coarse salt and pepper",
                    "7 cups marinara sauce, divided",
                    "15 no-boil lasagna noodles (3/4 pound total)",
                    "1 cup shredded part-skim mozzarella (4 ounces), divided"
                ],
                "ingredients": [
                    {
                        "text": "2 pounds zucchini (about 4 medium), cut lengthwise into 1/4-inch slices",
                        "quantity": 2.0,
                        "measure": "pound",
                        "food": "zucchini",
                        "weight": 907.18474,
                        "foodCategory": "vegetables",
                        "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
                        "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
                    },
                    {
                        "text": "15 ounces low-fat ricotta",
                        "quantity": 15.0,
                        "measure": "ounce",
                        "food": "low-fat ricotta",
                        "weight": 425.242846875,
                        "foodCategory": "Cheese",
                        "foodId": "food_bq8uocoaf7p03aa32mcwjbtok51o",
                        "image": "https://www.edamam.com/food-img/9f7/9f7f95228e22fb736a2b1e8aaaab359c.jpg"
                    },
                    {
                        "text": "10 ounces frozen chopped spinach, thawed and squeezed dry",
                        "quantity": 10.0,
                        "measure": "ounce",
                        "food": "spinach",
                        "weight": 283.49523125,
                        "foodCategory": "vegetables",
                        "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                        "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
                    },
                    {
                        "text": "1/2 cup grated Parmesan (2 ounces), divided",
                        "quantity": 2.0,
                        "measure": "ounce",
                        "food": "Parmesan",
                        "weight": 56.69904625,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "1 large egg, lightly beaten",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 50.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "Coarse salt and pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Coarse salt",
                        "weight": 24.35411974125,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Coarse salt and pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 12.177059870625,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "7 cups marinara sauce, divided",
                        "quantity": 7.0,
                        "measure": "cup",
                        "food": "marinara sauce",
                        "weight": 1848.0,
                        "foodCategory": "canned soup",
                        "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
                        "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
                    },
                    {
                        "text": "15 no-boil lasagna noodles (3/4 pound total)",
                        "quantity": 15.0,
                        "measure": "noodle",
                        "food": "no-boil lasagna",
                        "weight": 375.0,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "1 cup shredded part-skim mozzarella (4 ounces), divided",
                        "quantity": 4.0,
                        "measure": "ounce",
                        "food": "mozzarella",
                        "weight": 113.3980925,
                        "foodCategory": "Cheese",
                        "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                        "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
                    }
                ],
                "calories": 3784.8954158252686,
                "totalCO2Emissions": 19594.88331474711,
                "co2EmissionsClass": "F",
                "totalWeight": 4071.197016745625,
                "totalTime": 75.0,
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
                        "quantity": 3784.8954158252686,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 117.44834391446986,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 52.86055436292669,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.14836,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 29.73355103503142,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 19.217616685133837,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 490.4937864641999,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 426.84024782943186,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 63.65353863476812,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 126.2631534306095,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 195.038832830545,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 482.92512705625,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 10109.385317567874,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 3465.353868939369,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 1056.8808841475188,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 11600.359689498062,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 34.29704913081269,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 24.74762512708544,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 3512.0676573143373,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2851.8383721963187,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 279.00822844125,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.588963691666525,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 4.287115052473375,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 85.74010498627511,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 6.060104067048519,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1168.2035562092562,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 1168.2035562092562,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 4.944069319937499,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.162330448125,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 52.897580575342,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1692.2070287872004,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 3210.354345566328,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 189.24477079126345,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 180.68975986841517,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 264.3027718146335,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 163.49792882139997,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 254.61415453907247,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 390.07766566109,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 160.97504235208334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 421.2243882319948,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 346.5353868939369,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 251.63830574940923,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 246.81616360634175,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 190.53916183784827,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 224.97841024623128,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 501.7239510449054,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 316.87093024403543,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 310.0091427125,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 132.41364097221043,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 329.7780809594904,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 535.8756561642194,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 466.1618513114245,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 292.05088905231406,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 206.00288833072915,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 14.415536320833333,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 352.65053716894664,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1410.1725239893337,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 117.44834391446986,
                        "hasRDI": true,
                        "daily": 180.68975986841517,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 52.86055436292669,
                                "hasRDI": true,
                                "daily": 264.3027718146335,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.14836,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 29.73355103503142,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 19.217616685133837,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 490.4937864641999,
                        "hasRDI": true,
                        "daily": 163.49792882139997,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 426.84024782943186,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 63.65353863476812,
                                "hasRDI": true,
                                "daily": 254.61415453907247,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 126.2631534306095,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 195.038832830545,
                        "hasRDI": true,
                        "daily": 390.07766566109,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 482.92512705625,
                        "hasRDI": true,
                        "daily": 160.97504235208334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 10109.385317567874,
                        "hasRDI": true,
                        "daily": 421.2243882319948,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 3465.353868939369,
                        "hasRDI": true,
                        "daily": 346.5353868939369,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 1056.8808841475188,
                        "hasRDI": true,
                        "daily": 251.63830574940923,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 11600.359689498062,
                        "hasRDI": true,
                        "daily": 246.81616360634175,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 34.29704913081269,
                        "hasRDI": true,
                        "daily": 190.53916183784827,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 24.74762512708544,
                        "hasRDI": true,
                        "daily": 224.97841024623128,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 3512.0676573143373,
                        "hasRDI": true,
                        "daily": 501.7239510449054,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2851.8383721963187,
                        "hasRDI": true,
                        "daily": 316.87093024403543,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 279.00822844125,
                        "hasRDI": true,
                        "daily": 310.0091427125,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.588963691666525,
                        "hasRDI": true,
                        "daily": 132.41364097221043,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 4.287115052473375,
                        "hasRDI": true,
                        "daily": 329.7780809594904,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 85.74010498627511,
                        "hasRDI": true,
                        "daily": 535.8756561642194,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 6.060104067048519,
                        "hasRDI": true,
                        "daily": 466.1618513114245,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1168.2035562092562,
                        "hasRDI": true,
                        "daily": 292.05088905231406,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 1168.2035562092562,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 4.944069319937499,
                        "hasRDI": true,
                        "daily": 206.00288833072915,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.162330448125,
                        "hasRDI": true,
                        "daily": 14.415536320833333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 52.897580575342,
                        "hasRDI": true,
                        "daily": 352.65053716894664,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 1692.2070287872004,
                        "hasRDI": true,
                        "daily": 1410.1725239893337,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 3210.354345566328,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ac88339575f9ac25d30c7da2259c2b5f",
                "label": "Zucchini Lasagna recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/bce/bce3c63aa076f85ea1e71b3a5a2f7269?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=589b46da64e7baba29085872894e83c9850aa7f808eb051fcea4aee6d6e61d09",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bce/bce3c63aa076f85ea1e71b3a5a2f7269-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=61a79201ae25897d2eb50cc1b2ae9215224898fe28dfa36f9af9825aee20caa3",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bce/bce3c63aa076f85ea1e71b3a5a2f7269-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=66b675950b18fed77eb5bb5b8f03eca022ebd381fa36a16381dbbc8c7eed86d7",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bce/bce3c63aa076f85ea1e71b3a5a2f7269?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=589b46da64e7baba29085872894e83c9850aa7f808eb051fcea4aee6d6e61d09",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "http://www.marthastewart.com/314465/zucchini-lasagna",
                "shareAs": "http://www.edamam.com/recipe/zucchini-lasagna-recipes-ac88339575f9ac25d30c7da2259c2b5f/lasagna",
                "yield": 4.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Mediterranean",
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
                    "olive oil",
                    "8 ounces reduced-fat cream cheese, room temperature",
                    "1 container (15 ounces) part-skim ricotta cheese",
                    "coarse salt",
                    "ground pepper",
                    "2 medium zucchini (8 ounces each), halved lengthwise, then sliced thinly crosswise",
                    "1 garlic clove, minced",
                    "2 teaspoons dried oregano",
                    "6 no-boil lasagna noodles",
                    "2 ounces shredded (1/2 cup) part-skim mozzarella cheese"
                ],
                "ingredients": [
                    {
                        "text": "olive oil",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "olive oil",
                        "weight": 17.915694094499997,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "8 ounces reduced-fat cream cheese, room temperature",
                        "quantity": 8.0,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 226.796185,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "1 container (15 ounces) part-skim ricotta cheese",
                        "quantity": 15.0,
                        "measure": "ounce",
                        "food": "ricotta cheese",
                        "weight": 425.242846875,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "coarse salt",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "coarse salt",
                        "weight": 7.90398268875,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "ground pepper",
                        "weight": 3.951991344375,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "2 medium zucchini (8 ounces each), halved lengthwise, then sliced thinly crosswise",
                        "quantity": 16.0,
                        "measure": "ounce",
                        "food": "zucchini",
                        "weight": 453.59237,
                        "foodCategory": "vegetables",
                        "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
                        "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
                    },
                    {
                        "text": "1 garlic clove, minced",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "2 teaspoons dried oregano",
                        "quantity": 2.0,
                        "measure": "teaspoon",
                        "food": "dried oregano",
                        "weight": 2.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
                        "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
                    },
                    {
                        "text": "6 no-boil lasagna noodles",
                        "quantity": 6.0,
                        "measure": "noodle",
                        "food": "no-boil lasagna",
                        "weight": 150.0,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "2 ounces shredded (1/2 cup) part-skim mozzarella cheese",
                        "quantity": 2.0,
                        "measure": "ounce",
                        "food": "mozzarella cheese",
                        "weight": 56.69904625,
                        "foodCategory": "Cheese",
                        "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
                        "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
                    }
                ],
                "calories": 2419.7732867122613,
                "totalCO2Emissions": 17537.904312937997,
                "co2EmissionsClass": "G",
                "totalWeight": 1343.0284850136993,
                "totalTime": 60.0,
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
                        "quantity": 2419.7732867122613,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 157.1296732158766,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 85.2969065303628,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 4.06957404459375,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 48.93115506943493,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 8.883622143823112,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 175.18643185423753,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 164.16445052911064,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 11.021981325126875,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 25.1632641417915,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 83.75412141484001,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 487.89529298125,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3114.2784756401206,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1578.4938831344843,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 287.3775297208795,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2822.636434895868,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 5.743773183739933,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 8.415944404435388,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1592.1869645816125,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1366.3790999754815,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 78.1153825185,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.459235428870675,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.4579739048923748,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 5.494533542634625,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.5595329135008813,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 177.87819311354377,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 177.87819311354377,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 4.527418843062501,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.1339809250000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 6.208738281077,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 59.294629321039,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 885.9546578848216,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 120.98866433561307,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 241.73795879365633,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 426.48453265181405,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 58.395477284745844,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 44.08792530050751,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 167.50824282968003,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 162.63176432708335,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 129.7616031516717,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 157.84938831344843,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 68.42322136211418,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 60.05609435948656,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 31.909851020777403,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 76.50858549486716,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 227.4552806545161,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 151.8198999972757,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 86.794869465,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 38.26961907255625,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 189.07491576095188,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 34.34083464146641,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 119.96407026929856,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 44.46954827838594,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 188.64245179427087,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 7.559872833333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 41.39158854051333,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 49.412191100865826,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 157.1296732158766,
                        "hasRDI": true,
                        "daily": 241.73795879365633,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 85.2969065303628,
                                "hasRDI": true,
                                "daily": 426.48453265181405,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 4.06957404459375,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 48.93115506943493,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 8.883622143823112,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 175.18643185423753,
                        "hasRDI": true,
                        "daily": 58.395477284745844,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 164.16445052911064,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 11.021981325126875,
                                "hasRDI": true,
                                "daily": 44.08792530050751,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 25.1632641417915,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 83.75412141484001,
                        "hasRDI": true,
                        "daily": 167.50824282968003,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 487.89529298125,
                        "hasRDI": true,
                        "daily": 162.63176432708335,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3114.2784756401206,
                        "hasRDI": true,
                        "daily": 129.7616031516717,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1578.4938831344843,
                        "hasRDI": true,
                        "daily": 157.84938831344843,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 287.3775297208795,
                        "hasRDI": true,
                        "daily": 68.42322136211418,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2822.636434895868,
                        "hasRDI": true,
                        "daily": 60.05609435948656,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 5.743773183739933,
                        "hasRDI": true,
                        "daily": 31.909851020777403,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 8.415944404435388,
                        "hasRDI": true,
                        "daily": 76.50858549486716,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1592.1869645816125,
                        "hasRDI": true,
                        "daily": 227.4552806545161,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1366.3790999754815,
                        "hasRDI": true,
                        "daily": 151.8198999972757,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 78.1153825185,
                        "hasRDI": true,
                        "daily": 86.794869465,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.459235428870675,
                        "hasRDI": true,
                        "daily": 38.26961907255625,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.4579739048923748,
                        "hasRDI": true,
                        "daily": 189.07491576095188,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 5.494533542634625,
                        "hasRDI": true,
                        "daily": 34.34083464146641,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.5595329135008813,
                        "hasRDI": true,
                        "daily": 119.96407026929856,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 177.87819311354377,
                        "hasRDI": true,
                        "daily": 44.46954827838594,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 177.87819311354377,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 4.527418843062501,
                        "hasRDI": true,
                        "daily": 188.64245179427087,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.1339809250000001,
                        "hasRDI": true,
                        "daily": 7.559872833333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 6.208738281077,
                        "hasRDI": true,
                        "daily": 41.39158854051333,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 59.294629321039,
                        "hasRDI": true,
                        "daily": 49.412191100865826,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 885.9546578848216,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "baked zucchini",
                    "cream cheese",
                    "lasagna made with zucchini",
                    "noodles",
                    "squash and zucchini",
                    "vegitarian lasagna",
                    "lasagna with sour cream and cream cheese",
                    "squash zucchini",
                    "zucchini with ricotta cheese",
                    "baked pasta with zucchini",
                    "paleo lasagna",
                    "lasagna martha stewart",
                    "courgette noodles",
                    "zucchini  lasagna",
                    "healthy italian lasagna",
                    "lasagna veg",
                    "cheese zucchini pasta bake",
                    "lasagna with zucchini noodles",
                    "lasagna zucchini squash",
                    "zucchini+lasagna+with+ricotta+cheese"
                ]
            },
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ab2daba35228f21eda6f6b15cfc382cf",
                "label": "Vegetarian Lasagna",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e31/e31f033f6b93dd443b929986f6bfaff5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a297e46c34d82a44ffab407ee97ce7dee3c1410a5ba66522dd3fd629ccfc4f7b",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e31/e31f033f6b93dd443b929986f6bfaff5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=24c7ef0d088f410c4c795b97669dd6e671e61b602c707ca8c6c7953716c1e8cd",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e31/e31f033f6b93dd443b929986f6bfaff5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a5661b77720064ae2ac09852de9ddcd3ba78a58bf0c0b6019217c361c516d34f",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e31/e31f033f6b93dd443b929986f6bfaff5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a297e46c34d82a44ffab407ee97ce7dee3c1410a5ba66522dd3fd629ccfc4f7b",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e31/e31f033f6b93dd443b929986f6bfaff5-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLWVhc3QtMSJIMEYCIQDfPPTyXb6B2ozAk1PwoLSS7n1n%2BS%2FefZ%2F1Nzmk3mFB4QIhAIKEbPIdLb7fkvtYVNgxNQRAaApQMFjPqgPggvE0PHNHKrkFCGUQABoMMTg3MDE3MTUwOTg2IgzfCcAECBsCq9%2FXJ7sqlgU61zifW%2BIoXDZSXuLm9MN8IbYDPi80DZLB30G82%2FFYfmWGJWjIHV3POe7XylS02YyrAM5ndDDozlJT7fxJyL1tY4uu8qWGG6PV3zvr45bRkikgUs2UR38PUAcPDjmnXipNdQQ3ZvdDVNEOmZm82FsIXbioAL8iel3epm8Y6m03wtFRw8eAAvFEuJU3E9uan3lK3c9aoE7u2MAxYjiBNPZ%2BFd1jeHmdp6vuGvcs%2BIOfDxf7TfvA8dtjToo3Xua%2BaMGn%2B5b3ORrI9lAvZqm%2BJ3le7qOVe5hKzozKyJo1kJgTUDpF4y4uDf2UtzSBwE%2FMOerk1eTQGlSxiRhajg%2F6pry3ofF8YAl%2BjNlKYtDXwWmYaEm%2BmqRYw2BNvdJNhO1ylcl98bPtOhY0EP%2FHEh%2FPcp9mlUZey5uZHrnGb9YaXTwMxhLEGkm7CIFTnpp9mjVuIYPcBVGWhMPCET1yI8E1AarGPjSsmJoqAtcZ5XJ4D8JBDHStJ5DKuwDDCgOH2D%2FxFv%2B0XjsJo6%2BWGLAa1%2FR2UE%2FcxmL07xriatYUIcYcvSvP4Jsd9BJ9lTz%2BoNlPnJ3rSdJ1KqPCs2DbFmkgb3LF7FpYZfa93Wm1%2B93G7CAFSI5Akxn67EQcEazNG3W8RN%2B2358r9Pj7LXdNpozDPamAF4ZehOO%2Bj6NjymnnQeHIqwvkyXBniIfB8kicOrlB%2FGdDjuf12IJSYGXlm7Mlr%2FklfJNTQp9EWXO5w6JGDkAPUfq94jP0ZxvxVZUJF9GGTqt7JwYfTIT96rPN1suhswcQmyswjH3q0mF4BUyucry%2B33%2F8kCWlFmqhN0yEqIltgu6uUf%2FlvDslFyKXjjyThmu8KhLEYlzOD5xTMuqooqi0U3b9XvtcZK6n0zDdnJOvBjqwAXJDksHrVfsKrwNnWwz9S0siT5CNKWZ0sx%2Bbsxk1oTvMHKTnXiBqC%2BP9Age3d3MOOFfrjUtaq13PULwSX%2B9hogfgIbF0kmMpDG%2FAn9YW0MZwZ1kAvT17qvNipg6d18jkoVLJ2WqBXSE9I7zLIYCIKGo9cFlAUnvmAsA5Ix9ygjuusVP5VlNPXtvPl7DRzqy6LE9pOG5cU7hCNCJTDwdsSfvZITHa4bk14NEsDe0TSRzM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240303T201947Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDG53Z64M%2F20240303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=75b6846d04b76f8714044b71d966376e15ff95e9f98d256cefc54ef407a25983",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/27789-vegetarian-lasagna",
                "shareAs": "http://www.edamam.com/recipe/vegetarian-lasagna-ab2daba35228f21eda6f6b15cfc382cf/lasagna",
                "yield": 8.0,
                "dietLabels": [
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 tablespoons olive oil",
                    "1 yellow onion, diced",
                    "1 large carrot, diced",
                    "1/4 cup white wine",
                    "28 ounces canned whole tomatoes",
                    "28 ounces canned tomato purée",
                    "1 teaspoon dried thyme",
                    "1 tablespoon salt",
                    "Freshly ground pepper",
                    "4 to 6 tablespoons olive oil",
                    "3 to 4 medium zucchini, sliced 1/3 inch thick (they’ll shrink when cooked)",
                    "2 Italian eggplants, sliced 1/3 inch thick",
                    "1 egg",
                    "15 ounces ricotta cheese",
                    "9 ounces no-boil or oven-ready lasagna noodles",
                    "4 ounces goat cheese (I love the Vermont Creamery brand)",
                    "1 pound fresh mozzarella, sliced (you should have enough slices to cover the whole top of the lasagna)",
                    "4 tablespoons grated Parmesan cheese",
                    "Salt and pepper"
                ],
                "ingredients": [
                    {
                        "text": "2 tablespoons olive oil",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 27.0,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1 yellow onion, diced",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "yellow onion",
                        "weight": 125.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "1 large carrot, diced",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "carrot",
                        "weight": 72.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                        "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                    },
                    {
                        "text": "1/4 cup white wine",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "white wine",
                        "weight": 58.8,
                        "foodCategory": "wines",
                        "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
                        "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
                    },
                    {
                        "text": "28 ounces canned whole tomatoes",
                        "quantity": 28.0,
                        "measure": "ounce",
                        "food": "canned whole tomatoes",
                        "weight": 793.7866475000001,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
                        "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
                    },
                    {
                        "text": "28 ounces canned tomato purée",
                        "quantity": 28.0,
                        "measure": "ounce",
                        "food": "canned tomato purée",
                        "weight": 793.7866475000001,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_a9li7ueb0mw12dbnr2jlhbry5k3a",
                        "image": "https://www.edamam.com/food-img/d70/d7026867f3273c7210135ca14431139b.jpg"
                    },
                    {
                        "text": "1 teaspoon dried thyme",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "dried thyme",
                        "weight": 1.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                        "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
                    },
                    {
                        "text": "1 tablespoon salt",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "salt",
                        "weight": 18.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 15.199286624998116,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "4 to 6 tablespoons olive oil",
                        "quantity": 5.0,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 67.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "3 to 4 medium zucchini, sliced 1/3 inch thick (they’ll shrink when cooked)",
                        "quantity": 3.5,
                        "measure": "<unit>",
                        "food": "zucchini",
                        "weight": 686.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
                        "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
                    },
                    {
                        "text": "2 Italian eggplants, sliced 1/3 inch thick",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "eggplants",
                        "weight": 1096.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_ac9n68caswlpggbp7727varlyjk5",
                        "image": "https://www.edamam.com/food-img/da5/da5978d61b89a363147a6d13c36e3b54.jpg"
                    },
                    {
                        "text": "1 egg",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 43.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "15 ounces ricotta cheese",
                        "quantity": 15.0,
                        "measure": "ounce",
                        "food": "ricotta cheese",
                        "weight": 425.242846875,
                        "foodCategory": "Cheese",
                        "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
                    },
                    {
                        "text": "9 ounces no-boil or oven-ready lasagna noodles",
                        "quantity": 9.0,
                        "measure": "ounce",
                        "food": "lasagna noodles",
                        "weight": 255.145708125,
                        "foodCategory": "grains",
                        "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                        "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                    },
                    {
                        "text": "4 ounces goat cheese (I love the Vermont Creamery brand)",
                        "quantity": 4.0,
                        "measure": "ounce",
                        "food": "goat cheese",
                        "weight": 113.3980925,
                        "foodCategory": "Cheese",
                        "foodId": "food_bj6jxigaqy71qsasnj3s8akgt6xl",
                        "image": "https://www.edamam.com/food-img/e86/e86528ffe33eaa852f1cd764c80375dd.jpg"
                    },
                    {
                        "text": "1 pound fresh mozzarella, sliced (you should have enough slices to cover the whole top of the lasagna)",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "mozzarella",
                        "weight": 453.59237,
                        "foodCategory": "Cheese",
                        "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                        "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
                    },
                    {
                        "text": "4 tablespoons grated Parmesan cheese",
                        "quantity": 4.0,
                        "measure": "tablespoon",
                        "food": "Parmesan cheese",
                        "weight": 37.17656249937148,
                        "foodCategory": "Cheese",
                        "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "Salt and pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 30.398573249996232,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 15.199286624998116,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 5308.730331461277,
                "totalCO2Emissions": 30290.910182197484,
                "co2EmissionsClass": "G",
                "totalWeight": 5096.417349175817,
                "totalTime": 0.0,
                "cuisineType": [
                    "italian"
                ],
                "mealType": [
                    "teatime"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 5308.730331461277,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 288.4643345527303,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 129.4761823218882,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.43239868009375,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 121.42634732201398,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 21.676361968825137,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 458.7032256234149,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 368.43283132616585,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 90.27039429724904,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 132.0697257665493,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 249.38372115489963,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 804.1101523183228,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 11810.711654354944,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 4671.508544706165,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 970.9027039227316,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 12138.61000207349,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 38.20662225643927,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 30.372525527334123,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 4474.512957699382,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2850.573221951198,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 345.06250222000006,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 6.176848286641002,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 5.719835860635406,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 34.851938468767,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 5.6258617497631676,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 733.6127581899555,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 733.6127581899555,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 15.000745360179959,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.164330356246857,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 41.27894125529859,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 267.7346677412332,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 4020.4699036816646,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 265.43651657306384,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 443.7912839272774,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 647.380911609441,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 152.90107520780498,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 361.08157718899616,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 498.7674423097993,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 268.0367174394409,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 492.11298559812263,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 467.1508544706164,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 231.16731045779323,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 258.26829791645724,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 212.2590125357737,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 276.1138684303102,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 639.2161368141974,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 316.73035799457756,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 383.40278024444444,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 514.7373572200836,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 439.9873738950313,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 217.82461542979377,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 432.7585961356283,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 183.40318954748886,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 625.0310566741649,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 27.76220237497905,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 275.1929417019906,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 223.1122231176943,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 288.4643345527303,
                        "hasRDI": true,
                        "daily": 443.7912839272774,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 129.4761823218882,
                                "hasRDI": true,
                                "daily": 647.380911609441,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.43239868009375,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 121.42634732201398,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 21.676361968825137,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 458.7032256234149,
                        "hasRDI": true,
                        "daily": 152.90107520780498,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 368.43283132616585,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 90.27039429724904,
                                "hasRDI": true,
                                "daily": 361.08157718899616,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 132.0697257665493,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 249.38372115489963,
                        "hasRDI": true,
                        "daily": 498.7674423097993,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 804.1101523183228,
                        "hasRDI": true,
                        "daily": 268.0367174394409,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 11810.711654354944,
                        "hasRDI": true,
                        "daily": 492.11298559812263,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 4671.508544706165,
                        "hasRDI": true,
                        "daily": 467.1508544706164,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 970.9027039227316,
                        "hasRDI": true,
                        "daily": 231.16731045779323,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 12138.61000207349,
                        "hasRDI": true,
                        "daily": 258.26829791645724,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 38.20662225643927,
                        "hasRDI": true,
                        "daily": 212.2590125357737,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 30.372525527334123,
                        "hasRDI": true,
                        "daily": 276.1138684303102,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 4474.512957699382,
                        "hasRDI": true,
                        "daily": 639.2161368141974,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2850.573221951198,
                        "hasRDI": true,
                        "daily": 316.73035799457756,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 345.06250222000006,
                        "hasRDI": true,
                        "daily": 383.40278024444444,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 6.176848286641002,
                        "hasRDI": true,
                        "daily": 514.7373572200836,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 5.719835860635406,
                        "hasRDI": true,
                        "daily": 439.9873738950313,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 34.851938468767,
                        "hasRDI": true,
                        "daily": 217.82461542979377,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 5.6258617497631676,
                        "hasRDI": true,
                        "daily": 432.7585961356283,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 733.6127581899555,
                        "hasRDI": true,
                        "daily": 183.40318954748886,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 733.6127581899555,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 15.000745360179959,
                        "hasRDI": true,
                        "daily": 625.0310566741649,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 4.164330356246857,
                        "hasRDI": true,
                        "daily": 27.76220237497905,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 41.27894125529859,
                        "hasRDI": true,
                        "daily": 275.1929417019906,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 267.7346677412332,
                        "hasRDI": true,
                        "daily": 223.1122231176943,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 4020.4699036816646,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
        }
    ]
}

export default function fetchSearchResults(q: string) {
    if (!q) {
        return null;
    }

    const results: any = mockResults.hits.slice(0, 3).map(r => r.recipe);

    return results;
}