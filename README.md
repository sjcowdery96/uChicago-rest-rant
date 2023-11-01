# Project REST-Rant

REST-Rant is an app where users can review restaurants.

### Methods
| Method | Path | Purpose |
|---|---|---|
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

## Sample Restaurants

| City | State | Name | Cuisines | Picture |
|---|---|---|---|---|
| New York City | NY | The Flying Pig | Mediterranean, Fusion | [Image](https://i.imgur.com/jQ45678.jpg) |
| Los Angeles | CA | The Dragon's Lair | Chinese, Sichuan | [Image](https://i.imgur.com/9876543.jpg) |
| San Francisco | CA | The Enchanted Forest | Vegetarian, Vegan | [Image](https://i.imgur.com/1234567.jpg) |
| Chicago | IL | The Windy City Diner | American, Classic | [Image](https://i.imgur.com/8901234.jpg) |
| Austin | TX | The Lone Star BBQ | BBQ, Tex-Mex | [Image](https://i.imgur.com/5678901.jpg) |

