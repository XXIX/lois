# New Siteleaf Theme
Get Siteleaf themes up and running quickly


## Locals only
The site is built on [Siteleaf](http://siteleaf.com), which makes running it locally super easy.

- Install the Siteleaf gem by running `gem install siteleaf`
- Clone this rep
- Make a site on siteleaf
- In the directory containing this repo, run `siteleaf config sitename.siteleaf.net` (It'll ask you to sign in - you should've been made an admin through the Siteleaf admin area)
- Run `siteleaf pull theme`
- Or, run `siteleaf new sitename.com`
- Run `siteleaf server` and go to [http://localhost:9292/](http://localhost:9292/)


- Make your changes locally
- Once you're happy with your changes, run `siteleaf push theme` to put your local changes on the remote
- Click `Publish changes` to push **content and code** changes

###### Also...
- For more info, check the [Siteleaf theme documentation](http://www.siteleaf.com/help/themes/)
- The CSS and JS are built on top of [v0](https://github.com/jheftmann/v0), so refer to the [documentation](https://github.com/jheftmann/v0), particularly [this part](https://github.com/jheftmann/v0#run-it-locally) on compiling LESS and JS.


##### Publishing
- You can make changes in the CMS and they'll appear locally, just don't click `Publish changes` or they'll end up on the live site
- Once you're happy with your changes, run `siteleaf push theme` to put your local changes on the remote
- Click `Publish changes` to push your content changes

For more info, check the [Siteleaf docs](https://github.com/siteleaf/siteleaf-gem).

## License
Subject to the original licenses; refer to [Siteleaf](http://siteleaf.com) and [v0](https://github.com/jheftmann/v0).