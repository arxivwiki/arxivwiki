To run this website locally:
* clone the repository
* Add a file "Gemfile" that has:
```
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```
* then run the following:
```
gem install bundler
bundle install
bundle exec jekyll serve
```

If you have issues, please email `marwahaha@berkeley.edu`